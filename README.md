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
English Version | <a href="./README.zh-cn.md">中文版本</a> 
</p>

A cross-platform real-time video-driven motion capture and 3D virtual character rendering system for VTuber/Live/AR/VR.

Available for Windows, macOS (packaged) & Linux (source code only)

[Download Now](https://github.com/xianfei/SysMocap/releases) (zipped, without installation)

(This is a multi-language software, including English. )

### Highlights

🌟 Beautiful GUI with Material Design 3 Color System

![UI](https://user-images.githubusercontent.com/8101613/213859221-0297a443-7df3-493e-b8e0-c1b439791fcf.jpg)

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

🌟 Support Auto Skeleton Detection for All VRM files and Mixamo Format FBX files

![fbx-mixamo-animotion](https://user-images.githubusercontent.com/8101613/173759682-f38c80f8-8c9a-407d-9cec-19a925cae1c0.png)

🌟 Support Any Skeleton Structure with Manual Mapping

![bdd-animotion](https://user-images.githubusercontent.com/8101613/173759924-cbc5cc6c-2b96-444d-a070-3d761d6e04bb.png)

🌟 Does not require a discrete graphics card and runs smoothly even on eight-year-old computers (i7-4790k/GTX770/16G RAM)

🌟 Powered by Mediapipe and Kalidokit with Web Technologies

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

### How to use

Run on your computer from source code (need lastest Node.js):

```shell
git clone https://github.com/xianfei/SysMocap.git
cd SysMocap
npm i
npm start
```

### Bugs

- You tell me

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

### Development progress

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

### Thanks

You can see all `dependencies` in [package.json](https://github.com/xianfei/SysMocap/blob/main/package.json)

- [google/mediapipe/Holistic](https://google.github.io/mediapipe/solutions/holistic.html) for Mocap

- [kalidokit](https://github.com/yeemachine/kalidokit) for Calulate Mocap Data

- [electron](https://github.com/electron/electron) and Vue.js for GUI Framework

- [Material color utilities](https://github.com/material-foundation/material-color-utilities) for Color Picking
