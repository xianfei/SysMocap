/**
 *  Main Node Process for SysMocap
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.4
 */

const {
    app,
    BrowserWindow,
    BrowserView,
    ipcMain,
    TouchBar,
    nativeTheme,
} = require("electron");
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar
const os = require("os");
const platform = os.platform();
const { Worker } = require("worker_threads");
const Color = require('color');


// Make profile file on user home dir
const path = require("path");
const storage = require("electron-localstorage");
const fs = require("fs");
const _path = path.join(
    app.getPath("home"),
    app.getName() + "/",
    "profile.json"
);
const _path_dir = path.dirname(_path);
if (!fs.existsSync(_path_dir)) {
    try {
        fs.mkdirSync(_path_dir);
    } catch (e) { }
}
storage.setStoragePath(_path);

// Restart with force using the dedicated GPU
const { spawn } = require("child_process");
if (
    platform === "win32" &&
    // process.env.GPUSET !== "true" &&
    storage.getItem("useDgpu")
) {
    // Force using discrete GPU when there are multiple GPUs available.
    // Improve performance when your PC has discrete GPU
    app.commandLine.appendSwitch("force_high_performance_gpu", true);
    // spawn(process.execPath, process.argv, {
    //     env: {
    //         ...process.env,
    //         SHIM_MCCOMPAT: "0x800000001", // this forces windows to use the dedicated GPU for the process
    //         GPUSET: "true",
    //     },
    //     detached: true,
    // });
    // process.exit(0);
}

// Modules to control application life and create native browser window

var blurBrowserWindow;
const electronRemoteMain = require("@electron/remote/main");
electronRemoteMain.initialize();

var isWin11;

// Enable Acrylic Effect on Windows by default
if (platform === "win32")
    try {
        const mica_electron =  require('mica-electron')
        blurBrowserWindow = mica_electron.MicaBrowserWindow;
        isWin11 = mica_electron.IS_WINDOWS_11
    } catch (e) {
        console.log(e)
        blurBrowserWindow = BrowserWindow;
    }
// if not on Windows, use electron window
else blurBrowserWindow = BrowserWindow;

global.storagePath = { jsonPath: storage.getStoragePath() };
global.appInfo = { appVersion: app.getVersion(), appName: app.getName() };

