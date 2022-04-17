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
 
- [x] Support bones binding for glTF/glb

- [x] Support rendering glTF/glb model
 
- [ ] Support binding when bones' name is non-uniformed
 
- [ ] Model library add user's custom 3D model
 
- [x] Live plug-in / interface for Open Broadcast Software
 
- [ ] ~~Output video ( using such as libffmpeg )~~
 
- [ ] ~~Support per-frame rendering without drop frame~~
 
- [ ] ~~Support c-s architecture for online video mocap ( on cloud )~~
 
- [ ] ~~Support Material Designed 3 Color System~~
 
- [x] Mocap data forwarding via network

- [x] Adapt for Linux and macOS 

Hanako
Root
VM718:1 EyeExtra
VM718:1 Face
VM718:1 Shoes
VM718:1 Body
VM718:1 Bottoms
VM718:1 Tops


Root
VM160:1 Hairs
VM160:1 secondary
VM160:1 Face
VM160:1 Body

Armature
VM244:1 morph
VM244:1 secondary
VM244:1 Ponytail
VM244:1 Tail
VM244:1 Shoes
VM244:1 Hair
VM244:1 Pants
VM244:1 Cats_ear
VM244:1 Body
VM244:1 Hoodie
VM244:1 Body2

Root
VM376:1 Hairs
VM376:1 secondary
VM376:1 Face
VM376:1 Body