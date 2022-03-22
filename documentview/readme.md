<script type="text/javascript" src="../node_modules/jquery/dist/jquery.js"></script>
<script src="./readme.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="../node_modules/mdui/dist/css/mdui.css">
<div style="font-size: 48px;color: #333;margin-top: 10px;line-height: 50px;font-family: 'DOTMATRI'">Xianfei's<span style="margin-left: 5px;margin-right: 5px;">Mocap</span>System</div>

这是一个免费且开源的自由软件。https://github.com/xianfei/SysMocap

# 程序介绍

这是一个带有**视频驱动的实时动作捕捉系统**及**虚拟形象实时3D渲染程序**的软件，安装方便简单易上手，可用于虚拟主播、动画制作等用途。

# 导入模型

此系统支持导入VRM、glb/glTF模型文件。其中VRM模型文件规定其必须自带标准的人体骨骼架构，所以无特殊要求。glb/glTF模型文件应包含骨骼信息，且骨骼节点建议按照下文中**使用Blender创建形象**所提及的骨骼命名方式（这样不需要重新映射）。

### 使用VRoidStudio创建

VRoid Studio是由pixiv开发的一款免费的3D人物建模软件。该软件使用方法十分简单，适合不熟悉3D建模的使用者。这款软件的主要功能就是通过类似绘画的方式进行人物的建模，让用户可以更加轻松地创造自己的虚拟人物（形象）。软件的操作界面也非常的简单直观，里面配备了许多预设项目和参数，让用户不需要从头开始建模，只需选择项目、组合它们并调整参数即可创建自己的角色，其中就包含了面部、发型、衣服、化妆等等可定制的参数。同时，用户能直接想画画一样直观的模拟发型，还能直接在3D模型上绘制特定的面部表情、眼睛或服装设计。此外，用户可以通过全尺寸钢笔工具绘制自己所需要的纹理，它支持数位板压力感应，用户可以直接在3D模型或UV开发上直接实时绘制纹理用来创建角色。

### 使用Blender创建


# 动作数据转发

# 开源库

### 动作捕捉

视频驱动的动作捕捉技术采用BlazePose算法。

论文：https://arxiv.org/abs/2006.10204

开源库：

- Google Mediapipe: https://google.github.io/mediapipe/

### 3D模型渲染

开源库：

- ThreeJS: JavaScript 3D Library https://threejs.org/

- @pixiv/three-vrm: VRM 解析库 https://github.com/pixiv/three-vrm

### UI技术架构

GUI基于fxDrawer技术构建，使用Web前端技术。

开源库：

- fxDrawer: 简单易用的跨平台绘图器/交互式图形库 https://github.com/xianfei/fxdrawer

- Electron with Node.js: https://www.electronjs.org/

- MDUI: Material Design 样式的前端框架 https://www.mdui.org/

- Vue: 渐进式JavaScript框架 https://cn.vuejs.org/

> <span>该项目基于纯前端技术构建<br>using Node.js <span id="node-version"></span>, Chromium <span id="chrome-version"></span>, and Electron <span id="electron-version"></span>.</span>

>大二上学期期末之前偶然想到的点子，当时刚学完Java然后感觉每门语言的图形库都不太一样好烦，而且ege这个东西太古老了做个鼠标交互以及在retina屏幕上都好难受于是打算自己开发一款图形库，毕竟是自己维护所以想到什么功能就加上了，许多功能都是受ege启发所以感觉用起来应该会和ege很像，甚至可以封装成和ege一模一样。毕竟是自己写的库不一定好用，ege也有个十多年历史了吧，如果有问题可以进行反馈（不过之后我应该要忙着考研了）。这个项目大创定级只评了C我也不知道是评委老师没看懂还是不看好这个项目，不过话说从最开始写第一版到现在已经有一年多了，大三好忙呀，各位加油喔。
>—— 计算机学院  软件工程  18级  王衔飞   2021.1

Powered by: 

![](img/icons.png)

Copyright © 2019-2021 Xianfei. All rights reserved.