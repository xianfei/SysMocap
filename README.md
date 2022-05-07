![Snipaste_2022-05-07_13-31-46](README.assets/Snipaste_2022-05-07_13-31-46.png)

## SysMocap

A cross-platform real-time video-driven motion capture and 3D virtual character rendering system for VTuber/Live/AR/VR.

Available for Windows, macOS (packaged) & Linux (source code only)

<img src="https://github.com/xianfei/SysMocap/actions/workflows/main.yml/badge.svg"> [Download Now](https://github.com/xianfei/SysMocap/releases)

### Highlights

🌟 Beautiful GUI with Material Design 3 Color System

![image85](README.assets/image85.png)

🌟 Easy to used. You can import 3D models just with drags.

<video autoplay muted loop src="README.assets/test.mp4" data-canonical-src="README.assets/test.mp4" class="d-block rounded-bottom-2 width-fit"></video>

### Required Skeleton Node in glTF/glb Model File for Macap:

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

- [ ] Add play/pause button and progress bar when mocap from video 

- [x] Support bones binding for glTF/glb

- [x] Support rendering glTF/glb model

- [ ] Support binding when bones' name is non-uniformed

- [x] Model library add user's custom 3D model

- [x] Live plug-in / interface for Open Broadcast Software

- [ ] ~~Output video ( using such as libffmpeg )~~

- [ ] ~~Support per-frame rendering without drop frame~~

- [ ] ~~Support c-s architecture for online video mocap ( on cloud )~~

- [x] Support Material Designed 3 Color System (color picking)

- [x] Mocap data forwarding via network

- [x] Adapt for Linux and macOS 
