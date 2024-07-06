const {MSICreator} = require('electron-wix-msi');
const path = require('path')
const fs = require('fs-extra');

const APP_DIR = path.join(__dirname, '/OutApp/SysMocap-win32-x64/');
const OUT_DIR = path.join(__dirname, '/OutApp/installers/');

async function clean() {
  await fs.ensureDir(APP_DIR);
  await fs.emptyDir(OUT_DIR);
}

async function harness() {
  const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    exe: 'SysMocap.exe',
    name: 'SysMocap',
    arch: 'x64',
    manufacturer: 'Xianfei Wang',
    icon: path.join(APP_DIR, '../../icons/sysmocap.ico'),
    outputDirectory: OUT_DIR,
    description: 'Sysmocap',
    ui: {
      chooseDirectory: true
    },
    version: '0.0.8',
  });

  await clean();
  await msiCreator.create();
  await msiCreator.compile();
}

harness();