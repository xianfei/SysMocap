/**
 *  Discrete-process detection page entry.
 *
 *  Runs the shared holisticPipeline (camera/video -> MediaPipe Holistic -> Kalidokit)
 *  and forwards each solved frame over IPC to the render iframe (+ the web server when
 *  forwarding is on). This is the detection HALF of the discrete path; the render half
 *  is render/render.js. Both now share src/mocap/holisticPipeline.js + src/render, so
 *  there's no longer a duplicate copy of the detection logic here.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3, last modified 2024.7
 */

import { createHolisticPipeline } from "../../mocap/holisticPipeline.js";

const { globalSettings } = require("../../../utils/setting.js");
const ipcRenderer = require("electron").ipcRenderer;

const modelObj = JSON.parse(localStorage.getItem("modelInfo"));
const fileType = modelObj.path
    .substring(modelObj.path.lastIndexOf(".") + 1)
    .toLowerCase();

// start the forwarding web server when enabled (channel name is load-bearing)
if (globalSettings.forward.enableForwarding)
    ipcRenderer.send(
        "startWebServer",
        parseInt(globalSettings.forward.port),
        JSON.stringify(modelObj),
        globalSettings.forward.supportForWebXR
    );

createHolisticPipeline({
    settings: globalSettings,
    fileType: fileType,
    onRigged: (rigged) => {
        const payload = {
            type: "xf-sysmocap-data",
            riggedPose: rigged.riggedPose,
            riggedLeftHand: rigged.riggedLeftHand,
            riggedRightHand: rigged.riggedRightHand,
            riggedFace: rigged.riggedFace,
        };
        // forward to the render iframe; sendBoradcastNew ALSO fans out to the web
        // server worker (sendRenderData is the render-iframe-only path). Both
        // channel spellings are load-bearing — keep them.
        if (globalSettings.forward.enableForwarding)
            ipcRenderer.send("sendBoradcastNew", payload);
        else ipcRenderer.send("sendRenderData", payload);
    },
});
