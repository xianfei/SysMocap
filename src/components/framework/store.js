/**
 *  Shared reactive store for the framework (main GUI) components. The titlebar
 *  and the three tabs all read/write this same reactive state, so v-model
 *  bindings cross components without prop/emit plumbing. App.vue owns the
 *  imperative logic (theme, startMocap, update check, right-click menu, ...).
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */
import { reactive, markRaw } from "vue";

const remote = require("@electron/remote");
const ipcRenderer = require("electron").ipcRenderer;
const { shell } = require("electron");
const platform = require("os").platform();

const {
    getSettings,
    globalSettings,
    saveSettings,
    userModels,
    addUserModels,
    removeUserModels,
} = require("../../../utils/setting.js");
const { languages } = require("../../../utils/language.js");
const builtInModels = require("../../../models/models.json");

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// expose electron globals for the template's native onclick= handlers
// (remote.getCurrentWindow().close(), ipcRenderer.send(...), etc.)
window.remote = remote;
window.ipcRenderer = ipcRenderer;

export const state = reactive({
    tab: "model",
    builtIn: builtInModels,
    selectModel: localStorage.getItem("selectModel")
        ? localStorage.getItem("selectModel")
        : JSON.stringify(builtInModels[0]),
    language: languages[globalSettings.ui.language],
    videoSource: "camera",
    videoPath: "",
    showModelImporter: 0,
    modelImporterName: "",
    modelImporterType: "",
    modelImporterPath: "",
    modelImporterImg: "",
    settings: globalSettings,
    appVersion: remote.getGlobal("appInfo").appVersion,
    glRenderer: "Unknown",
    platform: platform,
    userModels: JSON.parse(JSON.stringify(userModels)),
    theme: {},
    document: markRaw(document),
    camera: "",
    cameras: [],
    process: markRaw(process),
    checkingUpdate: false,
    hasUpdate: null,
    updateError: null,
    isLatest: false,
    disableAutoUpdate: localStorage.getItem("disableUpdate"),
    showLine: false,
});

export {
    remote,
    ipcRenderer,
    shell,
    platform,
    darkMode,
    saveSettings,
    addUserModels,
    removeUserModels,
    languages,
};
