/**
 *  Render Page entry (discrete render-iframe) — mounts the shared MocapStage SFC
 *  and feeds it mocap frames relayed from the parent over IPC (window.onMocapData,
 *  via ipcSource). The SFC + avatarRenderer own all the render logic now.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3, last modified 2024.7
 */

import { createApp } from "vue";
import MocapStage from "../../components/MocapStage.vue";
import { createIpcMocapSource } from "../../data/ipcSource.js";

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

const modelObj = JSON.parse(localStorage.getItem("modelInfo"));

const stage = createApp(MocapStage, {
    settings: globalSettings,
    modelObj: modelObj,
}).mount("#app");

// mirror the avatar stage per the user's per-source mirror setting, in lockstep with
// the input-preview mirror (holisticPipeline). Set explicitly so toggling off un-mirrors.
{
    const useCamera = localStorage.getItem("useCamera") == "camera";
    const mirror = useCamera
        ? globalSettings.preview.mirroringWhenCamera
        : globalSettings.preview.mirroringWhenVideoFile;
    document.querySelector("#model").style.transform = mirror
        ? "scale(-1, 1)"
        : "scale(1, 1)";
}

// data source: parent relays ipcMain 'sendRenderDataForward' -> onMocapData
createIpcMocapSource((data) => stage.pushData(data));
