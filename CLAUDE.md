# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

SysMocap is a cross-platform Electron desktop app for real-time, video-driven motion capture that animates 3D virtual characters (VTuber/Live/AR/VR). The pipeline is: webcam/video frame → **MediaPipe Holistic** (face/pose/hand landmarks) → **Kalidokit** (`.solve()` turns landmarks into bone rotations/blendshapes) → **three.js + @pixiv/three-vrm** (applies rotations to a rigged model and renders). The GUI is **Vue 2 + MDUI** (Material Design) with a Material You dynamic color system.

## Commands

```shell
npm i            # install
npm start        # run the app (= electron .)
```

There are **no tests and no linter** configured. To debug the main process, use the VS Code launch config "Debug Main Process" (`.vscode/launch.json`), which runs the bundled Electron binary with the inspector attached.

Packaging (per-platform, run after `npm i`):
- `npm run package:mac64 | package:macarm | package:win64 | package:winarm` — produce app bundles via `@electron/packager` (pinned to Electron 31.1.0, `--asar`) into `./OutApp`.
- Then a distributable: `npm run dmg`/`dmgarm` (appdmg, needs `npm run dmgtool` first), `npm run 7z:win64`/`7z:winarm`, `npm run msix64`/`msixarm` (`buildmsi.js` + electron-wix-msi).

Release CI (`.github/workflows/main.yml`) triggers **only on `v*.*.*` tags** and builds/uploads all artifacts. The version in `package.json` drives the in-app update check (`github-version-checker` against the `xianfei/SysMocap` GitHub releases).

## Process & window architecture

`main.js` is the Electron main process. It owns all `BrowserWindow`/`BrowserView` creation, all IPC, and spawns a **Worker thread** for the forwarding web server. Renderers run with `nodeIntegration: true`, `contextIsolation: false`, and `@electron/remote` enabled — this is the legacy/insecure Electron pattern and is used pervasively (e.g. `require(...)` directly in renderer scripts, `remote.getGlobal(...)`). Any refactor toward a secure preload/contextBridge model touches nearly every file.

Windows (all created in `main.js`, opened via IPC channels):
- **Main window** → `mainview/framework.html` + `framework.js` — the GUI shell (model library / mocap / settings tabs). Hosts an `<iframe id="foo">` where the live render page is loaded.
- **Model viewer/editor** → `modelview/modelview.html` (IPC `openModelViewer`) — bone + dressing controls; uses `svelte-jsoneditor` to edit a model's `binding`/`accessories`/camera JSON.
- **PDF viewer** → `pdfviewer/viewer.html` (IPC `openDocument`/`openPDF`) — bundled PDF.js showing `pdfs/document.pdf` (the user manual).
- **GPU info** → `chrome://gpu` (IPC `openGpuInfo`).

## The two mocap rendering paths (important)

Which path runs is controlled by the setting `performance.useDescrertionProcess` (**note the misspelling — it means "discrete process"; the typo is load-bearing and appears verbatim in settings + branching logic**). It defaults to `true` on macOS, `false` elsewhere.

1. **Integrated path** (`useDescrertionProcess == false`): `#foo` iframe loads `mocaprender/render.html` → `mocaprender/script.js`. This single page does **both** MediaPipe detection and three.js rendering in the same context.

2. **Discrete-process path** (`useDescrertionProcess == true`): detection and rendering are split into two contexts to keep heavy CV work off the render thread:
   - A separate **`BrowserView`** loads `mocap/mocap.html` → `mocap/mocap.js` — runs MediaPipe + Kalidokit only, then IPC-sends the rigged data.
   - The `#foo` iframe loads `render/render.html` → `render/render.js` — rendering only; exposes `window.onMocapData(data)`.
   - Data flow: `mocap.js` → `ipcRenderer.send("sendRenderData")` → `main.js` `ipcMain` → `mainWindow.webContents.send("sendRenderDataForward")` → `framework.js` → `iframeWindow.onMocapData(data)` → `render.js`.

`mocaprender/script.js` and `render/render.js` share almost identical rendering logic (the rig/load/light code is duplicated, not factored out) — **changes to rendering usually need to be made in both files**. `mocap/mocap.js` mirrors the detection half of `mocaprender/script.js`.

## Rig application & the model `binding` system

The core animation primitives are `rigRotation(name, rotation, dampener, lerpAmount)` and `rigPosition(...)`, defined in the render scripts. They branch on model type:

