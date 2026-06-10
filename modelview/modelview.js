/**
 *  Model viewer window entry — mounts the ModelViewer SFC.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 */

import { createApp } from "vue";
import ModelViewer from "../src/components/ModelViewer.vue";

createApp(ModelViewer).mount("#app");
