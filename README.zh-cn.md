![banner](https://github.com/xianfei/SysMocap/assets/8101613/58ca8670-5242-4ee4-94fe-8b1be8679843)

<h1 align="center">
  <img src="https://github.com/xianfei/SysMocap/assets/8101613/adca7a3c-bdb2-4bda-af26-7ef9ba218c4c" align="center" height="128px" width="128px">
  
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

提供用于Windows，macOS的可执行文件包(包括M系列芯片)，可在Linux上通过源代码运行

[立刻下载](https://github.com/xianfei/SysMocap/releases)

(这是一个多语言软件，支持中文和英文)

本科毕业设计作品。

### 特色

🌟 好看的用户图形界面（得益于Material Design 3自动取色系统），且支持深色模式

![UI](https://user-images.githubusercontent.com/8101613/213859221-0297a443-7df3-493e-b8e0-c1b439791fcf.jpg)
![UI-dark](https://github.com/xianfei/SysMocap/assets/8101613/5a4ee656-9431-4518-b80e-d5956f8712c0)

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

🌟 你可以使用 [VRoid Studio](https://vroid.com/en/studio) 来创作属于自己的虚拟形象并导入至该系统，同时支持VRM 0.x & 1.0！

<img width="1492" alt="vroid" src="https://github.com/xianfei/SysMocap/assets/8101613/8847e960-3145-4ee5-b512-53ae8ec74901">

### 更多效果展示

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

### 如何下载该应用程序 (Windows & macOS):

[立刻下载](https://github.com/xianfei/SysMocap/releases)

版本说明：

**Windows 免安装版本**：解压后直接运行 `SysMocap.exe` 即可

- `SysMocap-Windows-x64-<版本号>.7z`: Windows 64位版本，适用于使用x86_64处理器（AMD、Intel等）64位Windows 10 & 11操作系统

- `SysMocap-Windows-arm64-<版本号>.7z`: Windows ARM 64位版本，适用于使用arm64处理器（高通骁龙等）64位Windows 10 & 11操作系统

**Windows 安装包**：双击安装即可（安装包为英文，软件支持中文）

<img width="1317" alt="Snipaste_2024-07-07_20-56-11" src="https://github.com/xianfei/SysMocap/assets/8101613/8aa6fda0-5963-41dc-bad9-e28b6a2d7619">

- `SysMocap-Windows-x64-installer-<版本号>.msi`: Windows 64位版本，适用于使用x86_64处理器（AMD、Intel等）64位Windows 10 & 11操作系统

- `SysMocap-Windows-arm64-installer-<版本号>.msi`: Windows ARM 64位版本，适用于使用arm64处理器（高通骁龙等）64位Windows 10 & 11操作系统

**macOS DMG镜像**：拖动 `SysMocap.app` 到应用程序文件夹即可

<img width="600" alt="Snipaste_2024-07-07_20-56-11" src="https://github.com/xianfei/SysMocap/assets/8101613/7a47820d-5d7c-421f-822e-d02bad2d6f29">

- `SysMocap-macOS-x64-<版本号>.dmg`: 适用于Intel芯片的苹果电脑及黑苹果设备，macOS 10.15+操作系统

- `SysMocap-macOS-arm64-<版本号>.dmg`: 适用于使用M系列芯片（Apple Silicon）的苹果电脑

**针对macOS用户的额外说明:**

- You need set Gatekeeper to Anywhere in System Settings (在终端中执行 `sudo spctl --master-disable`)
    <img width="478" alt="image" src="https://github.com/xianfei/SysMocap/assets/8101613/7b747e44-789c-4a61-83d7-c8e784a14856">

- 如果你遇到 `“SysMocap” is damaged and can’t be opened. You should move it to the Trash.`（大概中文是 被损坏 您应该移动到废纸篓），
  请在终端中执行 `sudo xattr -r -d com.apple.quarantine /Applications/SysMocap.app` 

### 如何使用源代码运行 (需要最新版 Node.js):

```shell
git clone https://github.com/xianfei/SysMocap.git
cd SysMocap
npm i
npm start
```

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


### 引用

BibTeX:

```
@INPROCEEDINGS{9974484,
  author={Song, Wenfeng and Wang, Xianfei and Gao, Yang and Hao, Aimin and Hou, Xia},
  booktitle={2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)}, 
  title={Real-time Expressive Avatar Animation Generation based on Monocular Videos}, 
  year={2022},
  volume={},
  number={},
  pages={429-434},
  doi={10.1109/ISMAR-Adjunct57072.2022.00092}}
```

GB/T 7714 （国内高校毕业论文写这个就行）

```
Song W, Wang X, Gao Y, et al. Real-time Expressive Avatar Animation Generation based on Monocular Videos[C]//2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct). IEEE Computer Society, 2022: 429-434.
```
