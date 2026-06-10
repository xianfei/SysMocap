/**
 *  Integrated mocap+render page entry — thin wrapper composing the shared
 *  avatar renderer with the Holistic detection pipeline in one context.
 *  Detection runs locally; solved frames are applied to the avatar and (when
 *  forwarding is enabled) broadcast to the web server over IPC.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3, last modified 2024.7
 */

import { createAvatarRenderer } from "../src/render/avatarRenderer.js";
import { createHolisticPipeline } from "../src/mocap/holisticPipeline.js";

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
var fileType = modelObj.path
    .substring(modelObj.path.lastIndexOf(".") + 1)
    .toLowerCase();

// Mocap data forwarding: only require electron IPC when forwarding is enabled
// (so the integrated path stays IPC-free otherwise). Channel names are
// load-bearing — keep 'startWebServer' and the misspelled 'sendBoradcast'.
var ipcRenderer = null;
if (globalSettings.forward.enableForwarding)
    ipcRenderer = require("electron").ipcRenderer;
if (ipcRenderer)
    ipcRenderer.send(
        "startWebServer",
        parseInt(globalSettings.forward.port),
        JSON.stringify(modelObj),
        globalSettings.forward.supportForWebXR
    );

// mirror the avatar stage for video-file input (camera is mirrored via video CSS)
if (localStorage.getItem("useCamera") !== "camera") {
    document.querySelector("#model").style.transform = "scale(-1, 1)";
}

const avatar = createAvatarRenderer({
    settings: globalSettings,
    modelObj: modelObj,
});

createHolisticPipeline({
    settings: globalSettings,
    fileType: fileType,
    onRigged: (rigged) => {
        avatar.tickMocapStats();
        // forward to the web server first (matches the original ordering)
        if (ipcRenderer)
            ipcRenderer.send("sendBoradcast", {
                type: "xf-sysmocap-data",
                riggedPose: rigged.riggedPose,
                riggedLeftHand: rigged.riggedLeftHand,
                riggedRightHand: rigged.riggedRightHand,
                riggedFace: rigged.riggedFace,
            });
        avatar.applyRigged(rigged);
    },
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