// Prevents Chromium from lowering the priority of invisible pages' renderer processes.
// Improve performance when Mocap is running and forward motion data in background
app.commandLine.appendSwitch("disable-renderer-backgrounding", true);
app.commandLine.appendSwitch("enable-unsafe-webgpu");
// Support H265/hevc hardware decode
app.commandLine.appendSwitch('enable-features', 'PlatformHEVCDecoderSupport');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1180,
        height: 750,
        titleBarStyle: "hidden",
        trafficLightPosition: { x: 15, y: 15 },
        // titleBarOverlay: {
        //   color: '#fff',
        //   symbolColor: '#111'
        // },
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true,
            backgroundThrottling: false,
            nodeIntegrationInSubFrames: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile("mainview/framework.html");
    nativeTheme.themeSource = "light";

    if (
        storage.getItem("useDMoc") ||
        (!storage.getItem("used") && platform == "darwin")
    ) {
        console.log('BrowserView Inited')
        renderView = new BrowserView({
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
                contextIsolation: false,
                enableRemoteModule: true,
                backgroundThrottling: false,
                nodeIntegrationInSubFrames: true,
            },
        });
        mainWindow.setBrowserView(renderView);
        renderView.setBounds({ x: 0, y: 0, width: 0, height: 0 });
        renderView.webContents.loadURL("about:blank");
        // renderView.webContents.openDevTools({ mode: "detach" });
        electronRemoteMain.enable(renderView.webContents);
    }

    ipcMain.on("sendRenderData", function (event, arg) {
        // console.log("sendRenderData")
        mainWindow.webContents.send("sendRenderDataForward", arg);
    });

    // createWelcomeWindow()
    // showDoc()

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    electronRemoteMain.enable(mainWindow.webContents);

    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        renderView = null;
        mainWindow = null;
    });


    if (process.platform !== 'darwin') return;

    // 附赠彩蛋：老虎机

    let spinning = false

    // Reel labels
    const reel1 = new TouchBarLabel({ label: '<- Easter egg!🌟' })
    const reel2 = new TouchBarLabel({ label: "Sysmocap v" + app.getVersion() })
    const reel3 = new TouchBarLabel()

    // Spin result label
    const result = new TouchBarLabel()

    // Spin button
    const spin = new TouchBarButton({
        label: '🎰 Spin',
        // backgroundColor: '#4d386e',
        click: () => {
            if (spinning) return // Ignore clicks if already spinning
            spinning = true
            result.label = ''
            let timeout = 10
            const spinLength = 4 * 1000 // 4 seconds
            const startTime = Date.now()
            const spinReels = () => {
                updateReels()
                if ((Date.now() - startTime) >= spinLength) {
                    finishSpin()
                } else {
                    timeout *= 1.1  // Slow down a bit on each spin
                    setTimeout(spinReels, timeout)
                }
            }
            spinReels()
        }
    })

    const getRandomValue = () => {
        const values = ['🍒', '💎', '🍭', '🍊', '🔔', '⭐', '🍇', '🍀']
        return values[Math.floor(Math.random() * values.length)]
    }

    const updateReels = () => {
        reel1.label = getRandomValue()
        reel2.label = getRandomValue()
        reel3.label = getRandomValue()
    }

    const finishSpin = () => {
        const uniqueValues = new Set([reel1.label, reel2.label, reel3.label]).size
        if (uniqueValues === 1) {
            // All 3 values are the same
            result.label = '💰 Jackpot!'
            result.textColor = '#FDFF00'
        } else if (uniqueValues === 2) {
            // 2 values are the same
            result.label = '😍 Winner!'
            result.textColor = '#FDFF00'
        } else {
            // No values are the same
            result.label = '🙁 Spin Again'
            result.textColor = null
        }
        spinning = false
    }

    var a = new TouchBarButton({
        label: '🏛 Library',
        backgroundColor: null,
        click: () => {
            mainWindow.webContents.send('switch-tab', 'model')
        }
    }), b =
            new TouchBarButton({
                label: '📹 Mocap',
                backgroundColor: null,
                click: () => {
                    mainWindow.webContents.send('switch-tab', 'render')
                }
            }), c =
            new TouchBarButton({
                label: '⚙️ Setting',
                backgroundColor: null,
                click: () => {
                    mainWindow.webContents.send('switch-tab', 'settings')
                }
            })

    ipcMain.on('tabChanged', (n,tab,color1,color2)=>{
        a.backgroundColor = b.backgroundColor = c.backgroundColor = null
        var color = Color(color1)
        color = color.darken(0.4)
        if(tab=='model') {a.backgroundColor = color.hex()}
        if(tab=='render') {b.backgroundColor = color.hex()}
        if(tab=='settings') {c.backgroundColor = color.hex()}
    })

    var tbItems = [
        a, b, c,
        spin,
        new TouchBarSpacer({ size: 'small' }),
        reel1,
        new TouchBarSpacer({ size: 'small' }),
        reel2,
        new TouchBarSpacer({ size: 'small' }),
        reel3,
        new TouchBarSpacer({ size: 'large' }),
        result
    ]

    const touchBar = new TouchBar({
        items: tbItems
    })

    mainWindow.setTouchBar(touchBar)
}

