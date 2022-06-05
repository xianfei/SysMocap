![Snipaste_2022-05-07_13-31-46](README.assets/Snipaste_2022-05-07_13-31-46.png)

## SysMocap

<img src="https://github.com/xianfei/SysMocap/actions/workflows/main.yml/badge.svg">  

A cross-platform real-time video-driven motion capture and 3D virtual character rendering system for VTuber/Live/AR/VR.

Available for Windows, macOS (packaged) & Linux (source code only)

[Download Now](https://github.com/xianfei/SysMocap/releases) (zipped, without installation)

(This is a multi-language software, including English. )

本科毕业设计作品。点击此处阅读中文说明。(还没写 等等吧😂)

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

![10](https://user-images.githubusercontent.com/8101613/172043152-03239ea2-77a8-4a6c-bfdb-80b2b4d2d0cf.gif)

![2](https://user-images.githubusercontent.com/8101613/172043163-c60a7dce-9547-4a21-a07e-7a28c4a53021.gif)

![1](https://user-images.githubusercontent.com/8101613/172043173-9a6f6620-a3c4-433f-9a35-93b3cc3eb091.gif)

🌟 Support Auto Skeleton Detection for All VRM files and Mixamo Format FBX files

![4](https://user-images.githubusercontent.com/8101613/172043233-d09fb829-290c-466e-9f81-5c79a2c04ad4.gif)

🌟 Support Any Skeleton Structure with Manual Mapping

![5](https://user-images.githubusercontent.com/8101613/172043269-82a90435-08ca-412f-87cc-6c76b301ab09.gif)

🌟 Does not require a discrete graphics card and runs smoothly even on eight-year-old computers (i7-4790k/GTX770/16G RAM)

🌟 Powered by Mediapipe and Kalidokit with Web Technologies

![7](https://user-images.githubusercontent.com/8101613/172043337-9da13783-d8e9-4c8e-9f45-bdbe027d70d7.gif)

![9](https://user-images.githubusercontent.com/8101613/172043340-9ee27a62-8972-47ab-bfdc-38ff16fd10da.gif)

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
