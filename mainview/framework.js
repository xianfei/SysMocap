/**
 *  SysMocap Main GUI entry — mounts the FrameworkApp SFC (titlebar + the three
 *  tabs split into components, sharing a reactive store). All logic lives in
 *  src/components/framework/.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

import { createApp, toRaw } from "vue";
import App from "../src/components/framework/App.vue";

const app = createApp(App);
// Vue 3 template scope can't see Node globals; ModelLibraryTab's openModelViewer
// handlers call require('electron') + toRaw(model), so expose them app-wide.
app.config.globalProperties.require = require;
app.config.globalProperties.toRaw = toRaw;
app.mount("#app");
