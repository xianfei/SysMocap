# SysMocap Refactor Plan — Vite + Vue 3 (branch `refactor/vite-vue3`)

Single source of truth for the modernization. Derived from a fan-out audit +
adversarial critique of the codebase. **The Invariants section is a hard safety
spec — every implementation step must hold all of it.**

## Status — Phase B complete (committed on `main`)

Everything below this section was the *plan*; what shipped: Vite 8 MPA build,
Electron 31→42, Vue 2→3, the shared render core
(`avatarRenderer`/`holisticPipeline`/`binding`/`ipcSource`) that killed the desktop
triplication, and **all pages converted to SFCs** — render+mocaprender unified on
`MocapStage.vue`/`InputPreview.vue`; modelview → `ModelViewer.vue`; framework → a
`store.js` + `App.vue` shell + `TitleBar`/`ModelLibraryTab`/`MocapTab`/`SettingsTab`.
The page dirs were then **relocated under `src/pages/`** (a decision added *after* the
plan below), so the build output now mirrors it: `dist/src/pages/<page>/`. The current
architecture + the **path-depth contract** that relocation introduced are documented
in **CLAUDE.md** (read that first).

**Remaining / deferred:** (1) unify `webserv/public` onto the shared rig (Phase F5) —
it's still a 3rd rig copy with a different scene (full-window + WebXR); (2) packaging
re-validation — the `@mediapipe` fs assets likely need `asarUnpack` in an `--asar`
build (`npm start` against unpacked `dist/` works).

## Goal & locked decisions

Modernize the build/dependency stack without breaking config-file compatibility
or any existing feature.

