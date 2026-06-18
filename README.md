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
English Version | <a href="./README.zh-cn.md">中文版本</a> 
</p>

A cross-platform real-time video-driven motion capture and 3D virtual character rendering system for VTuber/Live/AR/VR.

Available for Windows, macOS (including Apple Silicon & Intel) & Linux (source code only)

[Download Now](https://github.com/xianfei/SysMocap/releases) 

(This is a multi-language software, including English and Chinese. )

### Highlights

🌟 Beautiful GUI with Material Design 3 Color System, with Dark Mode supported.

![UI](https://user-images.githubusercontent.com/8101613/213859221-0297a443-7df3-493e-b8e0-c1b439791fcf.jpg)
![UI-dark](https://github.com/xianfei/SysMocap/assets/8101613/5a4ee656-9431-4518-b80e-d5956f8712c0)

🌟 Easy to used. You can import 3D models just with drags.

https://user-images.githubusercontent.com/8101613/167257555-8b8d4b99-f99f-4b79-8891-967b8723e3f8.mp4

🌟 Support WebXR API on Mocap Forwarding (HTTPS only)

https://user-images.githubusercontent.com/8101613/167257906-596919a5-4c0e-4795-865f-384a15c0d39f.mp4

🌟 Model viewer with bones & dressing controller

![Model viewer](https://user-images.githubusercontent.com/8101613/172905954-d77fad63-8847-4c95-831c-5d8917f6ee18.png)

🌟 Support OBS live-streaming

![OBS](https://user-images.githubusercontent.com/8101613/172906807-8ef482c2-95cc-4290-8b9b-38f2d5f7a188.jpg)

🌟 Support full-body motion capture

![Full-body](https://user-images.githubusercontent.com/8101613/171019881-8b95a1fd-c513-430e-b55e-a449a3524e7b.png)

![Full-body-animotion](https://user-images.githubusercontent.com/8101613/173759813-4f0d4540-abab-41dd-b343-5fc5b9be4840.png)

🌟 Support Auto Skeleton Detection for All VRM files (including VRM 0.x and VRM 1.0) and Mixamo Format FBX files

![fbx-mixamo-animotion](https://user-images.githubusercontent.com/8101613/173759682-f38c80f8-8c9a-407d-9cec-19a925cae1c0.png)

🌟 Support Any Skeleton Structure with Manual Mapping

![bdd-animotion](https://user-images.githubusercontent.com/8101613/173759924-cbc5cc6c-2b96-444d-a070-3d761d6e04bb.png)

🌟 You can use [VRoid Studio](https://vroid.com/en/studio) to create your avatar very easily. Supporting VRM 0.x & 1.0!

<img width="1492" alt="vroid" src="https://github.com/xianfei/SysMocap/assets/8101613/8847e960-3145-4ee5-b512-53ae8ec74901">

### More Effect Demonstration

🌟 Facial

![Facial-animotion](https://user-images.githubusercontent.com/8101613/173760130-1cac01ad-b597-438b-a7f5-eaae43ff2538.png)

🌟 Half-body

![Half-body-animotion](https://user-images.githubusercontent.com/8101613/173760381-19117cc7-5ed7-4483-a898-ca540bb67855.png)

🌟 Half-body with Hands

![Half-body with Hands animotion](https://user-images.githubusercontent.com/8101613/173760449-ad3c9c78-c309-43b7-a0bb-873f23b069ec.png)

🌟 Full-body

![Full-body-animotion](https://user-images.githubusercontent.com/8101613/173760510-0f7b2958-11c7-4c98-8950-778af2272d3f.png)

### System architecture

![System architecture](https://user-images.githubusercontent.com/8101613/173760568-a409beac-c966-43d6-a11f-11baf091e078.png)

### How to Download prebuilt package (Windows & macOS):

[Download Now](https://github.com/xianfei/SysMocap/releases)

**1. Windows Portable Version**: Simply extract the archive and run `SysMocap.exe`.

- `SysMocap-Windows-x64-<version>.7z`: Windows 64-bit version, suitable for x86_64 processors (AMD, Intel, etc.) running 64-bit Windows 10 & 11.

- `SysMocap-Windows-arm64-<version>.7z`: Windows ARM 64-bit version, suitable for ARM64 processors (such as Qualcomm Snapdragon) running 64-bit Windows 10 & 11.

**2. Windows Installer**: Double-click to install.

<img width="1317" alt="Snipaste_2024-07-07_20-56-11" src="https://github.com/xianfei/SysMocap/assets/8101613/8aa6fda0-5963-41dc-bad9-e28b6a2d7619">

- `SysMocap-Windows-x64-installer-<version>.msi`: Windows 64-bit version, suitable for x86_64 processors (AMD, Intel, etc.) running 64-bit Windows 10 & 11.

- `SysMocap-Windows-arm64-installer-<version>.msi`: Windows ARM 64-bit version, suitable for ARM64 processors (such as Qualcomm Snapdragon) running 64-bit Windows 10 & 11.

**3. macOS DMG Image**: Drag `SysMocap.app` to the Applications folder.

<img width="600" alt="Snipaste_2024-07-07_20-56-11" src="https://github.com/xianfei/SysMocap/assets/8101613/7a47820d-5d7c-421f-822e-d02bad2d6f29">


- `SysMocap-macOS-x64-<version>.dmg`: Suitable for Apple computers with Intel chips and Hackintosh devices, running macOS 10.15 or later.

- `SysMocap-macOS-arm64-<version>.dmg`: Suitable for Apple computers with M series chips (Apple Silicon).

**Note for user on macOS:**

- You need set Gatekeeper to Anywhere in System Settings (using `sudo spctl --master-disable`)
    <img width="478" alt="image" src="https://github.com/xianfei/SysMocap/assets/8101613/7b747e44-789c-4a61-83d7-c8e784a14856">

- If you got `“SysMocap” is damaged and can’t be opened. You should move it to the Trash.`
  Please run `sudo xattr -r -d com.apple.quarantine /Applications/SysMocap.app` in your terminal


### How to run from source code (need lastest Node.js):

```shell
git clone https://github.com/xianfei/SysMocap.git
cd SysMocap
npm i
npm start
```


### Ubuntu/Kubuntu (24.04) Tips:

- Lock various dependencies to their needed version for this application. For example: Vue3 is a more common version of vue to have on Kubuntu with Nvidia GPUs so locking the version for SysMocap to vue2 will prevent global variable changes from preventing vue creating the display (white screen error).
- You may need to nuke your install package.json and reinstall with your needed GPU repository and dependecies to bypass white screen errors.


#### Using Lutris to compile needed dependencies:

- Because there are an indefinate way to have your machine setup with Linux like Ubuntu/Kubuntu, Lutris on Linux ver 24+ can obtain exe installer, new winetricks, modern processes as runners like wow x86 windows runners and rebuilt ubuntu 9.
- Lutris can handle some Nvidia drivers especially intergrated GPUs and dual-GPUs so you can setup a Lutris game enviroment to run Intergrated Graphics like with MESA and a seperate game enviroment in Lutris to run the GPU for better quality tracking and output.


#### Helpful Lutris Guide:

1) Fully update your npm and nodejs by reinstalling them (do not clean these if there are vulnable dependencies because some of the SysMocap dependencies are now days vulnable)
2) Use winetricks to turn on and activate: all codex, .net data, C++ data, (your GPU specific extras), directdraw and dirc, 3D rendering services
3) Usd Lutris to add an exe -> use windows MSI installer file for the exe -> proceed to install process to setup the folders and enviroment for Lutris -> successfully exit without Launch
4) Configure File to run with machine libraries, do not disable lutris runtime, use Ubuntu 9 rebuild runners, Use no-fsync/e-sync nor DRMs, setup your needed GPU/intergrated-graphics toggles now
5) Run (it may not pull up first time, if so close with lutris then open again this time debugger should run and app should appear visible after that) -> Setup your settings and character but your cameras shouldn't work correctly -> safely exit
6) Configure file to run on compatable windows x86 or the correct bit formation for sysmocap then run as is with rest of specs
7) Run (should run on first try and debugger may run) -> use Mocap feature and enjoy




### Notice

1. HTTP & HTTPS will use **same port** in Mocap Data Forward.

### Required Skeleton Node in glTF/glb/FBX Model File for Macap:

(If not same as above, you need rebind them manually.)

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

### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=xianfei/SysMocap&type=Date)](https://star-history.com/#xianfei/SysMocap&Date)

### Improve Translate

If you want to contribute language translation, you can add translation in [utils/language.js](https://github.com/xianfei/SysMocap/blob/main/utils/language.js)

Then modify [mainview/framework.html](https://github.com/xianfei/SysMocap/blob/main/mainview/framework.html)

```html
 <div class="settings-item">
  <i class="mdui-icon material-icons" style="margin-right: 10px; margin-top: -3px">language</i>
  <span>{{language.tabSettings.ui.language}}</span>
  <select v-model="settings.ui.language" class="mdui-select" style="float: right; margin-right: 10px" id="demo-js-2">
    <option value="zh">简体中文</option>
    <option value="en">English</option>
  </select>
</div>
```

### Fonts

[Nowar Rounded](https://github.com/nowar-fonts/Nowar-Rounded) for East Asian languages (汉语、漢語、日本語、한국어)

[Quicksand](https://fonts.google.com/specimen/Quicksand) for English and etc.

### Thanks

You can see all `dependencies` in [package.json](https://github.com/xianfei/SysMocap/blob/main/package.json)

- [google/mediapipe/Holistic](https://google.github.io/mediapipe/solutions/holistic.html) for Mocap

- [kalidokit](https://github.com/yeemachine/kalidokit) for Calulate Mocap Data

- [electron](https://github.com/electron/electron) and Vue.js for GUI Framework

- [Material color utilities](https://github.com/material-foundation/material-color-utilities) for Color Picking

### Cite

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

![SysMocap](https://socialify.git.ci/xianfei/SysMocap/image?description=1&font=Jost&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2Fxianfei%2FSysMocap%2Fassets%2F8101613%2Fadca7a3c-bdb2-4bda-af26-7ef9ba218c4c&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)
