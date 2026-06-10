# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

SysMocap is a cross-platform Electron desktop app for real-time, video-driven motion capture that animates 3D virtual characters (VTuber/Live/AR/VR). The pipeline is: webcam/video frame → **MediaPipe Holistic** (face/pose/hand landmarks) → **Kalidokit** (`.solve()` turns landmarks into bone rotations/blendshapes) → **three.js + @pixiv/three-vrm** (applies rotations to a rigged model and renders). The GUI is **Vue 3 (SFCs) + MDUI 1.x** (Material Design) with a Material You dynamic color system, built with **Vite**.

## Commands

```shell
npm i            # install
npm run build    # vite build -> dist/
npm start        # = npm run build && electron .
```

There are **no tests and no linter** configured. Renderer pages are served from the Vite build output (`dist/`), so **you must `npm run build` before `electron .`** (`npm start` does both). To debug the main process, use the VS Code launch config "Debug Main Process" (`.vscode/launch.json`).

Packaging (per-platform, run after `npm i`; pinned to **Electron 42.4.0**, `--asar`, output `./OutApp`):
- `npm run package:mac64 | package:macarm | package:win64 | package:winarm` (via `@electron/packager`).
- Then a distributable: `npm run dmg`/`dmgarm` (appdmg, needs `npm run dmgtool` first), `npm run 7z:win64`/`7z:winarm`, `npm run msix64`/`msixarm`.
- **Known gap:** packaging hasn't been re-validated post-Vite. The MediaPipe `locateFile` returns absolute fs paths into `dist/node_modules/@mediapipe/holistic/`; inside an `--asar` build those likely need `asarUnpack`. `npm start` (unpacked dist) works.

Release CI (`.github/workflows/main.yml`) triggers **only on `v*.*.*` tags**. `package.json`'s version drives the in-app update check (`github-version-checker` vs `xianfei/SysMocap` releases).

## Build system (Vite)

`vite.config.mjs` — a **multi-page** build (one input per renderer page) with three plugins:
- **`@vitejs/plugin-vue`** — compiles `.vue` SFCs.
- **`vite-plugin-electron-renderer`** — keeps `nodeIntegration` working by externalizing `electron` + node built-ins, so renderer code can still `require(...)` (we deliberately did **not** adopt electron-vite / a preload+contextBridge model).
- **`vite-plugin-static-copy`** — copies runtime assets the bundler can't see.

Key config facts (all load-bearing):
- `resolve.alias.vue = "vue/dist/vue.esm-bundler.js"` (full build w/ runtime template compiler, for the few inline `createApp({template})` mounts) + `define: __VUE_OPTIONS_API__` etc.
- Inputs are the 5 page HTMLs under `src/pages/*`. Vite preserves the input path relative to root, so **the build output mirrors the source: `dist/src/pages/<page>/`**. `main.js` `loadFile`s those exact paths.
- **Copy destinations encode a path-depth contract** (see below): `node_modules`, `utils/*.js`, `icons`, mdui/kalidokit/lil-gui/mediapipe dists → `dist/` root; **`models/` + `pdfs/` → `dist/src/pages/`** (beside the pages).

### The path-depth contract (read before moving files or adding asset refs)

