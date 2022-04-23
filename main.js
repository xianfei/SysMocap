/**
 *  Main Node Process for SysMocap
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.4
 */

// output art text to console
var figlet = require("figlet");

console.log(
    "\x1b[95m%s\x1b[0m",
    figlet.textSync("SysMocap", {
        horizontalLayout: "full",
    })
);

console.log(
    "\x1b[95m%s\x1b[0m",
    "\n   Video-based Motion Capture & Character Animation System"
);
console.log("\x1b[94m%s\x1b[0m", "\t\t\t\t\t\tby xianfei");

const sections = [
    {
        header: "SysMocap",
        content:
            "A real-time video-based motion capture system for virtual character animating and rendering. It's a free and open-sourced software.",
    },
    {
        header: "Options",
        optionList: [
            {
                name: "help",
                type: Boolean,
                description: "Print this usage guide.",
            },
            {
                name: "bsmode",
                type: Boolean,
                description: "Run SysMocap on B/S mode. (experimental)",
            },
            {
                name: "port",
                typeLabel: "{underline number}",
                description: "The HTTP port when running on B/S mode.",
            },
            {
                name: "reset",
                type: Boolean,
                description: "Reset preferences and run sysmocap",
            },
            {
                name: "disable-acrylic",
                type: Boolean,
                description: "(Windows Only) disable acrylic effects",
            },
        ],
    },
];

const parser = require("./utils/argv-parser.js");
var argv = parser(process.argv)

if (argv.help) {
    var commandLineUsage = require("command-line-usage");
    console.log(commandLineUsage(sections));
    process.exit(0);
}

if (argv.bsmode) {
    console.log("\nRunning SysMocap on B/S mode.\nBooting Server...");

    const express = require("express");
    const app = express();

    app.use(express.static(__dirname));

    var port = argv.port ? argv.port : 8080;

    app.listen(port, "0.0.0.0", function () {
        console.log(
            "\x1b[92m%s%d\x1b[0m",
            "\nHTTP server listening on port ",
            port
        );
    });

    app.get("/", (req, res) => {
        res.redirect("/mainview/framework.html");
    });
} else {
    const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
    const os = require("os");
    const platform = os.platform();

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
        } catch (e) {}
    }
    storage.setStoragePath(_path);

    // Restart with force using the dedicated GPU
    const { spawn } = require("child_process");
    if (
        platform === "win32" &&
        process.env.GPUSET !== "true" &&
        storage.getItem("useDgpu")
    ) {
        spawn(process.execPath, process.argv, {
            env: {
                ...process.env,
                SHIM_MCCOMPAT: "0x800000001", // this forces windows to use the dedicated GPU for the process
                GPUSET: "true",
            },
            detached: true,
        });
        process.exit(0);
    }

    // Modules to control application life and create native browser window

    var blurBrowserWindow;
    require("@electron/remote/main").initialize();

    // Enable Acrylic Effect on Windows by default
    if (platform === "win32")try{
        blurBrowserWindow = require("electron-acrylic-window").BrowserWindow;
    }catch(e){
        blurBrowserWindow = BrowserWindow;
    }
    // if not on Windows, use electron window
    else blurBrowserWindow = BrowserWindow;

    global.storagePath = { jsonPath: storage.getStoragePath() };
    global.appInfo = { appVersion: app.getVersion(), appName: app.getName() };

    // Prevents Chromium from lowering the priority of invisible pages' renderer processes.
    // Improve performance when Mocap is running and forward motion data in background
    app.commandLine.appendSwitch("disable-renderer-backgrounding", true);

    // Force using discrete GPU when there are multiple GPUs available.
    // Improve performance when your PC has discrete GPU
    app.commandLine.appendSwitch("force_high_performance_gpu", true);

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow;

    function createWindow() {
        // Create the browser window.
        mainWindow = new BrowserWindow({
            width: 1180,
            height: 750,
            titleBarStyle: "hidden",
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

        // createWelcomeWindow()
        // showDoc()

        // Open the DevTools.
        // mainWindow.webContents.openDevTools()
        require("@electron/remote/main").enable(mainWindow.webContents);

        // Emitted when the window is closed.
        mainWindow.on("closed", function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        });
    }

    function createModelViewerWindow(args) {
        // Create the browser window.
        var viewer = new blurBrowserWindow({
            width: 820,
            height: 540,
            titleBarStyle: "hidden",
            backgroundColor: "#00000000",
            autoHideMenuBar: true,
            titleBarOverlay: {
                color: args.backgroundColor,
                symbolColor: args.color,
            },
            vibrancy: "dark",
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
                contextIsolation: false,
                enableRemoteModule: true,
                additionalArguments: ["argsData", JSON.stringify(args)],
            },
        });

        // and load the index.html of the app.
        viewer.loadFile("modelview/modelview.html");
        require("@electron/remote/main").enable(viewer.webContents);

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
        require("@electron/remote/main").enable(viewer.webContents);

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
        require("@electron/remote/main").enable(docWindow.webContents);

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
}
