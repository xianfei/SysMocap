/**
 *  SysMocap Main GUI (display when boot finish)
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

var ipcRenderer = null;
var remote = null;
var platform = "web";

var mixamorig = {
    Hips: {
        name: "mixamorigHips",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    Neck: {
        name: "mixamorigNeck",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    Chest: {
        name: "mixamorigSpine2",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    Spine: {
        name: "mixamorigSpine",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    RightUpperArm: {
        name: "mixamorigRightArm",
        func: { fx: "-z", fy: "x", fz: "-y" },
    },
    RightLowerArm: {
        name: "mixamorigRightForeArm",
        func: { fx: "-z", fy: "x", fz: "-y" },
    },
    LeftUpperArm: {
        name: "mixamorigLeftArm",
        func: { fx: "z", fy: "-x", fz: "-y" },
    },
    LeftLowerArm: {
        name: "mixamorigLeftForeArm",
        func: { fx: "z", fy: "-x", fz: "-y" },
    },
    LeftUpperLeg: {
        name: "mixamorigLeftUpLeg",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    LeftLowerLeg: {
        name: "mixamorigLeftLeg",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    RightUpperLeg: {
        name: "mixamorigRightUpLeg",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
    RightLowerLeg: {
        name: "mixamorigRightLeg",
        func: { fx: "-x", fy: "y", fz: "-z" },
    },
};

function domBoom(target,onfinish) {
    target.style.animation = "shake 800ms ease-in-out";
    var targetBoundingClientRectX =
        target.getBoundingClientRect().x;
    var targetBoundingClientRectY =
        target.getBoundingClientRect().y;

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
    

    setTimeout(()=>html2canvas(mydiv, { backgroundColor: null }).then(function (
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
        gap: 10,
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
        // speed:2,
        onBoomEnd: function () {
            targetBak.remove(); 
            // targetBak.style.filter = '';
            if(onfinish)onfinish();
            canvas.remove();
        },
    };
        new ParticleBoom(canvas, boomOption2);
    }),200);
}

var darkMode = false;

import {
    argbFromHex,
    themeFromSourceColor,
    themeFromImage,
    sourceColorFromImage,
    applyTheme,
} from "../utils/material-color-utilities/index.js";

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

if (typeof require != "undefined") {
    // import electron remote
    remote = require("@electron/remote");

    ipcRenderer = require("electron").ipcRenderer;

    const { shell } = require("electron");

    platform = require("os").platform();

    // import setting utils
    const {
        getSettings,
        globalSettings,
        saveSettings,
        userModels,
        addUserModels,
        removeUserModels,
    } = require("../utils/setting.js");

    // set theme
    document.body.setAttribute(
        "class",
        "mdui-theme-primary-" +
            globalSettings.ui.themeColor +
            " mdui-theme-accent-" +
            globalSettings.ui.themeColor
    );

    var f = async () => {
        var color = window.getComputedStyle(
            document.querySelector(".mdui-color-theme"),
            null
        ).backgroundColor;
        var hex = rgba2hex(color);
        var theme = await themeFromSourceColor(argbFromHex(hex));
        applyTheme(theme, { target: document.body, dark: darkMode });
    };
    f();

    // import languages
    const { languages } = require("../utils/language.js");

    // import built-in models
    var builtInModels = require("../models/models.json");

    var app = new Vue({
        el: "#vue-mount",
        data: {
            tab: "model",
            builtIn: builtInModels,
            selectModel: JSON.stringify(builtInModels[0]),
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
            document: document,
        },
        computed: {
            bg: function () {
                this.settings.ui.themeColor;
                var color = window.getComputedStyle(
                    document.querySelector(".mdui-color-theme"),
                    null
                ).backgroundColor;
                console.log(color);
                return color;
            },
        },
        mounted() {
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
            if (this.settings.ui.useNewModelUI) modelOnload();
        },
        watch: {
            settings: {
                handler(newVal, oldVal) {
                    // save when changed
                    // console.log('settings changed')
                    document.body.setAttribute(
                        "class",
                        "mdui-theme-primary-" +
                            app.settings.ui.themeColor +
                            " mdui-theme-accent-" +
                            app.settings.ui.themeColor
                    );

                    var f = async () => {
                        var color = window.getComputedStyle(
                            document.querySelector(".mdui-color-theme"),
                            null
                        ).backgroundColor;
                        var hex = rgba2hex(color);
                        var theme = await themeFromSourceColor(
                            argbFromHex(hex)
                        );
                        applyTheme(theme, {
                            target: document.body,
                            dark: darkMode,
                        });
                    };
                    f();

                    saveSettings(app.settings);
                    app.language = languages[app.settings.ui.language];
                },
                deep: true,
            },
        }
    });

    window.sysmocapApp = app;

    remote.app.getGPUInfo("complete").then((info) => {
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

    var lightInput = new mdui.Dialog("#light-js");

    var hasInitdLight = false;

    function openLightInput() {
        lightInput.open();
        // light effect javascript input
        if (hasInitdLight) return;
        var editor = CodeMirror.fromTextArea(
            document.getElementById("light-input"),
            {
                mode: "text/javascript",
                lineNumbers: true, // 显示行号
                matchBrackets: true,
            }
        );

        editor.on("blur", function () {
            editor.save();
        });
        hasInitdLight = true;
    }

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
        //console.log(e);
        var filePath = e.dataTransfer.files[0].path.replaceAll("\\", "/");
        console.log(filePath);
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
                console.log(e.target);
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
                document.getElementById("btnshow").style.display = "";
                document.getElementById("btnremove").style.display = "";

                document.getElementById("btnremove").onclick = function () {
                    var modelName = target.querySelector("h2").innerText
                    domBoom(target)
                    setTimeout(() => {removeUserModels(modelName);},1000)
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
                document.getElementById("btnshow").style.display = "none";
                document.getElementById("btnremove").style.display = "none";

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
} else {
    languages = {
        zh: {
            app: {
                name: "视频驱动虚拟角色动作的自动生成系统",
            },
            titlebar: {
                modelLib: "模型库",
                mocap: "动作捕捉",
                settings: "设置",
            },
            tabModelLib: {
                userModel: "用户模型",
                buildinModel: "内建模型",
                optAdd: "导入",
            },
            tabMocap: {
                chooseModel: "选择模型：",
                dataSource: "数据源：",
                camera: "摄像头",
                videoFile: "视频文件",
                start: "开始",
                stop: "停止",
            },
            tabSettings: {
                desc: "计算机学院 2018级 王衔飞 毕业设计作品",
                document: {
                    name: "文档",
                    openDoc: "打开使用文档",
                },
                ui: {
                    name: "外观",
                    themeColor: "主题颜色",
                    isDark: "使用深色模式",
                    useGlass: "使用毛玻璃效果",
                    language: "语言",
                },
                preview: {
                    name: "实时预览",
                    showSketelonOnInput: "对输入源进行骨骼可视化标记",
                    mirroringWhenCamera: "当输入源为摄像头时，进行水平镜像翻转",
                    mirroringWhenVideoFile:
                        "当输入源为视频文件时，进行水平镜像翻转",
                },
                output: {
                    name: "虚拟形象输出",
                    antialias: "启用抗锯齿",
                    usePicInsteadOfColor: "使用图片作为背景而不是纯色",
                    bgColor: "背景颜色",
                    bgPicPath: "背景图片（点击更换）",
                },
                performance: {
                    name: "性能",
                    gl: "当前图形计算设备：",
                    forcedDGPU:
                        "在双显卡设备优先使用独立显卡进行图形计算（重启软件生效）",
                },
                forward: {
                    name: "动作/虚拟形象转发",
                    enableForwarding:
                        "启用通过 HTTP / WebSocket 的动作/虚拟形象转发",
                    port: "HTTP / WebSocket 端口号",
                },
                mediapipe: {
                    name: "动作捕捉",
                },
                dev: {
                    name: "开发者",
                    allowDevTools: "显示GUI DevTools入口",
                    openDevToolsWhenMocap: "在启动动作捕捉时打开DevTools窗口",
                    showGpuInfo: "打开GPU信息页面",
                },
            },
        },
        en: {
            app: {
                name: "Video-driven Virtual Character Animated System",
            },
            titlebar: {
                modelLib: "library",
                mocap: "mocap",
                settings: "setting",
            },
            tabModelLib: {
                userModel: "User's Models",
                buildinModel: "Built-in Models",
                optAdd: "导入",
            },
            tabMocap: {
                chooseModel: "3D Model：",
                dataSource: "Source：",
                camera: "Camera",
                videoFile: "Video File",
                start: "Start",
                stop: "Stop",
            },
            tabSettings: {
                desc: "By Xianfei, as Undergraduate Graduation Design Works",
                document: {
                    name: "User Manual",
                    openDoc: "Show the User Manual",
                },
                ui: {
                    name: "Interface",
                    themeColor: "Themed Color",
                    isDark: "Use Dark Mode",
                    useGlass: "Use Frosted Glass Effect",
                    language: "Language",
                },
                preview: {
                    name: "Real-time Preview",
                    showSketelonOnInput: "Show Bones Sketelon on Input Source",
                    mirroringWhenCamera:
                        "Horizontal Mirror Flip when Camera as Input",
                    mirroringWhenVideoFile:
                        "Horizontal Mirror Flip when Video File as Input",
                },
                performance: {
                    name: "Performance",
                    gl: "Current GL Device: ",
                    forcedDGPU:
                        "Use Discrete Graphics on Dual GPU Laptop（Need Reopen Software）",
                },
                output: {
                    name: "Virtual Character Output",
                    antialias: "Enable Antialias",
                    usePicInsteadOfColor:
                        "Use Picture as Background instead of Color",
                    bgColor: "Background Color",
                    bgPicPath: "Background Picture (click to change)",
                },
                forward: {
                    name: "Mocap Data Forward",
                    enableForwarding: "Enable Forward via HTTP & WebSocket",
                    port: "Port Number of HTTP & WebSocket",
                },
                mediapipe: {
                    name: "Motion Capture",
                },
                dev: {
                    name: "Developer",
                    allowDevTools: "Show Entrance for DevTools",
                    openDevToolsWhenMocap: "Open DevTools when Mocap Started",
                    showGpuInfo: "Open GPU Info Page",
                },
            },
        },
    };
    globalSettings = {
        ui: {
            themeColor: "deep-purple",
            isdark: darkMode,
            useGlass: true,
            language: "zh",
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
            GPUs: 0,
        },
        valued: true,
        ver: 0.2,
    };

    document.body.setAttribute(
        "class",
        "mdui-theme-primary-" +
            globalSettings.ui.themeColor +
            " mdui-theme-accent-" +
            globalSettings.ui.themeColor
    );
    var app = new Vue({
        el: "#vue-mount",
        data: {
            tab: "model",
            builtIn: [],
            selectModel: "",
            language: languages["zh"],
            videoSource: "camera",
            videoPath: "",
            settings: globalSettings,
            appVersion: "web alpha",
            glRenderer: "Unknown",
            platform: platform,
        },
        computed: {
            bg: function () {
                this.settings.ui.themeColor;
                return window.getComputedStyle(
                    document.querySelector(".mdui-color-theme"),
                    null
                ).backgroundColor;
            },
            fg: function () {
                this.settings.ui.themeColor;
                return window.getComputedStyle(
                    document.querySelector(".mdui-color-theme"),
                    null
                ).color;
            },
        },
        watch: {
            settings: {
                handler(newVal, oldVal) {
                    // save when changed
                    // console.log('settings changed')
                    document.body.setAttribute(
                        "class",
                        "mdui-theme-primary-" +
                            app.settings.ui.themeColor +
                            " mdui-theme-accent-" +
                            app.settings.ui.themeColor
                    );
                    // saveSettings(app.settings);
                    app.language = languages[app.settings.ui.language];
                },
                deep: true,
            },
        },
    });

    window.sysmocapApp = app;

    fetch("../models/models.json")
        .then((e) => {
            return e.json();
        })
        .then((e) => {
            app.builtIn = e;
            app.selectModel = JSON.stringify(e[0]);
        });
}

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
        localStorage.setItem("modelInfo", app.selectModel);
        localStorage.setItem("useCamera", app.videoSource);
        localStorage.setItem("videoFile", app.videoPath[0]);
        document.getElementById("foo").src = "../render/render.html";
        e.innerHTML =
            '<i class="mdui-icon material-icons">stop</i>' +
            app.language.tabMocap.stop;
    } else {
        document.getElementById("foo").src = "about:blank";
        if (ipcRenderer) ipcRenderer.send("stopWebServer");
        e.innerHTML =
            '<i class="mdui-icon material-icons">play_arrow</i>' +
            app.language.tabMocap.start;
    }
};