- **VRM**: bones resolved via `currentVrm.humanoid.getNormalizedBoneNode(name)`; expressions via `currentVrm.expressionManager`. VRM 0.x vs 1.0 differ in axis sign and 180° facing — code checks `currentVrm.meta.metaVersion`.
- **FBX / glTF (glb)**: bones resolved through `THREE.SkeletonHelper` by name, using the model's **`binding`** map. Each entry is `{ name: "<bone name in file>", order: "XYZ", func: { fx, fy, fz } }` where `fx/fy/fz` are **string expressions `eval`'d** against the incoming `x/y/z` (e.g. `"-x"`, `"z"`). This is how arbitrary skeletons (including non-standard ones) are remapped. The default Mixamo binding is the `mixamorig` object hardcoded at the top of `mainview/framework.js`, applied automatically when a `.fbx` is imported.

The standard humanoid node names the rig drives (Hips, Neck, Chest, Spine, {Left,Right}{Upper,Lower}{Arm,Leg}, hands/fingers for VRM) are listed in `README.md`. Models lacking these need a manual `binding` set via the model viewer.

## Models & persistence

- Built-in models: `models/models.json` (array of model objects: `{ name, path, type, picBg, accessories, binding?, cameraPosition?, cameraRotation?, cameraTarget?, init? }`). Model assets live in `models/`.
- User-imported models and all settings persist via `electron-localstorage` to `~/<appName>/profile.json` (path set up in `main.js`, exposed as global `storagePath`). The selected model / camera / video path are passed to render pages through `localStorage` keys (`modelInfo`, `useCamera`, `cameraId`, `videoFile`).
- `utils/setting.js` is the settings module: `globalSettings` is a versioned singleton (bumping `currentVer` discards old saved settings and reloads defaults). Settings groups: `ui`, `preview`, `output`, `forward`, `mediapipe`, `dev`, `performance`. `saveSettings()` also mirrors a few keys (`useDgpu`, `useDMoc`, `useDark`, `used`) to top-level storage so `main.js` can read them **before** any renderer loads.

## Forwarding web server (`webserv/`)

When `forward.enableForwarding` is on, `main.js` spawns `webserv/worker.js` (a Worker thread) which runs `webserv/server.js`: an Express static server + Socket.IO that broadcasts mocap data to browser clients. `webserv/public/` is a **standalone three.js renderer** (`script.js`) that connects via Socket.IO (`socket.on("message", ...)`) — this is what enables OBS browser-source and WebXR use. `webserv/httpx.js` multiplexes **HTTP and HTTPS on a single port** by sniffing the first byte of each connection (TLS handshake `0x16` → https), so `forward.port` serves both. SSL cert/key are in `webserv/ssl/`. Broadcast is triggered from render scripts via IPC `sendBoradcast` / `sendBoradcastNew` (**misspelled "Boradcast" — keep the spelling when wiring new senders/receivers**).

## Module loading convention

HTML pages mix two loading styles, and getting this wrong breaks imports:
- **ESM via `<script type="importmap">`**: `three`, `three/addons/`, and `@pixiv/three-vrm` are mapped to `node_modules` paths in each render HTML page; the entry script is `type="module"`.
- **Classic `<script>` globals**: MediaPipe (`Holistic`, drawing/camera utils), `Kalidokit`, Vue 2, MDUI, `html2canvas`, `RecordRTC` are loaded as plain scripts and used as globals.
- MediaPipe's `locateFile` is overridden to load `.wasm`/data from `node_modules/@mediapipe/holistic/` (works both in Electron via `__dirname` and in the web client via relative path).

## i18n

`utils/language.js` exports `languages.{zh,en}` (nested string tables). To add a language: add a top-level key here, then add an `<option>` in `mainview/framework.html`'s language `<select>` (see README "Improve Translate").

## Things to know before refactoring

- **License mismatch**: every source header says "Mozilla Public License 2.0" but `package.json` declares `"license": "ISC"`. Confirm intended license before publishing changes.
- `mocaprender/mocapWorker.js` is a Web Worker wrapper around Holistic that appears **unused** by the current paths — verify before relying on or deleting it.
- `utils/model-importer.js` is an empty placeholder.
- `utils/` also vendors large third-party bundles (`mdc-bundle.js`, `html2canvas.js`, `RecordRTC.js`, `particle-boom.umd.js`) — these are libraries, not app code.
