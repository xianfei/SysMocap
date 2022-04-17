这是一个免费且开源的自由软件。https://github.com/xianfei/SysMocap

# 程序介绍

**注意：当前版本为预览版，有大量未完工之处**

这是一个带有**视频驱动的实时动作捕捉系统**及**虚拟形象实时 3D 渲染程序**的软件，安装方便简单易上手，可用于虚拟主播、动画制作等用途。

# 导入模型

此系统支持导入 VRM、glb/glTF、FBX 模型文件。其中 VRM 模型文件规定其必须自带标准的人体骨骼架构，所以无特殊要求。glb/glTF、FBX 模型文件应包含骨骼信息，且骨骼节点建议按照下文中**使用 Blender 创建形象**所提及的骨骼命名方式（这样不需要重新映射）。

### 从 VRoidHub 获取

TODO: 待添加使用说明

### 从 Mixamo 获取

TODO: 待添加使用说明

### 使用 VRoidStudio 创建

TODO: 待添加使用说明

### 使用 Blender 创建

TODO: 待添加使用说明

# 动作数据转发

TODO: 待添加使用说明

### 使用 OBS 进行直播

TODO: 待添加使用说明

# 开源库

### 动作捕捉

视频驱动的动作捕捉技术采用 BlazePose & GHUM 算法。

卷积神经网络模型：[MediaPipe BlazePose GHUM 3D](../pdfs/pose_model_card.pdf)

开源库：

-   Google Mediapipe: https://google.github.io/mediapipe/

### 3D 模型渲染

开源库：

-   ThreeJS: JavaScript 3D Library https://threejs.org/

-   @pixiv/three-vrm: VRM 解析库 https://github.com/pixiv/three-vrm

### UI 技术架构

GUI 基于 fxDrawer 技术构建，使用 Web 前端技术。

开源库：

-   fxDrawer: 简单易用的跨平台绘图器/交互式图形库 https://github.com/xianfei/fxdrawer

-   Electron with Node.js: https://www.electronjs.org/

-   MDUI: Material Design 样式的前端框架 https://www.mdui.org/

-   Vue: 渐进式 JavaScript 框架 https://cn.vuejs.org/

> <span>该项目GUI部分基于前端技术构建<br>using Node.js <span id="node-version"></span>, Chromium <span id="chrome-version"></span>, and Electron <span id="electron-version"></span>.</span>

Powered by:

![](img/icons.png)

Copyright © 2021-2022 Xianfei. All rights reserved.
