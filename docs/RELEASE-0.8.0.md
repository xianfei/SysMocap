# SysMocap 0.8.0 — Release Notes

> Previous release: **0.7.3** · This is the largest update yet — a ground‑up
> modernization of the whole stack plus new features and a long list of fixes.
> **Your existing settings and imported models carry over** (the on‑disk config
> format is unchanged).

*(中文版见下方 / Chinese version below.)*

---

## ✨ New features

- **Liquid Glass for the model viewer (macOS 26+).** New setting **"使用液态玻璃代替毛玻璃 (仅限 macOS 26+)" / "Use Liquid Glass instead of Frosted Glass"**. When enabled, the model‑viewer window uses a real Liquid Glass background and the page goes fully transparent so the glass shows through; when off, the previous frosted‑glass look is kept. **Defaults ON on macOS 26+ (Tahoe), OFF on older macOS / Windows / Linux.**
- **The mirror toggles actually work now.** *"当输入源为摄像头/视频文件时，进行水平镜像翻转" / "Horizontal mirror flip when Camera / Video File as input"* were previously inert. They now flip **both the input preview *and* the output avatar**, per source, in lockstep.

## 🐛 Bug fixes

- **MediaPipe tuning controls were inert.** `SMOOTH_LANDMARKS`, `REFINE_FACE_LANDMARKS`, and the `MIN_DETECTION/TRACKING_CONFIDENCE` sliders had no binding — the engine read the settings but you couldn't change them. They're now adjustable (and persist; applied on the next mocap start).
- **Model edits didn't persist (#75 / #65).** Editing a model's bone binding / info in the model viewer reverted when you reopened it — the main window kept a stale snapshot. Edits now refresh the library immediately and on reopen.
- **"Disable auto‑update" was one‑way** — once checked it could never be unchecked. Fixed.
- **Starting with no video file** in file mode hung the loading spinner forever; now it shows a clear prompt.
- **Toggling "use discrete process" without restarting** could crash Start (null `BrowserView`); now guarded with a safe fallback.
- **VRM hand rig** could crash a frame when a hand was detected without a body pose; now guarded.
- **Start/Stop** could desync if you switched UI language mid‑session (it matched the button's localized text); now driven by state.
- **Forwarding web server** leaked a worker thread on every start/stop; the thread is now terminated.
- **Drag‑and‑drop import** of models/images was broken by newer Electron removing `File.path`; switched to `webUtils.getPathForFile`.
- **i18n parity** — localized remaining hard‑coded Chinese strings (camera‑permission alert, port‑edit prompt, "default avatar" tooltip, "Show FPS", "no video selected").

## ⚡ Performance & code quality

- **Cached bone lookup** in the FBX/glTF rig — it was doing a linear scan of the whole skeleton **for every bone, every frame** at 60 fps; now a one‑time name→bone map.
- **Unified render + detection core.** The desktop app previously carried the rig/detection logic in **three near‑identical copies**; it's now a single shared core, and the discrete‑process capture path uses the same pipeline as the integrated one. Less code, no drift.

## 🧱 Under the hood (architecture)

- **Build system → Vite** (multi‑page). Dev/run is now `npm run build` then `electron .` (`npm start` does both).
- **UI → Vue 3.** Migrated from Vue 2.7 to Vue 3 (Single‑File Components + a small reactive store); **MDUI 1.x and the Material You dynamic‑color system kept.**
- **Electron 31.1.0 → 42.4.0** (Node 24 / Chromium 148).
- **Shared modules under `src/`** — `avatarRenderer` (three.js + three‑vrm render), `holisticPipeline` (MediaPipe + Kalidokit), `binding` (FBX skeleton remap, now compiled functions instead of `eval`), `ipcSource`; the main GUI is split into SFCs.
- Renderer pages relocated under `src/pages/`.

## 📦 Packaging & build

- Packaging rebuilt on **@electron/packager 20**'s Node API (`buildpackage.js`), and it **builds the renderer first** so packaged apps never ship a stale/blank `dist/`.
- **MediaPipe assets + native `.node` binaries are now asar‑unpacked** so packaged builds can load them (they're read from disk / `dlopen`'d).
- **Models & PDFs are no longer shipped twice** → **~149 MB smaller `.app`**, bringing the installer back near its pre‑refactor size.
- Build‑only dependencies moved to `devDependencies` so they're pruned from the shipped app.
- **Artifacts are version‑stamped** — `.dmg` / `.7z` / `.msix` filenames and the disk‑image title now include the version number.
- Release CI updated (windows‑2022, macos‑14, Node 22).

## ⚠️ Upgrade notes

- **Mirror default shift:** with the defaults, the **camera avatar now mirrors by default** (it didn't before) so it matches the preview. Uncheck the per‑source mirror toggle to un‑mirror both.
- **Liquid Glass** requires **macOS 26+ (Tahoe)** and no‑ops on older macOS.
- The **OBS / WebXR forwarding web client** (`webserv/public`) is not yet on the shared render core — it's still a separate renderer, so its mirror isn't tied to the setting yet.
- Settings and imported models from 0.7.x carry over unchanged.

## 📚 Dependency changes

| | 0.7.3 | 0.8.0 |
|---|---|---|
| Electron | 31.1.0 | **42.4.0** |
| UI framework | Vue 2.7 | **Vue 3.5** |
| Build | *(none)* | **Vite 8** |
| Packager | @electron/packager 18 | **@electron/packager 20** |
| macOS glass | — | **electron‑liquid‑glass 1.1** *(new)* |
| three.js / three‑vrm / Kalidokit / MDUI | 0.164 / 2.1 / 1.1 / 1.x | *unchanged* |

---

# SysMocap 0.8.0 — 更新说明（中文）

> 上一版本：**0.7.3**。本次是迄今为止改动最大的一次更新——整套技术栈的彻底现代化，
> 外加若干新功能和一长串修复。**你已有的设置和导入的模型都会保留**（本地配置格式未变）。

## ✨ 新功能

- **模型查看器液态玻璃（仅 macOS 26+）。** 新增设置 **"使用液态玻璃代替毛玻璃 (仅限 macOS 26+)"**。开启后，模型查看器窗口使用真正的液态玻璃背景，页面背景变为全透明以透出玻璃质感；关闭时维持原来的毛玻璃效果。**在 macOS 26+（Tahoe）默认开启，旧版 macOS / Windows / Linux 默认关闭。**
- **镜像开关现在真的生效了。** *"当输入源为摄像头/视频文件时，进行水平镜像翻转"* 此前是失效的（没有任何效果）。现在会按输入源**同时翻转输入预览和输出虚拟形象**。

## 🐛 问题修复

- **MediaPipe 调参控件此前是摆设。** `SMOOTH_LANDMARKS`、`REFINE_FACE_LANDMARKS` 和 `MIN_DETECTION/TRACKING_CONFIDENCE` 滑块没有绑定——引擎会读取设置，但你根本改不了。现在可正常调整并保存（下次启动动作捕捉时生效）。
- **模型编辑无法保存（#75 / #65）。** 在模型查看器里改了骨骼绑定 / 信息后，重新打开会还原——主窗口用的是旧快照。现在编辑会立即刷新模型库，重开也保留。
- **"禁用自动检查更新"是单向开关**——勾上之后再也取消不掉。已修复。
- **文件模式下未选择视频就启动**会让加载动画一直转；现在会给出明确提示。
- **不重启就切换"使用独立进程"** 可能导致启动崩溃（`BrowserView` 为 null）；现已加保护并安全回退。
- **VRM 手部绑定**在检测到手但没有身体姿态时可能让某一帧崩溃；已加保护。
- **开始/停止按钮**在会话中途切换界面语言时可能错乱（它是靠按钮文字判断的）；改为按状态驱动。
- **转发 Web 服务器**每次启停都会泄漏一个工作线程；现在会正确终止。
- **拖拽导入**模型/图片因新版 Electron 移除 `File.path` 而失效；改用 `webUtils.getPathForFile`。
- **多语言补全**——本地化了残留的硬编码中文（摄像头权限提示、端口修改框、"默认形象"提示、"显示帧率"、未选择视频提示）。

## ⚡ 性能与代码质量

- **缓存骨骼查找**：FBX/glTF 绑定此前**每帧、每根骨骼**都对整副骨架做一次线性查找（60fps 下开销巨大）；现改为加载时建立一次名称→骨骼映射。
- **统一渲染与检测核心。** 桌面端此前把绑定/检测逻辑维护了**三份几乎一样的副本**；现已合并为单一共享核心，独立进程捕捉路径也复用同一套管线。代码更少、不再各自漂移。

## 🧱 架构改动（幕后）

- **构建系统 → Vite**（多页）。开发/运行变为 `npm run build` 后 `electron .`（`npm start` 一并完成）。
- **界面 → Vue 3。** 从 Vue 2.7 迁移到 Vue 3（单文件组件 + 一个轻量响应式 store）；**保留 MDUI 1.x 和 Material You 动态配色。**
- **Electron 31.1.0 → 42.4.0**（Node 24 / Chromium 148）。
- **`src/` 下的共享模块**——`avatarRenderer`（three.js + three‑vrm 渲染）、`holisticPipeline`（MediaPipe + Kalidokit）、`binding`（FBX 骨骼重映射，已用编译函数替代 `eval`）、`ipcSource`；主界面拆分为多个单文件组件。
- 渲染页面迁移到 `src/pages/` 下。

## 📦 打包与构建

- 打包改用 **@electron/packager 20** 的 Node API（`buildpackage.js`），并**先构建渲染产物**，避免打出空白/过期的 `dist/`。
- **MediaPipe 资源 + 原生 `.node` 二进制现在会 asar‑unpack**，使打包后的应用能正常加载（它们需从磁盘读取 / `dlopen`）。
- **不再重复打包模型和 PDF** → **`.app` 体积减小约 149 MB**，安装包大小回到接近重构前的水平。
- 仅构建期用到的依赖移入 `devDependencies`，从发布产物中剔除。
- **产物带版本号**——`.dmg` / `.7z` / `.msix` 文件名和磁盘镜像标题都包含版本号。
- 发布 CI 更新（windows‑2022、macos‑14、Node 22）。

## ⚠️ 升级须知

- **镜像默认值变化：** 按默认设置，**摄像头模式下的虚拟形象现在默认也会镜像**（之前不会），以与预览一致。如不需要，取消勾选对应输入源的镜像开关即可（预览和形象都会取消镜像）。
- **液态玻璃**需要 **macOS 26+（Tahoe）**，旧版 macOS 上自动不生效。
- **OBS / WebXR 转发 Web 客户端**（`webserv/public`）尚未接入共享渲染核心——它仍是独立渲染器，其镜像暂未与设置联动。
- 0.7.x 的设置和已导入模型可无缝沿用。

## 📚 依赖变化

| | 0.7.3 | 0.8.0 |
|---|---|---|
| Electron | 31.1.0 | **42.4.0** |
| 界面框架 | Vue 2.7 | **Vue 3.5** |
| 构建 | *（无）* | **Vite 8** |
| 打包 | @electron/packager 18 | **@electron/packager 20** |
| macOS 玻璃 | — | **electron‑liquid‑glass 1.1**（新增） |
| three.js / three‑vrm / Kalidokit / MDUI | 0.164 / 2.1 / 1.1 / 1.x | *未变* |
