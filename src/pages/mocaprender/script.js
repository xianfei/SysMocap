/**
 *  Integrated mocap+render page entry — mounts the shared MocapStage SFC plus
 *  the InputPreview, runs detection in-page via holisticPipeline, applies each
 *  solved frame to the stage, and (when forwarding is on) broadcasts it over IPC.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3, last modified 2024.7
 */

import { createApp } from "vue";
import MocapStage from "../../components/MocapStage.vue";
import InputPreview from "../../components/InputPreview.vue";
import { createHolisticPipeline } from "../../mocap/holisticPipeline.js";

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
const fileType = modelObj.path
    .substring(modelObj.path.lastIndexOf(".") + 1)
    .toLowerCase();

// Mocap data forwarding: only require electron IPC when forwarding is enabled.
// Channel names are load-bearing — keep 'startWebServer' and 'sendBoradcast'.
let ipcRenderer = null;
if (globalSettings.forward.enableForwarding)
    ipcRenderer = require("electron").ipcRenderer;
if (ipcRenderer)
    ipcRenderer.send(
        "startWebServer",
        parseInt(globalSettings.forward.port),
        JSON.stringify(modelObj),
        globalSettings.forward.supportForWebXR
    );

const root = createApp({
    components: { MocapStage, InputPreview },
    data() {
        return { settings: globalSettings, modelObj: modelObj };
    },
    template:
        '<MocapStage ref="stage" :settings="settings" :model-obj="modelObj" /><InputPreview />',
    mounted() {
        const stage = this.$refs.stage;
        // detection runs here; each solved frame is forwarded (if enabled) then
        // applied to the shared stage. Forward-before-apply matches the original.
        createHolisticPipeline({
            settings: globalSettings,
            fileType: fileType,
            onRigged: (rigged) => {
                if (ipcRenderer)
                    ipcRenderer.send("sendBoradcast", {
                        type: "xf-sysmocap-data",
                        riggedPose: rigged.riggedPose,
                        riggedLeftHand: rigged.riggedLeftHand,
                        riggedRightHand: rigged.riggedRightHand,
                        riggedFace: rigged.riggedFace,
                    });
                stage.pushData(rigged);
            },
        });
    },
}).mount("#app");

// mirror the avatar stage for video-file input (camera is mirrored via video CSS)
if (localStorage.getItem("useCamera") !== "camera") {
    document.querySelector("#model").style.transform = "scale(-1, 1)";
}
