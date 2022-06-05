![Snipaste_2022-05-07_13-31-46](README.assets/Snipaste_2022-05-07_13-31-46.png)

<h1 align="center">
SysMocap
</h1>

<p align="center">
<a href="https://github.com/xianfei/SysMocap/actions" target="_blank">
<img src="https://github.com/xianfei/SysMocap/actions/workflows/main.yml/badge.svg" alt="GitHub Actions" />
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

![image85](README.assets/image85.png)

🌟 Easy to used. You can import 3D models just with drags.

https://user-images.githubusercontent.com/8101613/167257555-8b8d4b99-f99f-4b79-8891-967b8723e3f8.mp4

🌟 Support WebXR API on Mocap Forwarding (HTTPS only)

https://user-images.githubusercontent.com/8101613/167257906-596919a5-4c0e-4795-865f-384a15c0d39f.mp4

🌟 Model viewer with bones & dressing controller

![WX20220507-222225@2x](README.assets/WX20220507-222225@2x.png)

🌟 Support OBS live-streaming

![WechatIMG21](README.assets/WechatIMG21.jpeg)

🌟 Support full-body motion capture

![Screen Shot 2022-05-23 at 00 31 27](https://user-images.githubusercontent.com/8101613/171019881-8b95a1fd-c513-430e-b55e-a449a3524e7b.png)

![10](README.assets/10.webp)

🌟 Support Auto Skeleton Detection for All VRM files and Mixamo Format FBX files

![4](README.assets/4.webp)

🌟 Support Any Skeleton Structure with Manual Mapping

![5](README.assets/5.webp)

🌟 Does not require a discrete graphics card and runs smoothly even on eight-year-old computers (i7-4790k/GTX770/16G RAM)

🌟 Powered by Mediapipe and Kalidokit with Web Technologies

### More Effect Demonstration

🌟 Facial

![9](README.assets/9.webp)

🌟 Half-body

![7](README.assets/7.webp)

🌟 Half-body with Hands

![6](README.assets/6.webp)

🌟 Full-body

![2](README.assets/2.webp)

![1](README.assets/1.webp)

### System architecture

![WX20220507-222732@2x](README.assets/WX20220507-222732@2x.png)

### How to use

Run on your computer from source code (need lastest Node.js):

```shell
git clone https://github.com/xianfei/SysMocap.git
cd SysMocap
npm i
npm start
```

### Bugs

1. ~~On Windows platform, "Use Discrete Graphics on Dual GPU Laptop" and "Mocap Data Forward" can not use at same time.~~

2. Camera controller only support VRM

3. Forwarding only support VRM

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
