import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import renderer from "vite-plugin-electron-renderer";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "node:path";

/**
 *  SysMocap Vite config — multi-page (MPA) build for the 5 Electron renderer
 *  pages. The web client (webserv/public) is intentionally NOT a Vite input:
 *  it is served raw by express and must keep its native importmap + raw
 *  /node_modules URLs + CSP unsafe-eval (see docs/REFACTOR.md, Invariant 6).
 *
 *  Strategy (F1, low-disruption): entry modules' bare ESM imports (three,
 *  @pixiv/three-vrm, src/* shared modules) are bundled by Vite; the remaining
 *  library globals (MediaPipe, Vue 2, mdui, Kalidokit, lil-gui) stay as classic
 *  <script src="../node_modules/..."> tags whose dirs are copied into
 *  dist/node_modules so the relative paths keep resolving at runtime. This
 *  preserves exact runtime behavior (zero UMD-interop risk) and, critically,
 *  keeps @mediapipe/holistic's runtime WASM/.tflite/.binarypb reachable via
 *  Holistic.locateFile's ../node_modules path (Invariant 7).
 */
const root = import.meta.dirname;
const r = (p) => resolve(root, p);

// node_modules dirs referenced at runtime through relative ../node_modules/...
// paths (classic <script>/<link>), copied verbatim into dist/node_modules.
// NOTE: vite-plugin-static-copy v4 appends the full `src` path under `dest`, so
// dest is the output ROOT ("") and each src's directory structure is preserved
// (e.g. src "node_modules/mdui/dist" -> dist/node_modules/mdui/dist/...).
const copyTargets = [
    "node_modules/@mediapipe/holistic",
    "node_modules/@mediapipe/drawing_utils",
    "node_modules/@mediapipe/camera_utils",
    "node_modules/mdui/dist",
    "node_modules/kalidokit/dist",
    "node_modules/lil-gui/dist",
    // (Vue 3 is ESM-imported + bundled now, no longer a classic global script)
    // vendored UMDs referenced as ../utils/*.js by the render pages
    "utils/*.js",
    // mocap.js is a classic (non-module) capture-only script — Vite does not
    // bundle it, so copy it verbatim; staying classic preserves its require()
    // + window-global + __dirname locateFile behavior under nodeIntegration.
    "src/pages/mocap/mocap.js",
    // favicon referenced by framework.html
    "icons/sysmocap.ico",
].map((src) => ({ src, dest: "" }));

// Built-in model files + thumbnails (models.json path/picBg = "../models/...") and
// the about-section preview PNGs ("../pdfs/...") are runtime-string refs Vite can't
// see. They're referenced ONE level up from each page, and the pages now live at
// dist/src/pages/<page>/ — so copy them beside the pages (-> dist/src/pages/), not
// at the dist root. (models.json keeps "../models/..." so the web server's
// path.resolve(__dirname, modelObj.path) still resolves to repo/models.)
copyTargets.push(
    { src: "models", dest: "src/pages" },
    { src: "pdfs", dest: "src/pages" }
);

export default defineConfig({
    root,
    base: "./",
    resolve: {
        // Vue 3 full build (includes the template compiler) for the pages'
        // in-DOM templates mounted via createApp(...).mount(el).
        alias: { vue: "vue/dist/vue.esm-bundler.js" },
    },
    define: {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    },
    plugins: [vue(), renderer(), viteStaticCopy({ targets: copyTargets })],
    build: {
        outDir: r("dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                framework: r("src/pages/mainview/framework.html"),
                modelview: r("src/pages/modelview/modelview.html"),
                render: r("src/pages/render/render.html"),
                mocaprender: r("src/pages/mocaprender/render.html"),
                mocap: r("src/pages/mocap/mocap.html"),
            },
        },
    },
});
