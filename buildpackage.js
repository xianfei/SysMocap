/**
 *  Package SysMocap for one platform/arch via @electron/packager's API.
 *  Invoked by the package:* npm scripts.
 *
 *  - Builds the renderer bundle FIRST: the app loads pages from dist/ (main.js
 *    loadFile("dist/src/pages/...")), so packaging a stale/missing dist/ ships a
 *    blank app. (vite build output is arch-independent, so per-arch rebuilds are
 *    cheap + safe.)
 *  - asar-UNPACKS the @mediapipe runtime assets: MediaPipe reads its
 *    .wasm/.data/.binarypb/.tflite from dist/node_modules/@mediapipe via Node fs
 *    (Holistic.locateFile), which fails for files trapped inside the asar archive.
 *    Unpacking lands them in app.asar.unpacked/ and the asar fs-shim redirects
 *    transparently, so the locateFile path keeps working.
 *
 *  usage: node buildpackage.js <darwin|win32> <x64|arm64>
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */
const { packager } = require("@electron/packager");
const { execSync } = require("child_process");

const platform = process.argv[2];
const arch = process.argv[3];
const SUPPORTED = { darwin: ["x64", "arm64"], win32: ["x64", "arm64"] };

if (!SUPPORTED[platform] || !SUPPORTED[platform].includes(arch)) {
    console.error("usage: node buildpackage.js <darwin|win32> <x64|arm64>");
    process.exit(1);
}

console.log("> npm run build");
execSync("npm run build", { stdio: "inherit" });

const opts = {
    dir: ".",
    name: "SysMocap",
    platform,
    arch,
    out: "./OutApp",
    overwrite: true,
    electronVersion: "42.4.0",
    icon: platform === "darwin" ? "icons/sysmocap.icns" : "icons/sysmocap.ico",
    // MediaPipe assets are read via fs at runtime -> must be real files, not asar'd.
    asar: { unpack: "**/@mediapipe/**" },
};
if (platform === "darwin") opts.usageDescription = { Camera: "该程序需要摄像头权限" };

console.log(`> packaging SysMocap ${platform}-${arch} (Electron ${opts.electronVersion})`);
packager(opts)
    .then((paths) => console.log("packaged ->", paths.join(", ")))
    .catch((err) => {
        console.error("packaging failed:", err);
        process.exit(1);
    });
