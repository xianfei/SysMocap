// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain,nativeTheme  } = require('electron')
const os = require('os')
const platform = os.platform()
var blurBrowserWindow
if(platform==='win32')
  blurBrowserWindow = require("electron-acrylic-window").BrowserWindow
else
  blurBrowserWindow = BrowserWindow
const path = require('path')
const storage = require('electron-localstorage');
require('@electron/remote/main').initialize()

const fs = require('fs');
const _path = path.join(app.getPath("home"), app.getName() + "/", 'db.json');
const _path_dir = path.dirname(_path);
if (!fs.existsSync(_path_dir)) {
  try {
    fs.mkdirSync(_path_dir); // 只支持一层
  }
  catch (e) {

  }
}
storage.setStoragePath(_path);
global.storagePath = { extra: storage.getStoragePath() };

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1180,
    height: 750,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#fff',
      symbolColor: '#111'
    },
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('mainview/framework.html')
  nativeTheme.themeSource = 'light'

  // createWelcomeWindow()
  // showDoc()

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  require("@electron/remote/main").enable(mainWindow.webContents)

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function createModelViewerWindow(args) {
  // Create the browser window.
  var viewer = new blurBrowserWindow({
    width: 820,
    height: 540,
    titleBarStyle: 'hidden',
    backgroundColor: args.backgroundColor,
    titleBarOverlay: {
      color: args.backgroundColor,
      symbolColor: args.color
    },
    vibrancy: 'dark',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false,
      enableRemoteModule: true,
      additionalArguments: ["argsData", JSON.stringify(args)]
    }
  })

  // and load the index.html of the app.
  viewer.loadFile('modelview/modelview.html')
  require("@electron/remote/main").enable(viewer.webContents)


  // Open the DevTools.
  // viewer.webContents.openDevTools()

  // Emitted when the window is closed.
  viewer.on('closed', function () {
    viewer = null
  })
}

function createWelcomeWindow() {
  // Create the browser window.
  var viewer = new blurBrowserWindow({
    width: 860,
    height: 460,
    titleBarStyle: 'hidden',
    vibrancy: {
      theme: 'light',
      effect: 'blur'
    },
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  // and load the index.html of the app.
  viewer.loadFile('hellopage/welcome.html')

  // Open the DevTools.
  // viewer.webContents.openDevTools()

  // Emitted when the window is closed.
  viewer.on('closed', function () {
    viewer = null
  })
}

function showDoc() {
  var docWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })


// and load the html of the app.
docWindow.loadFile('documentview/document.html')
require("@electron/remote/main").enable(docWindow.webContents)


docWindow.on('closed', function () {
  docWindow = null
})

  docWindow.toggleDevTools();

}

ipcMain.on('openDocument', function (event, arg) {
  showDoc()
});

ipcMain.on('openModelViewer', function (event, arg) {
  createModelViewerWindow(arg)
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
