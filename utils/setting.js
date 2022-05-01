/**
 *  Global Settings Utility
 *
 *  @usage import by ```const {getSettings,globalSettings,saveSettings} = require("../utils/setting.js")```
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

const storage = require("electron-localstorage");
var remote = require("@electron/remote");
storage.setStoragePath(remote.getGlobal("storagePath").jsonPath);

function getSettings() {
    var settings =  storage.getItem("sysmocap-global-settings");
    // load default settings when cannot read from localStroage
    if (!settings || !settings.valued)
        settings = {
            ui: {
                themeColor: "indigo",
                isDark: false,
                useGlass: true,
                language: "zh",
                useNewModelUI: true,
            },
            preview: {
                showSketelonOnInput: true,
                mirroringWhenCamera: true,
                mirroringWhenVideoFile: true,
            },
            output: {
                antialias: true,
                usePicInsteadOfColor: false,
                bgColor: "#ffffff",
                bgPicPath: "",
            },
            forward: {
                enableForwarding: false,
                port: "8080",
            },
            mediapipe: {
                modelComplexity: "2",
                smoothLandmarks: true,
                minDetectionConfidence: "0.7",
                minTrackingConfidence: "0.7",
                refineFaceLandmarks: true,
            },
            dev: {
                allowDevTools: false,
                openDevToolsWhenMocap: false,
            },
            performance: {
                useDgpu: false,
                GPUs:0
            },
            valued: true,
            ver: 0.2,
        };
    return settings;
}

var globalSettings = getSettings();

function saveSettings(settings) {
    if (!settings) settings = globalSettings;
    storage.setItem("sysmocap-global-settings", settings);
    if (settings.performance.useDgpu) storage.setItem("useDgpu", true);
    else storage.setItem("useDgpu", false);
}

module.exports = {
    getSettings: getSettings,
    globalSettings: globalSettings,
    saveSettings: saveSettings,
};
