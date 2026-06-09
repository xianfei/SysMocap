# SysMocap Refactor Plan — Vite + Vue 3 (branch `refactor/vite-vue3`)

Single source of truth for the in-progress modernization. Derived from a fan-out
audit + adversarial critique of the codebase. **The Invariants section is a hard
safety spec — every implementation step must hold all of it.**

## Goal & locked decisions

Modernize the build/dependency stack without breaking config-file compatibility
or any existing feature.

- Build: **plain Vite 8 (multi-page)** + **`vite-plugin-electron-renderer` v1** (`renderer()` defaults). NOT electron-vite (it doesn't support nodeIntegration).
- **Keep** `nodeIntegration:true` / `contextIsolation:false` / `@electron/remote`. Renderer keeps using `require()`. (Security hardening is explicitly out of scope.)
- **Keep MDUI at 1.x** (do not upgrade).
- **Vue 2.7 → Vue 3** via `createApp`; some modules may become SFCs.
- Replace direct `eval(bindingFunc.fx/fy/fz)` with a cached `new Function("x","y","z",...)` — **string-expression data format unchanged**.
- Collapse the **triplicated** render/rig logic (`mocaprender/script.js`, `render/render.js`, `webserv/public/script.js`) into ONE shared module, decoupled from data source (IPC desktop / socket.io web).
- **Low-disruption layout**: keep existing page folders; add `src/` for shared code only.
- Update Electron 31 → latest; adopt some newer features. **BrowserView is deprecated but still works as a wrapper** → WebContentsView migration is optional/deferrable.

## Invariants (DO NOT BREAK — verified against the codebase)

1. **`file://` origin sharing.** mainWindow + `#foo` iframe (`../render/render.html` & `../mocaprender/render.html`) + the discrete BrowserView (`mocap/mocap.html`) MUST load from the same `file://` origin and default partition. The mocap handoff passes `modelInfo`/`useCamera`/`cameraId`/`videoFile`/`selectModel` through DOM `localStorage`; a different origin/partition → `localStorage` returns null → `JSON.parse(null)` throws → **both mocap paths crash**. Production = `loadFile` against built `dist/`; if a dev server is used, ALL four contexts must share one http origin (never mix http/file). Add a null-guard before `JSON.parse(localStorage...)`.
2. **`utils/setting.js` `currentVer` stays `0.5`.** The gate returns defaults (wiping user settings) when `ver < currentVer`, with no migration. Keep misspelled keys (`performance.useDescrertionProcess`, `preview.showSketelonOnInput`) and string-typed values (`forward.supportForWebXR:"false"`, `forward.port:"8080"`, `mediapipe.modelComplexity:"2"`, confidences `"0.7"`) byte-identical. New fields must backfill, not bump the gate. Keep `valued:true`.
3. **IPC channel strings are immutable, incl. misspellings.** `sendBoradcast` / `sendBoradcastNew` (IPC) are **translated by main.js into the correctly-spelled worker type `sendBroadcast`** — asymmetric and load-bearing. Also preserve `sendRenderData`, `sendRenderDataForward`, `startWebServer`, `stopWebServer` (each of the last two is ONE string reused as both an IPC channel AND a worker postMessage type), `openDocument`, `openModelViewer`, `openGpuInfo`, `openPDF`, `switch-tab`, `tabChanged`. Gate: the count of `Borad` occurrences must be invariant pre/post refactor. Rename (if ever) only atomically across all sites in one commit.
4. **Mocap payload + wire format.** Every hop carries `{ type:"xf-sysmocap-data", riggedPose, riggedLeftHand, riggedRightHand, riggedFace }`; web client gates on `type=="xf-sysmocap-data"` over socket.io event `"message"`. Desktop render iframe receives the same object via `window.onMocapData(data)` (keep that exact name on the render context). Integrated path NEVER sends render data over IPC (only optional `sendBoradcast` when forwarding on; `ipcRenderer` is null when forwarding off). Discrete `sendBoradcastNew` has DUAL fan-out (local `sendRenderDataForward` + worker `sendBroadcast`) — keep both branches.
5. **`new Function` evaluator** is module-cached, keyed by the **expression string** (not bone name, not rebuilt per frame). `+initRotation[name].*` and `order` stay in the caller. Confirmed safe: all expressions are bare `±x/±y/±z`, no external identifiers.
6. **Web client (`webserv/public`) stays out of the main Vite multi-page build.** Keep `express.static('/node_modules')`, `express.static('public')`, native importmap, CSP `unsafe-eval`, routes `/model` `/modelInfo` `/useWebXR`, `httpx` single-port byte-sniff (`22`→https, printable-ASCII→http), `0.0.0.0` bind, SSL `webserv/ssl/{private.pem,file.crt}`. `server.js` stays CommonJS in the worker_thread; `modelObj.path` resolves via `path.resolve(__dirname, ...)` → do not move `server.js`.
7. **MediaPipe runtime assets** (`holistic_solution_*.wasm/.data/.js`, `holistic.binarypb`, `pose_landmark_*.tflite`) are fetched by `Holistic.locateFile` (`__dirname + '/../node_modules/@mediapipe/holistic/${file}'`), never bundled. Built pages must keep that path resolving (keep `dist/` page dirs one level under a `node_modules`, OR copy the siblings and adjust `locateFile`). Do not let Vite rename/tree-shake them. Don't blindly upgrade `@mediapipe/holistic` — `results.za` (mangled 3D-landmark field, `mocaprender/script.js:497`, `mocap.js:46`) can rename across versions.
8. **Vue 3 specifics:** alias `vue` → `vue/dist/vue.esm-bundler.js` (templates live in the DOM), `__VUE_OPTIONS_API__ = true`; `data` becomes a factory; keep `window.sysmocapApp` AND `window.app` = the mounted proxy (cross-iframe `window.parent.window.sysmocapApp.settings` is load-bearing — `render.js:12` throws if not in an iframe); `markRaw(document)` + `markRaw(process)`; `nextTick`-wrap all MDUI init (`mdui.Select`, `mdui.mutation`); add `:key` to every `v-for`.
9. **Other load-bearing flags:** `nodeIntegrationInSubFrames:true` (the `#foo` iframe's `require()`), `backgroundThrottling:false` + `disable-renderer-backgrounding` (background forwarding), `enableRemoteModule`/`webviewTag` left as-is, `global.storagePath.jsonPath` + `global.appInfo` exact shape (drives `~/<appName>/profile.json`), `additionalArguments` markers `'argsData'`/`'pdfPath'`, the `'used'`+darwin first-run gate that selects the default mocap path, `selectModel` stays a JSON **string**, screen-recording vendored UMDs (`utils/RecordRTC.js`, `utils/html2canvas.js`) imported as local files (not npm), `app.on('window-all-closed')→quit` on all platforms (intentional).

## Target layout (low-disruption)

```
src/
  render/
    binding.js          # cached new Function axis-expr evaluator (eval replacement) — DONE
    avatarRenderer.js   # three.js scene + model load (VRM/FBX/glTF) + rig + animate + recording; data-source-agnostic
  data/
    dataSource.js       # adapter contract: onData(cb) / dispose()
    ipcSource.js        # desktop render iframe: window.onMocapData(data) -> cb
    socketSource.js     # web: socket.io 'message' -> JSON.parse -> gate xf-sysmocap-data -> cb
  mocap/
    holisticPipeline.js # MediaPipe Holistic + Kalidokit.solve -> emit (shared by mocap.js + mocaprender integrated)
vite.config.mjs         # 5 Electron pages as MPA inputs (NOT webserv/public)
docs/REFACTOR.md        # this file
```
Existing `mainview/ modelview/ render/ mocap/ mocaprender/ webserv/` stay; their entry scripts shrink to thin wiring over `src/`.

## Shared module API (sketch)

- `binding.js`: `compileAxisExpr(expr) -> (x,y,z)=>number` (cached); `evalAxisExpr(expr,x,y,z)`.
- `avatarRenderer.js`: `createAvatarRenderer({ container, modelObj, settings, fileType })` → `{ applyMocap(data), startRecording(), stopRecording(), dispose() }`. Encapsulates renderer/scene/camera/lights/loader, the VRM vs FBX/glTF branch, `rigRotation`/`rigPosition` (using `binding.js`), `rigFace`, the `animate()` loop, and html2canvas/RecordRTC recording. Reads settings passed in (desktop iframe supplies `window.parent.window.sysmocapApp.settings`; web supplies fetched settings).
- `dataSource.js`: `{ start(onData), stop() }`. `ipcSource` wires `window.onMocapData`; `socketSource` wires `socket.on('message')` with the `xf-sysmocap-data` gate. The integrated path uses a direct in-process source (solve → applyMocap, no IPC).

## Vite / main-process / packaging plan

- **Vite**: MPA `rollupOptions.input` for the 5 Electron pages; `renderer()` plugin; `resolve.alias` vue→esm-bundler; convert global `<script>` tags to ESM imports (mediapipe/vue/mdui/kalidokit + local UMDs), drop importmaps; MediaPipe assets handled per Invariant 7.
- **Web client**: built/served separately (NOT in the MPA build) — see Invariant 6. Unifying it onto the shared module is the LAST phase (highest external-contract risk); until then keep it working as-is.
- **Main process**: prod = `loadFile` built `dist/` (preserves `file://`); dev = optional Vite dev server only if all four contexts share one origin. Keep BrowserView for now (works as wrapper). WebContentsView = optional later step (re-plumbs `getBrowserView()` via a main-side global/IPC + identical `setBounds` geometry).
- **Packaging**: `@electron/packager` + dmg/msi/7z must package the BUILT `dist/` while still shipping the `node_modules` pieces the runtime `require()`s (`@mediapipe` assets, `electron-localstorage`, `@electron/remote`, vendored UMDs).

## Phased plan (ordering matters — from the critique)

| Phase | Work | Parallel? | Notes |
|---|---|---|---|
| F0 | This doc + `src/render/binding.js` | — | done |
| F1 (foundation, serial) | `avatarRenderer.js` + `dataSource`/`ipcSource`/`socketSource` + `holisticPipeline.js`; full `vite.config.mjs` (5 pages) + MediaPipe WASM; main-process dev/prod wiring | NO (critical path) | one coherent actor |
| F2 | Rewire `render/`, `mocaprender/`, `mocap/` entry scripts onto the shared module; THEN delete the 3 duplicate copies | per-page parallel after F1 | extract-first-then-delete |
| F3 | Vue 2→3 on `framework.js` + `modelview` (+ thin `#vue0` overlay folded into shared module) | serialize on `framework.js`/`main.js` | Invariant 8 |
| F4 | Bump Electron + deps; verify | serial | drag-fix already unblocks >=32 |
| F5 | Unify `webserv/public` onto shared module via socketSource | serial, last | external-client contract risk |
| F6 (optional) | BrowserView → WebContentsView | serial, isolated | both `main.js`+`framework.js`, one actor |

**Collision rule:** `framework.js`, `main.js`, `setting.js` are the most-shared files — never edit them from two parallel agents. The eval fix + IPC rewiring happen inside the shared-module extraction (one atomic change), guarded by the `Borad` grep count.
