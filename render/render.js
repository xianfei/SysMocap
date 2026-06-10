/**
 *  Render Page entry (discrete render-iframe) — thin wrapper over the shared
 *  avatar renderer. Receives already-solved mocap data from the parent
 *  framework.js via window.onMocapData (ipcSource) and re-applies it each frame
 *  (continuousData), preserving the original per-render-frame apply cadence.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3, last modified 2024.7
 */

import { createAvatarRenderer } from "../src/render/avatarRenderer.js";
import { createIpcMocapSource } from "../src/data/ipcSource.js";

// import languages
const { languages } = require("../utils/language.js");

// settings come from the parent framework.js Vue app (cross-iframe, file://)
const globalSettings = window.parent.window.sysmocapApp.settings;

// set theme
document.body.setAttribute(
    "class",
    "mdui-theme-layout-auto mdui-theme-primary-" +
        globalSettings.ui.themeColor +
        " mdui-theme-accent-" +
        globalSettings.ui.themeColor
);

var modelObj = JSON.parse(localStorage.getItem("modelInfo"));

// mirror the stage horizontally for video-file input (matches the camera preview)
if (localStorage.getItem("useCamera") !== "camera") {
    document.querySelector("#model").style.transform = "scale(-1, 1)";
}

// latest solved frame; the renderer re-applies it every render tick
let lastData = null;

const avatar = createAvatarRenderer({
    settings: globalSettings,
    modelObj: modelObj,
    continuousData: () => lastData,
});

// #vue0 target-button overlay (face / half / full)
var app = new Vue({
    el: "#vue0",
    data: {
        target: "face",
        languages: languages[globalSettings.ui.language],
    },
});

function changeTarget(target) {
    app.target = target;
    avatar.setTarget(target);
}
window.changeTarget = changeTarget;

// data source: parent relays ipcMain 'sendRenderDataForward' -> onMocapData
var isStart = false;
createIpcMocapSource((data) => {
    if (!isStart) {
        document.getElementById("loading").remove();
        isStart = true;
    }
    avatar.tickMocapStats();
    lastData = data;
});
