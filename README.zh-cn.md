![banner](https://user-images.githubusercontent.com/8101613/172903631-e9610e0b-ed46-4c8c-a3f9-3a098265f820.png)

<h1 align="center">
SysMocap
</h1>

<p align="center">
<a href="https://github.com/xianfei/SysMocap/actions" target="_blank">
<img src="https://github.com/xianfei/SysMocap/actions/workflows/main.yml/badge.svg" alt="GitHub Actions" />
</a>
<a href="https://github.com/xianfei/SysMocap/releases" target="_blank">
<img src="https://badgen.net/github/release/xianfei/SysMocap?color=cyan" alt="release" />
</a>
<a href="#" target="_blank">
<img src="https://badgen.net/github/forks/xianfei/SysMocap" alt="forks" />
</a>
<a href="#" target="_blank">
<img src="https://badgen.net/github/stars/xianfei/SysMocap?color=yellow" alt="stars" />
</a>

</p>

<p align="center">
<a href="./README.md">English Version</a>  | 中文版本
</p>

跨平台的实时视频驱动动作捕捉及3D虚拟形象生成系统 for VTuber/Live/AR/VR.

提供用于Windows，macOS的可执行文件包，可在Linux上通过源代码运行

[立刻下载](https://github.com/xianfei/SysMocap/releases) (压缩包，无需安装)

(这是一个多语言软件，支持中文和英文)

本科毕业设计作品。

### 特色

🌟 好看的用户图形界面（得益于Material Design 3自动取色系统）

![GUI](https://user-images.githubusercontent.com/8101613/172905805-16c7d081-66ff-4324-b92a-4cdfa1eb2ac9.png)


🌟 简单易用，只需拖拽即可导入虚拟形象模型

https://user-images.githubusercontent.com/8101613/167257555-8b8d4b99-f99f-4b79-8891-967b8723e3f8.mp4

🌟 动作转发系统支持支持WebXR API (HTTPS only，用于VR和AR技术)

https://user-images.githubusercontent.com/8101613/167257906-596919a5-4c0e-4795-865f-384a15c0d39f.mp4

🌟 带有骨骼控制器和变装工具的模型查看器

![Model viewer](https://user-images.githubusercontent.com/8101613/172905954-d77fad63-8847-4c95-831c-5d8917f6ee18.png)

🌟 可导入至OBS进行直播使用

![OBS](https://user-images.githubusercontent.com/8101613/172906807-8ef482c2-95cc-4290-8b9b-38f2d5f7a188.jpg)

🌟 支持全身动作捕捉

![Full-body](https://user-images.githubusercontent.com/8101613/171019881-8b95a1fd-c513-430e-b55e-a449a3524e7b.png)

![Full-body-animotion](https://user-images.githubusercontent.com/8101613/173759813-4f0d4540-abab-41dd-b343-5fc5b9be4840.png)

🌟 支持自动检测骨骼类型并完成映射（ for All VRM files and Mixamo Format FBX files）

![fbx-mixamo-animotion](https://user-images.githubusercontent.com/8101613/173759682-f38c80f8-8c9a-407d-9cec-19a925cae1c0.png)

🌟 支持通过手动进行骨骼映射来驱动各种骨骼类型FBX、GLB、GLTF模型文件

![bdd-animotion](https://user-images.githubusercontent.com/8101613/173759924-cbc5cc6c-2b96-444d-a070-3d761d6e04bb.png)

🌟 无需独立显卡，甚至在八年前的老电脑上都能流畅使用 (i7-4790k/GTX770/16G RAM)

🌟 感谢 Mediapipe and Kalidokit 提供技术支持，基于Web 技术开发

## 更多效果展示

🌟 面部

![Facial-animotion](https://user-images.githubusercontent.com/8101613/173760130-1cac01ad-b597-438b-a7f5-eaae43ff2538.png)

🌟 半身

![Half-body-animotion](https://user-images.githubusercontent.com/8101613/173760381-19117cc7-5ed7-4483-a898-ca540bb67855.png)

🌟 半身与手部

![Half-body with Hands animotion](https://user-images.githubusercontent.com/8101613/173760449-ad3c9c78-c309-43b7-a0bb-873f23b069ec.png)

🌟 全身

![Full-body-animotion](https://user-images.githubusercontent.com/8101613/173760510-0f7b2958-11c7-4c98-8950-778af2272d3f.png)

### 系统架构

![System architecture](https://user-images.githubusercontent.com/8101613/173760568-a409beac-c966-43d6-a11f-11baf091e078.png)

### 如何使用

使用源代码运行 (需要最新版 Node.js):

```shell
git clone https://github.com/xianfei/SysMocap.git
cd SysMocap
npm i
npm start
```

或从Release页面下载可执行程序（仅限Windows和macOS）

### Bugs

- 如有请在issue中告知

### 注意

1. HTTP & HTTPS 在动作捕捉转发中将会使用**同一个端口**。

### 需要的骨骼节点 （glTF/glb/FBX Model File）:

(对于其他类型的骨骼，你可以在本程序中进行手动映射和坐标系转换)

- Hips (Main Node, both Position and Rotation. Ratation only for other nodes)

- Neck

- Chest

- Spine

- RightUpperArm

- RightLowerArm

- LeftUpperArm

- LeftLowerArm

- LeftUpperLeg

- LeftLowerLeg

- RightUpperLeg

- RightLowerLeg

### Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=xianfei/SysMocap&type=Date)](https://star-history.com/#xianfei/SysMocap&Date)

### 开发进度

#### To-Do

- [x] Settings page and global settings utils

- [x] Add play/pause button and progress bar when mocap from video 

- [x] Support bones binding for glTF/glb

- [x] Support rendering glTF/glb model

- [x] Support binding when bones' name is non-uniformed

- [x] Model library add user's custom 3D model

- [x] Live plug-in / interface for Open Broadcast Software

- [ ] ~~Output video ( using such as libffmpeg )~~

- [ ] ~~Support per-frame rendering without drop frame~~

- [ ] ~~Support c-s architecture for online video mocap ( on cloud )~~

- [x] Support Material Designed 3 Color System (color picking)

- [x] Mocap data forwarding via network

- [x] Adapt for Linux and macOS 
