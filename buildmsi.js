const { MSICreator } = require("electron-wix-msi");
const path = require("path");
const fs = require("fs-extra");

const arch = process.argv[2];

if (!arch || !["msil", "x86", "x64", "arm", "arm64", "ia64"].includes(arch)) {
    console.error(
        "Please input a valid arch: msil, x86, x64, arm, arm64, ia64"
    );
    process.exit(1);
}

const APP_DIR = path.join(__dirname, "/OutApp/SysMocap-win32-" + arch);
const OUT_DIR = path.join(__dirname, "/OutApp/installers");

async function clean() {
    await fs.ensureDir(APP_DIR);
    await fs.emptyDir(OUT_DIR);
}

async function harness() {
    const msiCreator = new MSICreator({
        appDirectory: APP_DIR,
        exe: "SysMocap.exe",
        name: "SysMocap",
        arch: arch,
        manufacturer: "Xianfei Wang",
        icon: path.join(APP_DIR, "../../icons/sysmocap.ico"),
        outputDirectory: OUT_DIR,
        description: "Sysmocap",
        ui: {
            chooseDirectory: true,
            images: {
                background: path.join(APP_DIR, "../../icons/dlgbmp.jpg"),
                banner: path.join(APP_DIR, "../../icons/bannrbmp.jpg"),
            },
        },
        version: require("./package.json").version,
    });

    await clean();
    msiCreator.wixTemplate = msiCreator.wixTemplate
        .replaceAll(
            'Name = "{{ApplicationName}} (Machine - MSI)"',
            'Name = "{{ApplicationName}}"'
        )
        .replaceAll("{{ApplicationName}} (Machine)", "{{ApplicationName}}");
    await msiCreator.create();
    await msiCreator.compile();

    // 定义源目录和目标目录
    const sourceDir = path.join(__dirname, "OutApp/installers");
    const targetDir = path.join(__dirname, "OutApp/packages");

    // 检查目标目录是否存在，如果不存在则创建
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // 读取源目录中的所有文件
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error("无法读取目录", err);
            return;
        }

        const exeFiles = files.filter((file) => path.extname(file) === ".msi");

        exeFiles.forEach((file) => {
            const sourceFile = path.join(sourceDir, file);
            const targetFile = path.join(
                targetDir,
                path.basename(file, ".msi") +
                    "-Windows-" +
                    arch +
                    "-installer.msi"
            );

            fs.rename(sourceFile, targetFile, (err) => {
                if (err) {
                    console.error(`无法移动文件 ${file}`, err);
                } else {
                    console.log(`文件 ${file} 已移动到 ${targetDir}`);
                }
            });
        });
    });
}

harness();
