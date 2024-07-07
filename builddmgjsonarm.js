const fs = require('fs');
const path = require('path');

const path2 = './OutApp/packages';

// 检查文件夹是否存在
if (!fs.existsSync(path2)) {
    // 创建文件夹
    fs.mkdirSync(path2, { recursive: true });
    console.log(`目录 ${path2} 已创建`);
} else {
    console.log(`目录 ${path2} 已存在`);
}

// 配置对象
let config = {
  title: 'SysMocap-macOS-arm64',
  format: "ULMO",
  contents: [
    { x: 448, y: 196, type: 'link', path: '/Applications' },
    {
      x: 192,
      y: 196,
      type: 'file',
      path: '/Users/xianfei/Documents/GitHub/SysMocap/OutApp/SysMocap-darwin-arm64/SysMocap.app'
    }
  ],
  background: '/Users/xianfei/Documents/GitHub/SysMocap/icons/dmgbg.png',
  // icon: '/Users/xianfei/Documents/GitHub/SysMocap/icons/sysmocap.icns',
  'icon-size': 80
};

// 获取当前目录
const currentDir = process.cwd();

// 替换路径函数
function replacePath(obj, oldPath, newPath) {
  for (let key in obj) {
    if (typeof obj[key] === 'string' && obj[key].includes(oldPath)) {
      obj[key] = obj[key].replace(oldPath, newPath);
    } else if (typeof obj[key] === 'object') {
      replacePath(obj[key], oldPath, newPath);
    }
  }
}

console.log(config);

// 替换路径
replacePath(config, '/Users/xianfei/Documents/GitHub/SysMocap', currentDir);

// 输出新的配置对象
const outputPath = path.join(currentDir, 'dmgcfg.json');
fs.writeFileSync(outputPath, JSON.stringify(config));