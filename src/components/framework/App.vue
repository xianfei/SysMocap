<!--
  Framework (main GUI) root: shell (titlebar + the three tabs). All state lives in
  the shared reactive store; this component owns the imperative logic (theme,
  startMocap/BrowserView, right-click menu, update check, the #foo iframe bridge),
  relocated near-verbatim from the former framework.js via an `app = state` alias.

  A part of SysMocap, open sourced under Mozilla Public License 2.0
  https://github.com/xianfei/SysMocap
-->
<template>
    <TitleBar />
    <div
        class="line"
        style="position: fixed; top: 44px; transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        :style="{ opacity: showLine ? '1' : '0' }"
    ></div>
    <div style="padding: 10px 20px; margin-top: 44px">
        <ModelLibraryTab />
        <MocapTab />
        <SettingsTab />
    </div>
</template>

<script>
import { onMounted, watch, nextTick, toRefs } from "vue";
import TitleBar from "./TitleBar.vue";
import ModelLibraryTab from "./ModelLibraryTab.vue";
import MocapTab from "./MocapTab.vue";
import SettingsTab from "./SettingsTab.vue";
import {
    state,
    remote,
    ipcRenderer,
    shell,
    platform,
    darkMode,
    saveSettings,
    addUserModels,
    removeUserModels,
    languages,
} from "./store.js";
import {
    argbFromHex,
    themeFromSourceColor,
    themeFromImage,
    sourceColorFromImage,
    applyTheme,
} from "../../../node_modules/@material/material-color-utilities/index.js";

// alias: keeps the relocated framework.js logic verbatim (app.X === state.X, reactive)
const app = state;

// --- helpers (relocated from framework.js module scope) ---
var mixamorig = {
    "Hips": {
        "name": "mixamorigHips",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "Neck": {
        "name": "mixamorigNeck",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "Chest": {
        "name": "mixamorigSpine2",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "Spine": {
        "name": "mixamorigSpine",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "RightUpperArm": {
        "name": "mixamorigRightArm",
        "order": "ZXY",
        "func": { "fx": "-z", "fy": "x", "fz": "-y" }
    },
    "RightLowerArm": {
        "name": "mixamorigRightForeArm",
        "order": "ZXY",
        "func": { "fx": "-z", "fy": "x", "fz": "-y" }
    },
    "LeftUpperArm": {
        "name": "mixamorigLeftArm",
        "order": "ZXY",
        "func": { "fx": "z", "fy": "-x", "fz": "-y" }
    },
    "LeftLowerArm": {
        "name": "mixamorigLeftForeArm",
        "order": "ZXY",
        "func": { "fx": "z", "fy": "-x", "fz": "-y" }
    },
    "LeftUpperLeg": {
        "name": "mixamorigLeftUpLeg",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "LeftLowerLeg": {
        "name": "mixamorigLeftLeg",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "RightUpperLeg": {
        "name": "mixamorigRightUpLeg",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    },
    "RightLowerLeg": {
        "name": "mixamorigRightLeg",
        "order": "XYZ",
        "func": { "fx": "-x", "fy": "y", "fz": "-z" }
    }
};

function domBoom(target, onfinish) {
    target.style.animation = "shake 800ms ease-in-out";
    var targetBoundingClientRectX = target.getBoundingClientRect().x;
    var targetBoundingClientRectY = target.getBoundingClientRect().y;

    var mydiv = document.createElement("div");
    mydiv.id = "newDivId";
    mydiv.style.height = window.innerHeight + "px";
    mydiv.style.width = window.innerWidth + "px";
    mydiv.style.position = "absolute";
    mydiv.style.top = "0px";
    mydiv.style.left = "0px";
    mydiv.style.zIndex = "9999";

    var targetBak = target;
    target = target.cloneNode(true);

    target.style.margin = "0";
    target.style.position = "absolute";
    target.style.top = targetBoundingClientRectY + "px";
    target.style.left = targetBoundingClientRectX + "px";
    target.style.zIndex = "9999";

    mydiv.append(target);
    mydiv.style.filter = "opacity(0)";
    document.body.appendChild(mydiv);

    setTimeout(
        () =>
            html2canvas(mydiv, { backgroundColor: null }).then(function (
                canvas
            ) {
                targetBak.style.filter = "opacity(0)";
                mydiv.remove();
                canvas.style.position = "absolute";
                canvas.style.top = "0px";
                canvas.style.left = "0px";
                canvas.style.zIndex = "9999";
                document.body.appendChild(canvas);
                var boomOption2 = {
                    // 粒子间隔
                    gap: 5,
                    // 粒子大小
                    radius: 3,
                    // 最小水平喷射速度
                    minVx: -20,
                    // 最大水平喷射速度
                    maxVx: 25,
                    // 最小垂直喷射速度
                    minVy: -25,
                    // 最大垂直喷射速度
                    maxVy: 0.1,
                    speed: 10,
                    onBoomEnd: function () {
                        targetBak.remove();
                        // targetBak.style.filter = '';
                        if (onfinish) onfinish();
                        canvas.remove();
                    },
                };
                new ParticleBoom(canvas, boomOption2);
            }),
        200
    );
}

function rgba2hex(rgba) {
    rgba = rgba.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgba && rgba.length === 4
        ? "#" +
              ("0" + parseInt(rgba[1], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgba[2], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgba[3], 10).toString(16)).slice(-2)
        : "";
}

export default {
    name: "FrameworkApp",
    components: { TitleBar, ModelLibraryTab, MocapTab, SettingsTab },
    setup() {
        // --- watchers (relocated from the old createApp watch:{}) ---
        watch(
            () => state.settings,
            (newVal, oldVal) => {
                    // save when changed
                    // console.log('settings changed')
                    document.body.setAttribute(
                        "class",
                        "mdui-theme-layout-auto mdui-theme-primary-" +
                            app.settings.ui.themeColor +
                            " mdui-theme-accent-" +
                            app.settings.ui.themeColor
                    );

                    if((remote.nativeTheme.themeSource=='dark')!==app.settings.ui.isDark){
                        remote.nativeTheme.themeSource = (!app.settings.ui.isDark)?'light':'dark';

                        var modelOnload = async function () {
                            for (var e of document.querySelectorAll(".my-img")) {
                                if (e.src.includes("framework.html")) continue;
                                var theme = await themeFromImage(e);
                                applyTheme(theme, {
                                    target: e.parentElement,
                                    dark: app.settings.ui.isDark,
                                });
                            }
                            for(var e of document.querySelectorAll("div.color-dot")){
                                e.style.boxShadow = e.computedStyleMap().get('background-color').toString().replace('rgb','rgba').replace(')',', 0.6) 0px 2px 6px')
                            }
                        };
                        setTimeout(()=>modelOnload(),500)
                        
                        
                    }

                    

                    var f = async () => {
                        var color = window.getComputedStyle(
                            document.querySelector(".mdui-text-color-theme"),
                            null
                        ).color;
                        var hex = rgba2hex(color);
                        var theme = await themeFromSourceColor(
                            argbFromHex(hex)
                        );
                        applyTheme(theme, {
                            target: document.body,
                            dark: app.settings.ui.isDark,
                        });
                        ipcRenderer.send('tabChanged',window.sysmocapApp.tab,document.body.style.getPropertyValue('--md-sys-color-primary'),document.body.style.getPropertyValue('--md-sys-color-primary-container'));
                    };
                    f();

                    saveSettings(app.settings);
                    app.language = languages[app.settings.ui.language];

                    
            },
            { deep: true }
        );
        watch(
            () => state.selectModel,
            () => {
                localStorage.setItem("selectModel", app.selectModel);
            },
            { deep: true }
        );
        watch(
            () => state.camera,
            (newVal, oldVal) => {
                if (oldVal != "") localStorage.setItem("last-choosed-camera", newVal);
            }
        );
        watch(
            () => state.disableAutoUpdate,
            (newVal) => {
                if (newVal) localStorage.setItem("disableUpdate", true);
            }
        );
        watch(
            () => state.tab,
            () => {
                ipcRenderer.send(
                    "tabChanged",
                    window.sysmocapApp.tab,
                    document.body.style.getPropertyValue("--md-sys-color-primary"),
                    document.body.style.getPropertyValue("--md-sys-color-primary-container")
                );
            }
        );

        onMounted(() => {
            document.body.setAttribute(
                "class",
                "mdui-theme-layout-auto mdui-theme-primary-" +
                    app.settings.ui.themeColor +
                    " mdui-theme-accent-" +
                    app.settings.ui.themeColor
            );
            window.sysmocapApp = app;

            var f = async () => {
        // read the themed color from .mdui-text-color-theme (which survives after
        // Vue mounts) instead of the old .mdui-color-theme that lived only in a
        // now-removed v-if="false" block; otherwise the query is null, f() throws,
        // no Material-You theme is applied, and main.js's tabChanged Color() crashes
        var color = window.getComputedStyle(
            document.querySelector(".mdui-text-color-theme"),
            null
        ).color;
        var hex = rgba2hex(color);
        var theme = await themeFromSourceColor(argbFromHex(hex));
        applyTheme(theme, { target: document.body, dark: darkMode });
        // console.log(theme)
        ipcRenderer.send('tabChanged',window.sysmocapApp.tab,document.body.style.getPropertyValue('--md-sys-color-primary'),document.body.style.getPropertyValue('--md-sys-color-primary-container'));
            };
            f();

            // --- mounted() body (model image themes + color-dot shadows) ---
            var modelOnload = async function () {
                for (var e of document.querySelectorAll(".my-img")) {
                    if (e.src.includes("framework.html")) continue;
                    var theme = await themeFromImage(e);
                    applyTheme(theme, {
                        target: e.parentElement,
                        dark: darkMode,
                    });
                }
            };
            if (app.settings.ui.useNewModelUI) modelOnload();
            for(var e of document.querySelectorAll("div.color-dot")){
                e.style.boxShadow = e.computedStyleMap().get('background-color').toString().replace('rgb','rgba').replace(')',', 0.6) 0px 2px 6px')
            }

            // --- post-mount imperative code (relocated from framework.js) ---
    navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
        var lastChoosed = localStorage.getItem("last-choosed-camera");
        for (var mediaDevice of mediaDevices)
            if (mediaDevice.kind === "videoinput") {
                app.cameras.push({
                    id: mediaDevice.deviceId,
                    label: mediaDevice.label,
                });
            }
        if (app.cameras?.length > 0) app.camera = app.cameras[0].id;
        if (lastChoosed) {
            if (app.cameras?.find((e) => e.id == lastChoosed)) {
                app.camera = lastChoosed;
            }
        }
        nextTick(() => {
            new mdui.Select("#demo-js-3");
        });
    });

    window.sysmocapApp = app;

    remote.app.getGPUInfo("complete").then((info) => {
        // console.log(info)
        app.glRenderer = info.auxAttributes.glRenderer;
    });

    document.getElementById("chooseFile").onclick = async function () {
        const result = await remote.dialog.showOpenDialogSync({
            properties: ["openFile"],
            filters: [
                {
                    name: "视频文件",
                    extensions: ["mp4", "webm"],
                },
            ],
        });
        if (result) app.videoPath = result;
    };

    // var inst = new mdui.Select("#demo-js");

    var inst2 = new mdui.Select("#demo-js-2");

    var hasInitdLight = false;

    var isRemoteInit = false;

    // mdui.alert(
    //     "该版本为早期技术预览版，有众多未完工功能。目前只支持VRM模型。Version" +
    //         app.appVersion +
    //         ", alpha, forced dgpu."
    // );

    var isMax = false;

    window.maximizeBtn = function () {
        if (remote.getCurrentWindow().isMaximized()) {
            remote.getCurrentWindow().restore();
        } else {
            remote.getCurrentWindow().maximize();
        }
    };

    var contentDom = document.querySelector("#drag-area");

    //阻止相关事件默认行为
    contentDom.ondragcenter =
        contentDom.ondragover =
        contentDom.ondragleave =
            () => {
                return false;
            };

    //对拖动释放事件进行处理
    contentDom.ondrop = (e) => {
        e.preventDefault();
        //console.log(e);
        var file = e.dataTransfer.files[0];
        // Electron 32 removed File.path; webUtils.getPathForFile is the replacement (available since Electron 30)
        var { webUtils } = require("electron");
        var filePath = (
            webUtils && webUtils.getPathForFile
                ? webUtils.getPathForFile(file)
                : file.path
        ).replaceAll("\\", "/");
        // console.log(filePath);
        var strs1 = filePath.split("/");
        var name_ = strs1[strs1.length - 1];
        var name = name_.substr(0, name_.lastIndexOf("."));
        var type = name_.substr(name_.lastIndexOf(".") + 1);
        if (app.showModelImporter == 1) {
            app.modelImporterName = name;
            app.modelImporterType = type;
            app.modelImporterPath = filePath;
            app.showModelImporter++;
        } else {
            app.modelImporterImg = filePath;
        }
    };

    // find by name in app.userModels
    function findModelByName(name) {
        if (app.userModels)
            for (var i = 0; i < app.userModels.length; i++) {
                if (app.userModels[i].name == name) {
                    return app.userModels[i];
                }
            }

        for (var i = 0; i < app.builtIn.length; i++) {
            if (app.builtIn[i].name == name) {
                return app.builtIn[i];
            }
        }
        return null;
    }

    function addRightClick() {
        for (var i of document.querySelectorAll(".model-item-new.user-model")) {
            i.oncontextmenu = function (e) {
                // console.log(e.target);
                e.preventDefault();

                var target = e.target;
                while (!target.classList.contains("model-item-new")) {
                    target = target.parentElement;
                }
                const rightmenu = document.getElementById("rightmenu");
                const rightclick = document.getElementById("rightclick");
                rightmenu.style.transform = "scaleY(1)";
                rightclick.style.display = "";
                rightmenu.style.top = e.clientY + "px";
                rightmenu.style.left = e.clientX + "px";
                rightclick.onclick = function () {
                    rightmenu.style.transform = "scaleY(0)";
                    rightclick.style.display = "none";
                };
                rightclick.oncontextmenu = rightclick.onclick;
                document.getElementById("btnopen").onclick = function () {
                    e.target.click();
                    rightclick.onclick();
                };
                document.getElementById("btndefault").onclick = function () {
                    app.selectModel = JSON.stringify(
                        findModelByName(target.querySelector("h2").innerText)
                    );
                    rightclick.onclick();
                };

                for(var obj of ["btnshow","btnremove","removeline1","removeline0"])
                    document.getElementById(obj).style.display = "";

                document.getElementById("btnremove").onclick = function () {
                    var modelName = target.querySelector("h2").innerText;
                    domBoom(target);
                    setTimeout(() => {
                        removeUserModels(modelName);
                    }, 1000);
                    rightclick.onclick();
                };

                document.getElementById("btnshow").onclick = function () {
                    var path = findModelByName(
                        target.querySelector("h2").innerText
                    ).path;
                    if (platform !== "darwin")
                        shell.showItemInFolder("file://" + path);
                    else
                        shell.openExternal(
                            "file://" + path.substr(0, path.lastIndexOf("/"))
                        );
                    rightclick.onclick();
                };
            };
        }

        for (var i of document.querySelectorAll(
            ".model-item-new.buildin-model"
        )) {
            i.oncontextmenu = function (e) {
                e.preventDefault();
                var target = e.target;
                while (!target.classList.contains("model-item-new")) {
                    target = target.parentElement;
                }
                const rightmenu = document.getElementById("rightmenu");
                const rightclick = document.getElementById("rightclick");
                rightmenu.style.transform = "scaleY(1)";
                rightclick.style.display = "";
                rightmenu.style.top = e.clientY + "px";
                rightmenu.style.left = e.clientX + "px";
                rightclick.onclick = function () {
                    rightmenu.style.transform = "scaleY(0)";
                    rightclick.style.display = "none";
                };
                rightclick.oncontextmenu = rightclick.onclick;
                document.getElementById("btnopen").onclick = function () {
                    e.target.click();
                    rightclick.onclick();
                };
                for(var obj of ["btnshow","btnremove","removeline1","removeline0"])
                    document.getElementById(obj).style.display = "none";

                document.getElementById("btndefault").onclick = function () {
                    app.selectModel = JSON.stringify(
                        findModelByName(target.querySelector("h2").innerText)
                    );
                    rightclick.onclick();
                };
            };
        }
    }

    addRightClick();

    window.addUserModels = async function () {
        var model = {
            name: app.modelImporterName,
            type: app.modelImporterType,
            picBg: app.modelImporterImg,
            path: app.modelImporterPath,
            accessories: {},
            binding: app.modelImporterType == "fbx" ? mixamorig : {},
        };
        addUserModels(model);
        app.userModels.push(model);
        app.showModelImporter = 0;
        setTimeout(async () => {
            addRightClick();
            for (var e of document.querySelectorAll(".my-img")) {
                if (e.src.includes("framework.html")) continue;
                var theme = await themeFromImage(e);
                applyTheme(theme, {
                    target: e.parentElement,
                    dark: darkMode,
                });
            }
        }, 500);
    };

    mdui.mutation();

            // --- iframe data bridge, startMocap, update check (formerly module scope) ---
var isMocaping = false;

const iframeWindow = document.getElementById("foo").contentWindow;

ipcRenderer.on("sendRenderDataForward", (ev, data) => {
    if (iframeWindow.onMocapData) iframeWindow.onMocapData(data);
});

ipcRenderer.on("switch-tab", (ev, data) => {
    window.sysmocapApp.tab = data;
});

window.startMocap = async function (e) {
    if (process.platform == "darwin" && app.videoSource == "camera")
        if (
            remote.systemPreferences.getMediaAccessStatus("camera") !==
            "granted"
        ) {
            if (!(await remote.systemPreferences.askForMediaAccess("camera"))) {
                alert("需要授予摄像头使用权限");
                return;
            }
        }
    if (e.innerHTML.indexOf(app.language.tabMocap.start) != -1) {
        isMocaping = true;
        localStorage.setItem("modelInfo", app.selectModel);
        localStorage.setItem("useCamera", app.videoSource);
        localStorage.setItem("cameraId", app.camera);
        localStorage.setItem("videoFile", app.videoPath[0]);

        if (window.sysmocapApp.settings.performance.useDescrertionProcess) {
            const win = remote.getCurrentWindow();
            const bw = win.getBrowserView();
            var winWidth = parseInt(win.getSize()[0]);
            bw.setBounds({
                x: parseInt(winWidth / 2),
                y: parseInt(
                    document.querySelector("#foo").getBoundingClientRect().y
                ),
                width: parseInt(winWidth / 2) - 20,
                height: parseInt(((winWidth - 40) * 10) / 32),
            });
            bw.webContents.loadFile("dist/mocap/mocap.html");
            if (window.sysmocapApp.settings.dev.openDevToolsWhenMocap)
                bw.webContents.openDevTools({ mode: "detach" });
            document.getElementById("foo").src = "../render/render.html";
        } else {
            document.getElementById("foo").src = "../mocaprender/render.html";
        }

        e.innerHTML =
            '<i class="mdui-icon material-icons">stop</i>' +
            app.language.tabMocap.stop;
    } else {
        isMocaping = false;
        if (window.sysmocapApp.settings.performance.useDescrertionProcess) {
            const win = remote.getCurrentWindow();
            const bw = win.getBrowserView();
            bw.setBounds({ x: 0, y: 0, width: 0, height: 0 });
            bw.webContents.loadURL("about:blank");
        }
        document.getElementById("foo").src = "about:blank";

        if (window.sysmocapApp.settings.forward.enableForwarding)
            ipcRenderer.send("stopWebServer");

        e.innerHTML =
            '<i class="mdui-icon material-icons">play_arrow</i>' +
            app.language.tabMocap.start;
    }
};

if (window.sysmocapApp.settings.performance.useDescrertionProcess)
    window.addEventListener(
        "resize",
        function () {
            if (!isMocaping) return;
            const win = remote.getCurrentWindow();
            const bw = win.getBrowserView();
            var winWidth = parseInt(win.getSize()[0]);
            bw.setBounds({
                x: parseInt(winWidth / 2),
                y: parseInt(
                    document.querySelector("#foo").getBoundingClientRect().y
                ),
                width: parseInt(winWidth / 2) - 20,
                height: parseInt(((winWidth - 40) * 10) / 32),
            });
        },
        false
    );

// require modules
const versionCheck = require("github-version-checker");

window.checkUpdate = () => {
    if (window.sysmocapApp.checkingUpdate || window.sysmocapApp.isLatest) return;
    window.sysmocapApp.checkingUpdate = true;

    // version check options (for details see below)
const options = {
    repo: 'SysMocap',                    // repository name
    owner: 'xianfei',                               // repository owner
    currentVersion: 'v' + window.sysmocapApp.appVersion,                       // your app's current version
  };
  
  versionCheck(options, function (error, update) { // callback function
    window.sysmocapApp.updateError = null
    if (error) {
        window.sysmocapApp.updateError = error
        window.sysmocapApp.checkingUpdate = false
        return
    }
    if (update) { // print some update info if an update is available
      console.log('An update is available! ' + update.name);
      window.sysmocapApp.hasUpdate = update
    } else {
        window.sysmocapApp.isLatest = true
    }


  window.sysmocapApp.checkingUpdate = false
    // start your app
    // console.log('Check update finish');
    //...
  });
};

window.openInGithub = () =>
    remote.shell.openExternal("https://github.com/xianfei/SysMocap/releases");
window.openInIEEE = () =>
    remote.shell.openExternal("https://ieeexplore.ieee.org/document/9974484");

if(!window.sysmocapApp.disableAutoUpdate) window.checkUpdate()

window.addEventListener('scroll',function(e){
    if(window.pageYOffset > 10){
        window.sysmocapApp.showLine = true
    }else{
        window.sysmocapApp.showLine = false
    }
  })
        });

        return { ...toRefs(state) };
    },
};
</script>
