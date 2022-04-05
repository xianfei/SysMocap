# SysMocap

A real-time video-based motion capture system for virtual character rendering.

## Required Skeleton Node in glTF/glb Model File for Macap:

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

## Development progress

### To-Do

- [x] Settings page and global settings utils
 
- [ ] Add play/pause button and progress bar when mocap from video 
 
- [ ] Support bones binding for glTF/glb

- [ ] Support rendering glTF/glb model
 
- [ ] Support binding when bones' name is non-uniformed
 
- [ ] Model library add user's custom 3D model
 
- [ ] Live plug-in / interface for Open Broadcast Software
 
- [ ] Output video ( using such as libffmpeg )
 
- [ ] Support per-frame rendering without drop frame
 
- [ ] Support c-s architecture for online video mocap ( on cloud )
 
- [ ] Support Material Designed 3 Color System
 
- [ ] Mocap data forwarding via network

- [x] Adapt for Linux and macOS 