- Build: **plain Vite 8 (multi-page)** + **`vite-plugin-electron-renderer` v1** (`renderer()` defaults). NOT electron-vite (it doesn't support nodeIntegration).
- **Keep** `nodeIntegration:true` / `contextIsolation:false` / `@electron/remote`. Renderer keeps using `require()`. (Security hardening is explicitly out of scope.)
- **Keep MDUI at 1.x** (do not upgrade).
- **Vue 2.7 → Vue 3** via `createApp`; some modules may become SFCs.
- Replace direct `eval(bindingFunc.fx/fy/fz)` with a cached `new Function("x","y","z",...)` — **string-expression data format unchanged**.
- Collapse the **triplicated** render/rig logic (`mocaprender/script.js`, `render/render.js`, `webserv/public/script.js`) into ONE shared module, decoupled from data source (IPC desktop / socket.io web).
- **Layout**: shared code under `src/render|data|mocap|components`. *(Evolved later: the page dirs themselves were also relocated under `src/pages/` — see Status. The dist mirrors the source depth, and a path-depth contract — `../../../` for dist-root assets, `../` for `models`/`pdfs` — is documented in CLAUDE.md.)*
- Update Electron 31 → latest; adopt some newer features. **BrowserView is deprecated but still works as a wrapper** → WebContentsView migration is optional/deferrable.

## Invariants (DO NOT BREAK — verified against the codebase)

1. **`file://` origin sharing.** mainWindow + `#foo` iframe (`../render/render.html` & `../mocaprender/render.html`) + the discrete BrowserView (`mocap/mocap.html`) MUST load from the same `file://` origin and default partition. The mocap handoff passes `modelInfo`/`useCamera`/`cameraId`/`videoFile`/`selectModel` through DOM `localStorage`; a different origin/partition → `localStorage` returns null → `JSON.parse(null)` throws → **both mocap paths crash**. Production = `loadFile` against built `dist/`; if a dev server is used, ALL four contexts must share one http origin (never mix http/file). Add a null-guard before `JSON.parse(localStorage...)`.
2. **`utils/setting.js` `currentVer` stays `0.5`.** The gate returns defaults (wiping user settings) when `ver < currentVer`, with no migration. Keep misspelled keys (`performance.useDescrertionProcess`, `preview.showSketelonOnInput`) and string-typed values (`forward.supportForWebXR:"false"`, `forward.port:"8080"`, `mediapipe.modelComplexity:"2"`, confidences `"0.7"`) byte-identical. New fields must backfill, not bump the gate. Keep `valued:true`.
3. **IPC channel strings are immutable, incl. misspellings.** `sendBoradcast` / `sendBoradcastNew` (IPC) are **translated by main.js into the correctly-spelled worker type `sendBroadcast`** — asymmetric and load-bearing. Also preserve `sendRenderData`, `sendRenderDataForward`, `startWebServer`, `stopWebServer` (each of the last two is ONE string reused as both an IPC channel AND a worker postMessage type), `openDocument`, `openModelViewer`, `openGpuInfo`, `openPDF`, `switch-tab`, `tabChanged`. Gate: the count of `Borad` occurrences must be invariant pre/post refactor. Rename (if ever) only atomically across all sites in one commit.
4. **Mocap payload + wire format.** Every hop carries `{ type:"xf-sysmocap-data", riggedPose, riggedLeftHand, riggedRightHand, riggedFace }`; web client gates on `type=="xf-sysmocap-data"` over socket.io event `"message"`. Desktop render iframe receives the same object via `window.onMocapData(data)` (keep that exact name on the render context). Integrated path NEVER sends render data over IPC (only optional `sendBoradcast` when forwarding on; `ipcRenderer` is null when forwarding off). Discrete `sendBoradcastNew` has DUAL fan-out (local `sendRenderDataForward` + worker `sendBroadcast`) — keep both branches.
5. **`new Function` evaluator** is module-cached, keyed by the **expression string** (not bone name, not rebuilt per frame). `+initRotation[name].*` and `order` stay in the caller. Confirmed safe: all expressions are bare `±x/±y/±z`, no external identifiers.
6. **Web client (`webserv/public`) stays out of the main Vite multi-page build.** Keep `express.static('/node_modules')`, `express.static('public')`, native importmap, CSP `unsafe-eval`, routes `/model` `/modelInfo` `/useWebXR`, `httpx` single-port byte-sniff (`22`→https, printable-ASCII→http), `0.0.0.0` bind, SSL `webserv/ssl/{private.pem,file.crt}`. `server.js` stays CommonJS in the worker_thread; `modelObj.path` resolves via `path.resolve(__dirname, ...)` → do not move `server.js`.
7. **MediaPipe runtime assets** (`holistic_solution_*.wasm/.data/.js`, `holistic.binarypb`, `pose_landmark_*.tflite`) are fetched by `Holistic.locateFile`, never bundled. **As shipped:** `holisticPipeline.js` (integrated) returns `../../../node_modules/@mediapipe/holistic/${file}` resolved against the page URL (pages are 3 deep at `dist/src/pages/<page>/`; `node_modules` is copied to the dist root) via `fileURLToPath(new URL(rel, location.href))` — MediaPipe reads via Node fs under nodeIntegration, so it must be an absolute fs path, not a relative URL. The classic `mocap.js` (discrete) uses `__dirname + '/../../../node_modules/@mediapipe/holistic/${file}'`. If page depth changes, both must change. Do not let Vite rename/tree-shake them. Don't blindly upgrade `@mediapipe/holistic` — `results.za` (mangled 3D-landmark field, `mocaprender/script.js:497`, `mocap.js:46`) can rename across versions.
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

## Build gotchas (discovered during F1/F2)

- **CSS injection order:** Vite injects the bundled stylesheet `<link>` (which includes mdui) into `<head>` **after** a page's inline `<style>` block — the opposite of the source `<link>` order. So an inline `<style>` rule that ties on specificity with an mdui rule (notably element selectors like `body { … }`) now *loses*. Fix: set body-level overrides via an inline `style=` **attribute** on `<body>` (highest specificity — what `framework.html`/`render.html` do), or `!important` (what `modelview.html` does for `font-family` + `background-color` to keep its fonts and acrylic glass). Watch for this whenever a page's glass/transparency or custom font depends on overriding mdui.
- **Runtime-string assets aren't bundled:** assets referenced only via runtime strings (e.g. `models.json` `path`/`picBg = "../models/..."`, `Holistic.locateFile`) are invisible to Vite and must be copied via `vite-plugin-static-copy` (`models/`, `@mediapipe`, the library globals). `<link>`/`<img>`/`@font-face url()` refs in HTML/CSS *are* found and bundled into `dist/assets/`.
- **File drops need `e.preventDefault()`** in the `drop` handler (not only `dragover`), or Electron navigates to / opens the dropped file.

## Vue 2 → 3 migration gotchas (Phase A)

All four surfaced only at runtime (a production Vue 3 build suppresses `[Vue warn]`), so test the UI, don't trust a clean build:
- **Mount container directives ignored.** `new Vue({el})` treated the mount element as the template root (so `v-show`/`display:none` on it applied); Vue 3 `createApp(cfg).mount(el)` renders *into* the element and ignores its own attributes/directives. The page's FOUC-guard `display:none` on `#vue-mount` is never cleared → blank page. Fix: clear it after `mount()` (Vue does not re-patch the mount container's own style afterward, so it sticks).
- **Template scope can't see Node globals.** Vue 3 template expressions run in a `with(_ctx)` proxy whose `has` trap intercepts identifiers, so `require`/custom globals resolve to `undefined` (→ "require is not a function"). `JSON`/`Math`/etc. *are* allowlisted. Fix: expose via `app.config.globalProperties` (transitional) or move into component methods (the SFC end-state).
- **Reactive data is a Proxy → not structured-cloneable.** Vue 2's `defineProperty` reactivity left plain objects; Vue 3 `reactive()` returns a Proxy, and V8's structured-clone serializer (used by `ipcRenderer.send`/`postMessage`/`structuredClone`) **rejects Proxies** ("An object could not be cloned"). Fix: `toRaw(obj)` before crossing IPC (cheaper than `JSON.parse(JSON.stringify())`).
- **Static `display:none` + `v-show` conflict.** An element with a static `style="display:none"` (FOUC default) *and* `v-show` *and* a `:style` binding: Vue 3 re-applies the merged static+dynamic style on update, re-asserting `display:none` and clobbering `v-show` (shows on first render, hides after the next re-render). Vue 2 didn't re-apply static `display` on update. Fix: drop the static `display:none` and let `v-show` own `display`.
- **`data` must be a factory** (`data() { return {...} }`), `markRaw(document/process)` before putting host objects in reactive state, and init MDUI (`mdui.Select`/`mdui.mutation`) after mount.