Pages live 3 levels deep (`dist/src/pages/<page>/`). Runtime (non-bundled) asset refs must match where the asset is copied:
- **`../../../node_modules`, `../../../utils`** → resolve to the `dist/` root (classic `<script src>`, the MediaPipe `locateFile`, `mocap.js`'s `require`).
- **`../models/...`, `../pdfs/...`** (in `models.json` `path`/`picBg` and the about-section `<img>`) are *one* level up → resolve to `dist/src/pages/{models,pdfs}`. `models.json` is intentionally left as `"../models/..."` so the web server's `path.resolve(__dirname, modelObj.path)` (from `webserv/`) still finds the source `repo/models`.
- ESM `import`s (entry → `../../components`, `../../render`, ...) are bundled, so they only need to be correct relative to the *source* file.
- CSS `<link>`s (mdui.css, fonts.css, per-page css) are **bundled** by Vite into `dist/assets/`.

## Process & window architecture

`main.js` is the Electron main process: it owns all `BrowserWindow`/`BrowserView` creation, all IPC, and spawns a **Worker thread** for the forwarding web server. Renderers run with `nodeIntegration: true`, `contextIsolation: false`, `@electron/remote` — the legacy/insecure pattern, used pervasively (`require(...)` in renderer code, `remote.getGlobal(...)`). This was deliberately kept; a secure preload migration would touch nearly every file.

Windows (created in `main.js`):
- **Main window** → `dist/src/pages/mainview/framework.html` — the GUI shell. Hosts `<iframe id="foo">` for the live render page.
- **Model viewer/editor** → `dist/src/pages/modelview/modelview.html` (IPC `openModelViewer`) — launch input passed via `webPreferences.additionalArguments` (`process.argv` `"argsData"`).
- **PDF viewer** → `pdfviewer/viewer.html` (IPC `openDocument`/`openPDF`) — **loaded from source, not built** (bundled PDF.js).
- **GPU info** → `chrome://gpu`.

Renderer pages share one `file://` origin so `localStorage` (`modelInfo`/`useCamera`/`cameraId`/`videoFile`) hands off from the shell to the render iframe.

## The two mocap rendering paths

Controlled by setting `performance.useDescrertionProcess` (**note the misspelling — it means "discrete process"; the typo is load-bearing, appearing verbatim in settings + branching**). Defaults `true` on macOS, `false` elsewhere.

1. **Integrated** (`== false`): `#foo` iframe → `src/pages/mocaprender/render.html` → `script.js` mounts `MocapStage.vue` + `InputPreview.vue` and drives detection in-page via `holisticPipeline`.
2. **Discrete** (`== true`): detection split into a **`BrowserView`** (`src/pages/mocap/mocap.html` → `mocap.js`, a thin ESM entry over the shared `holisticPipeline`) that IPC-sends rigged data; the `#foo` iframe → `src/pages/render/render.html` → `render.js` (render only, `MocapStage.vue` + `ipcSource`). Data flow: `mocap.js` → `send("sendRenderData")` → `main.js` → `mainWindow.send("sendRenderDataForward")` → `App.vue` (framework) → `iframeWindow.onMocapData(data)` → `render.js`.

**The render UI is now unified** — both paths use the same `src/components/MocapStage.vue` (3D stage, target overlay, loading spinner, recording); the integrated page adds `InputPreview.vue`. No more duplicated rig/render code.

## Shared render core (`src/`)

The old triplication (`mocaprender/script.js`, `render/render.js`, `mocap/mocap.js`) is gone. Logic lives in:
- **`src/render/avatarRenderer.js`** — `createAvatarRenderer({settings, modelObj, continuousData})`: three.js scene/camera/lights, model load (VRM vs FBX/glTF), `rigRotation`/`rigPosition`/`rigFace`/`applyRigged`, animate loop, recording (RecordRTC/html2canvas), keyboard, drag-to-set-background, `setTarget`. Attaches to the DOM the SFC renders (`#model`/`#status`/`#background-canvas`/`#recording`) — queried in the SFC's `onMounted`.
- **`src/render/binding.js`** — the FBX/glTF skeleton remap. Each `binding` entry is `{ name, order, func:{fx,fy,fz} }` where `fx/fy/fz` are string expressions (e.g. `"-x"`, `"z"`) evaluated against incoming `x/y/z`. **No longer `eval`** — compiled & cached via `new Function("x","y","z","return ("+expr+")")` (param names are literal strings, so minification-safe).
- **`src/mocap/holisticPipeline.js`** — MediaPipe Holistic + Kalidokit `.solve()` + skeleton drawing. Owns `.input_video` + `canvas.guides` (rendered by `InputPreview.vue`).
- **`src/data/ipcSource.js`** — wraps `window.onMocapData` for the discrete render page.

VRM bones resolve via `currentVrm.humanoid.getNormalizedBoneNode(name)` (VRM 0.x vs 1.0 differ in axis sign / 180° facing — checked via `currentVrm.meta.metaVersion`); FBX/glTF via `THREE.SkeletonHelper` + the model's `binding`. The default Mixamo binding (`mixamorig`) is in `src/components/framework/App.vue`, applied when a `.fbx` is imported.

## SFC layout & the framework store

- `src/pages/<page>/` — each page is a thin HTML mount point + an entry that `createApp(...).mount("#app")`.
- `src/components/` — `MocapStage.vue`, `InputPreview.vue`, `ModelViewer.vue`, and **`framework/`** (the main GUI, broken up): `App.vue` (shell + all imperative logic: theme, `startMocap`, right-click menu, update check, the `#foo` bridge), `TitleBar.vue`, `ModelLibraryTab.vue`, `MocapTab.vue`, `SettingsTab.vue`, and **`store.js`** — a `reactive()` singleton the titlebar + tabs all read/write (so `v-model` crosses components with no prop/emit plumbing; `App.vue`'s logic uses it via an `app = state` alias and exposes `window.sysmocapApp = state`).

### Vue 3 gotchas (see docs/REFACTOR.md for the full list)

A production build suppresses `[Vue warn]`, so these surface only at runtime — **test the UI, don't trust a clean build**:
- `createApp().mount(el)` ignores the mount container's own directives → FOUC `display:none` guards must be cleared in JS post-`mount()` (only in-DOM-template pages; SFC pages have no FOUC).
- Template expressions can't see Node globals → `require`/`toRaw` exposed via `app.config.globalProperties`.
- Reactive data is a Proxy → `toRaw(obj)` before sending over IPC (structured-clone rejects Proxies).
- Static `style="display:none"` + `v-show` conflict (Vue 3 re-applies the static style); let `v-show` own display.

## Models & persistence

- Built-in models: `models/models.json` (`{ name, path, type, picBg, accessories, binding?, cameraPosition?, cameraRotation?, cameraTarget?, init? }`); assets in `models/`.
- User models + settings persist via `electron-localstorage` to `~/<appName>/profile.json` (global `storagePath`).
- `utils/setting.js`: `globalSettings` is a versioned singleton (bumping `currentVer` discards old saved settings — **don't bump it casually**). Groups: `ui`, `preview`, `output`, `forward`, `mediapipe`, `dev`, `performance`. `saveSettings()` mirrors `useDgpu`/`useDMoc`/`useDark`/`used` to top-level storage so `main.js` can read them before any renderer loads.

## Forwarding web server (`webserv/`) — NOT yet on the shared core

When `forward.enableForwarding` is on, `main.js` spawns `webserv/worker.js` → `webserv/server.js` (Express + Socket.IO). `webserv/public/` is a **standalone three.js renderer** (`script.js`) connecting via Socket.IO (`socket.on("message", ...)`) — OBS browser-source + WebXR. It is still a **3rd copy** of the rig logic (its scene differs: full-window + WebXR); unifying it onto `src/render` is the remaining Phase-B item. `webserv/httpx.js` multiplexes HTTP+HTTPS on one port by sniffing the first byte (TLS `0x16`). Broadcast IPC is `sendBoradcast` / `sendBoradcastNew` (**misspelled "Boradcast" — keep it**).

## i18n

`utils/language.js` exports `languages.{zh,en}`. To add a language: add a top-level key, then an `<option>` in `SettingsTab.vue`'s language `<select>`.

## Things to know before refactoring

- **License mismatch**: source headers say "Mozilla Public License 2.0" but `package.json` says `"license": "ISC"`. Confirm before publishing.
- `utils/` vendors large third-party bundles (`mdc-bundle.js`, `html2canvas.js`, `RecordRTC.js`, `particle-boom.umd.js`) — libraries, loaded as classic globals, not app code.
- `docs/REFACTOR.md` is the design doc: hard invariants + the Vue 2→3 / build gotchas accumulated during this refactor.