function createModelViewerWindow(args) {
    // Create the browser window.
    var myBrowserWindow = BrowserWindow;
    var addtionalArgs = { backgroundColor: "#eee" };
    if (args.useGlass) {
        myBrowserWindow = blurBrowserWindow;
        addtionalArgs = {
            vibrancy: "light",
            backgroundColor: "#00000000",
        };
    }
    var viewer = new myBrowserWindow({
        width: 820,
        height: 540,
        titleBarStyle: platform === "darwin" ? "hiddenInset" : "hidden",
        autoHideMenuBar: true,
        show: false,
        ...addtionalArgs,
        titleBarOverlay: {
            color: args.backgroundColor,
            symbolColor: args.color,
        },
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true,
            additionalArguments: ["argsData", JSON.stringify(args)],
        },
    });

    // and load the index.html of the app.
    viewer.loadURL('about:blank')
    electronRemoteMain.enable(viewer.webContents);

    if (args.useGlass && platform === "win32" && isWin11!==null) {
        if(isWin11) viewer.setMicaAcrylicEffect(); // Acrylic for windows 11
        else viewer.setAcrylic(); 
    }

    viewer.webContents.once('dom-ready', () => {
        viewer.show();
        viewer.loadFile("modelview/modelview.html");
        viewer.setSize(820,540)
    });

    // Open the DevTools.
    // viewer.webContents.openDevTools()

    // Emitted when the window is closed.
    viewer.on("closed", function () {
        viewer = null;
    });
}

function createPdfViewerWindow(args) {
    // Create the browser window.
    var viewer = new BrowserWindow({
        width: 1180,
        height: 750,
        autoHideMenuBar: true,
        titleBarStyle: "hidden",
        trafficLightPosition: { x: 10, y: 8 },
        titleBarOverlay: {
            color: "#f9f9fa",
            symbolColor: "#111111",
        },
        // vibrancy: "dark",
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true,
            additionalArguments: ["pdfPath", JSON.stringify(args)],
        },
    });

    // and load the index.html of the app.
    viewer.loadFile("pdfviewer/viewer.html");
    electronRemoteMain.enable(viewer.webContents);

    // Open the DevTools.
    // viewer.webContents.openDevTools()

    // Emitted when the window is closed.
    viewer.on("closed", function () {
        viewer = null;
    });
}

function createGpuInfoWindow() {
    // Create the browser window.
    var viewer = new blurBrowserWindow({
        width: 1000,
        height: 600,
        title: "GPU Info",
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    // and load the index.html of the app.
    viewer.loadURL("chrome://gpu");

    // Open the DevTools.
    // viewer.webContents.openDevTools()

    // Emitted when the window is closed.
    viewer.on("closed", function () {
        viewer = null;
    });
}

function showDoc() {
    var docWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        frame: false,
        autoHideMenuBar: true,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    // and load the html of the app.
    docWindow.loadFile("documentview/document.html");
    electronRemoteMain.enable(docWindow.webContents);

    docWindow.on("closed", function () {
        docWindow = null;
    });

    // docWindow.toggleDevTools();
}

ipcMain.on("openDocument", function (event, arg) {
    showDoc();
});

ipcMain.on("openModelViewer", function (event, arg) {
    createModelViewerWindow(arg);
});

ipcMain.on("openGpuInfo", function (event, arg) {
    createGpuInfoWindow();
});

ipcMain.on("openPDF", function (event, arg) {
    createPdfViewerWindow(arg);
});

var worker = null;

ipcMain.on("startWebServer", function (event, ...arg) {
    worker = new Worker(__dirname + "/webserv/worker.js");
    worker.postMessage({ type: "startWebServer", arg: arg });
});

ipcMain.on("sendBoradcast", function (event, arg) {
    if (worker)
        worker.postMessage({ type: "sendBroadcast", arg: JSON.stringify(arg) });
});

ipcMain.on("sendBoradcastNew", function (event, arg) {
    mainWindow.webContents.send("sendRenderDataForward", arg);
    if (worker)
        worker.postMessage({ type: "sendBroadcast", arg: JSON.stringify(arg) });
});

ipcMain.on("stopWebServer", function (event, arg) {
    if (worker) worker.postMessage({ type: "stopWebServer" });
    worker = null;
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
    app.quit();
});

app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
