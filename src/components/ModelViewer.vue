<!--
  Model viewer window: 3D preview + dressing/bone editor + JSON (binding) editor.
  A faithful SFC port of the former modelview.html inline module — its own
  three.js scene/lil-gui/svelte-jsoneditor (not the mocap stage). Launch input
  arrives via process.argv "argsData" (set by main.js additionalArguments).

  A part of SysMocap, open sourced under Mozilla Public License 2.0
  https://github.com/xianfei/SysMocap
-->
<template>
    <i
        class="mdui-icon material-icons"
        style="
            z-index: 1001;
            position: fixed;
            right: 6px;
            bottom: 6px;
            transform: scale(0.6);
            cursor: pointer;
            -webkit-app-region: no-drag;
        "
        mdui-tooltip="{content: 'Open DevTools'}"
        :style="{ color: color }"
        v-show="settings.dev.allowDevTools"
        @click="openDevTools"
        >code</i
    >
    <div
        id="model"
        style="
            top: 0;
            left: 0;
            width: calc(100vw - var(--side-bar-width));
            height: 100vh;
            background-color: #fff0;
        "
    ></div>
    <div
        style="
            position: fixed;
            left: calc(calc(50vw - var(--side-bar-width) / 2) - 60px);
            bottom: 10px;
            width: 120px;
            height: 40px;
            border-radius: 20px;
            background-color: #fffe;
        "
        class="mdui-shadow-5"
        v-show="!loaded"
    >
        <div
            class="mdui-spinner mdui-spinner-colorful"
            style="margin: 10px 15px; width: 20px; height: 20px"
        ></div>
        <span style="line-height: 40px; position: fixed; color: #555">loading</span>
    </div>
    <div
        style="
            position: fixed;
            left: calc(calc(50vw - var(--side-bar-width) / 2) - 100px);
            bottom: 10px;
            width: 200px;
            height: 40px;
            border-radius: 20px;
            background-color: #fffe;
        "
        class="mdui-shadow-5"
        v-show="failed"
    >
        <div
            style="
                margin: 8px 15px;
                width: 20px;
                height: 20px;
                color: rgb(172, 39, 39);
                display: inline-block;
            "
        >
            <i class="mdui-icon material-icons">error_outline</i>
        </div>
        <span style="line-height: 40px; position: fixed; color: rgb(172, 39, 39)">{{
            failedText
        }}</span>
    </div>
    <div
        style="
            position: fixed;
            left: calc(100vw - var(--side-bar-width));
            top: 0px;
            height: 100vh;
            width: var(--side-bar-width);
            overflow: scroll;
        "
        :style="{ backgroundColor: bgcolor }"
    >
        <div style="width: calc(100% - 50px); margin: 25px" :style="{ color: textColor }">
            <div v-show="!(showOpts || showOpts2)">
                <h1
                    style="display: inline-block; vertical-align: middle"
                    :style="{
                        color: textColor,
                        margin: '20px 0 0 0',
                        fontSize: '32px',
                        fontWeight: '600',
                    }"
                >
                    {{ model.name }}
                </h1>
                <div
                    :style="{ backgroundColor: color, color: bgcolor }"
                    style="
                        width: 42px;
                        height: 22px;
                        border-radius: 5px;
                        margin-top: 26px;
                        font-size: 14px;
                        line-height: 22px;
                        text-align: center;
                        font-weight: 600;
                        display: inline-block;
                        bottom: 5px;
                        vertical-align: middle;
                        margin-left: 5px;
                    "
                >
                    {{ modeltype.toUpperCase() }}
                </div>
                <div style="width: 100%; margin-top: 20px; display: none">
                    <div
                        style="
                            width: 30vw;
                            height: 15vw;
                            margin: auto;
                            border-radius: 20px;
                            overflow: hidden;
                            outline-width: 3px;
                            outline-style: solid;
                            outline-offset: 2px;
                        "
                        :style="{ outlineColor: color }"
                    >
                        <img
                            :src="resolveModelPath(model.picBg)"
                            style="object-fit: cover; height: 100%; width: 100%"
                        />
                    </div>
                </div>
                <ul class="mdui-list" style="margin-top: 20px">
                    <li class="mdui-list-item mdui-ripple" @click="toggleSkeleton">
                        <i class="mdui-icon material-icons">device_hub</i>
                        <div class="mdui-list-item-content" style="margin-left: 30px">
                            {{
                                showSketelon
                                    ? languages.modelVierer.hideSketelon
                                    : languages.modelVierer.showSketelon
                            }}
                        </div>
                    </li>
                    <li class="mdui-list-item mdui-ripple" @click="showOpts = true">
                        <i class="mdui-icon material-icons">color_lens</i>
                        <div class="mdui-list-item-content" style="margin-left: 30px">
                            <span v-show="model.type == 'vrm'">{{
                                languages.modelVierer.modifyDecoration
                            }}</span>
                            <span v-show="model.type != 'vrm'">{{
                                languages.modelVierer.changeBonesBinding
                            }}</span>
                        </div>
                    </li>
                    <li class="mdui-list-item mdui-ripple" @click="showOpts2 = true">
                        <i class="mdui-icon material-icons">mode_edit</i>
                        <div class="mdui-list-item-content" style="margin-left: 30px">
                            {{ languages.modelVierer.edit }}
                        </div>
                    </li>
                </ul>
            </div>
            <div
                style="
                    margin-left: -25px;
                    position: fixed;
                    padding-top: 20px;
                    top: 0px;
                    width: 100%;
                    z-index: 1000;
                "
                :style="{ backgroundColor: bgcolor }"
            >
                <li
                    class="mdui-list-item mdui-ripple"
                    v-show="showOpts || showOpts2"
                    @click="
                        showOpts = showOpts2 = false;
                        saveJson();
                    "
                    style="width: 175px"
                >
                    <i class="mdui-icon material-icons">arrow_back</i>
                    <div class="mdui-list-item-content" style="margin-left: 20px">
                        {{ languages.modelVierer.back }}
                    </div>
                </li>
            </div>

            <div v-if="model.type == 'vrm'" v-show="showOpts" style="margin-top: 80px">
                <ul class="mdui-list" style="margin-top: 20px">
                    <li
                        v-for="(k, i) in Object.keys(model.accessories)"
                        :key="k"
                        class="mdui-list-item mdui-ripple"
                        @click="toggleShow(model.accessories[k], $event)"
                    >
                        <i class="mdui-icon material-icons"> format_paint</i>
                        <div class="mdui-list-item-content" style="margin-left: 30px">
                            {{ languages.modelVierer.hide + " " + k }}
                        </div>
                    </li>
                </ul>
            </div>

            <div v-if="model.type != 'vrm'" v-show="showOpts" style="margin-top: 80px">
                <div
                    v-for="b in ['Hips','Chest','Neck','Spine','RightUpperArm','RightLowerArm','LeftUpperArm','LeftLowerArm','LeftUpperLeg','LeftLowerLeg','RightUpperLeg','RightLowerLeg']"
                    :key="b"
                    style="margin-top: 10px; font-size: 16px"
                >
                    <span style="line-height: 36px">{{ b }}: </span>
                    <select
                        class="mdui-select"
                        style="float: right; margin-right: 10px; max-width: calc(100% - 20px)"
                        :style="{ color: color }"
                    >
                        <option value="-1">None</option>
                        <option v-for="bb in bones" :key="bb.index" :value="bb.index">
                            {{ bb.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div
            v-show="showOpts2"
            id="jsoneditor"
            style="
                position: fixed;
                top: 70px;
                background: #000;
                height: calc(100vh - 71px);
                z-index: 1000;
                width: calc(var(--side-bar-width) - 1px);
            "
        ></div>
    </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
// the prebuilt bundle (the package main is Svelte source Rolldown can't parse)
import { JSONEditor } from "../../node_modules/svelte-jsoneditor/dist/jsoneditor.js";
import { resolveModelPath } from "../render/modelPath.js";

const { languages } = require("../../utils/language.js");
const { globalSettings, removeUserModels, addUserModels } = require("../../utils/setting.js");

// launch input passed via webPreferences.additionalArguments (process.argv)
let args;
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == "argsData") {
        args = JSON.parse(process.argv[i + 1]);
    }
}

// When Liquid Glass is active (decided by main.js), the window itself provides the
// glass, so make the page fully transparent — overriding the frosted semi-white body
// background set !important in modelview.html's <style>. Otherwise keep that frosted
// background.
if (args && args.liquidGlassActive) {
    document.body.style.setProperty("background-color", "transparent", "important");
}

export default {
    name: "ModelViewer",
    data() {
        return {
            model: args.model,
            color: args.color,
            bgcolor: args.backgroundColor,
            textColor: args.textColor ? args.textColor : args.color,
            showSketelon: false,
            bones: [],
            showOpts: false,
            showOpts2: false,
            languages: languages[globalSettings.ui.language],
            settings: globalSettings,
            loaded: false,
            failed: false,
            modeltype: args.model.type,
            failedText: "加载失败",
        };
    },
    mounted() {
        window.document.title = args.model.name;
        window.app = this; // legacy global referenced in a few places

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.shadowMapEnabled = true;
        const modelEl = document.querySelector("#model");
        renderer.setSize(modelEl.clientWidth, modelEl.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        modelEl.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(
            30.0,
            modelEl.clientWidth / modelEl.clientHeight,
            0.1,
            20.0
        );
        camera.position.set(0.0, 1.0, 5.0);
        this._camera = camera;

        window.addEventListener("resize", () => {
            camera.aspect = modelEl.clientWidth / modelEl.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(modelEl.clientWidth, modelEl.clientHeight);
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.screenSpacePanning = true;
        controls.target.set(0.0, 1.0, 0.0);
        controls.update();

        const scene = new THREE.Scene();
        this._scene = scene;
        let skeletonHelper;
        let avatar = null;

        const light0 = new THREE.DirectionalLight(0xffffff, Math.PI);
        light0.position.set(1.0, 1.0, 1.0).normalize();
        scene.add(light0);

        if (args.model.type == "fbx") {
            const lightBoosterAmbient = this.model.lightAmbient || 1.0;
            const lightBoosterDirectionalHigh = this.model.lightDirectionalHigh || 1.0;
            const lightBoosterDirectional = this.model.lightDirectional || 0.0;
            const light = new THREE.AmbientLight(0xffffff, 0.8 * lightBoosterAmbient);
            light.position.set(10.0, 10.0, 10.0).normalize();
            scene.add(light);
            const light2 = new THREE.DirectionalLight(0xffffff, 1 * lightBoosterDirectionalHigh);
            light2.position.set(0, 3, 2);
            light2.castShadow = true;
            scene.add(light2);
            const light3 = new THREE.DirectionalLight(0xffffff, 1 * lightBoosterDirectional);
            light3.position.set(0, 0, 2);
            light3.castShadow = true;
            scene.add(light3);
        }

        let loader;
        if (args.model.type == "fbx") {
            loader = new FBXLoader();
        } else {
            loader = new GLTFLoader();
            loader.register((parser) => new VRMLoaderPlugin(parser));
        }
        loader.crossOrigin = "anonymous";
        loader.load(
            resolveModelPath(args.model.path),
            (gltf) => {
                let model = null;
                if (args.model.type == "fbx") {
                    model = gltf;
                    gltf.scale.set(0.01, 0.01, 0.01);
                } else {
                    model = gltf.scene;
                }
                skeletonHelper = new THREE.SkeletonHelper(model);
                skeletonHelper.visible = false;
                skeletonHelper.material.linewidth = 30;
                scene.add(skeletonHelper);

                if (args.model.type == "vrm") {
                    VRMUtils.removeUnnecessaryVertices(model);
                    VRMUtils.removeUnnecessaryJoints(model);
                    const vrm = gltf.userData.vrm;
                    scene.add(vrm.scene);
                    avatar = vrm.scene;
                    this.loaded = true;
                    window.vrm = vrm;
                    if (vrm.meta.metaVersion === "0") {
                        vrm.scene.rotation.y = Math.PI;
                    } else {
                        this.modeltype += vrm.meta.metaVersion;
                    }
                } else {
                    model.castShadow = true;
                    scene.add(model);
                    avatar = model;
                    this.loaded = true;
                }

                this.setupDatGui(skeletonHelper, avatar);
                const bones = [];
                for (var i in skeletonHelper.bones)
                    bones.push({ index: i, name: skeletonHelper.bones[i].name });
                this.bones = bones;
                mdui.mutation();
            },
            (progress) =>
                console.log("Loading model...", 100.0 * (progress.loaded / progress.total), "%"),
            (error) => {
                this.failed = this.loaded = true;
                console.log(error);
            }
        );

        const gridHelper = new THREE.GridHelper(10, 10);
        gridHelper.receiveShadow = true;
        scene.add(gridHelper);
        scene.add(new THREE.AxesHelper(5));

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const gui = new lil.GUI();
        gui.hide();
        this._gui = gui;
        window.gui = gui;

        // keyboard control of camera position
        document.addEventListener("keydown", (event) => {
            const x = camera.position.x;
            const y = camera.position.y;
            const z = camera.position.z;
            const step = 0.03;
            switch (event.key) {
                case "d":
                case "ArrowRight":
                    camera.position.set(x + step, y, z);
                    break;
                case "a":
                case "ArrowLeft":
                    camera.position.set(x - step, y, z);
                    break;
                case "w":
                case "ArrowUp":
                    camera.position.set(x, y + step, z);
                    break;
                case "s":
                case "ArrowDown":
                    camera.position.set(x, y - step, z);
                    break;
            }
        });

        // JSON (model/binding) editor
        let content = { text: undefined, json: args.model };
        const target = document.getElementById("jsoneditor");
        target.style.setProperty("--jse-theme-color", this.bgcolor);
        target.style.setProperty("--jse-theme-color-highlight", "#00000015");
        target.style.setProperty("--jse-menu-color", this.color);
        const editor = new JSONEditor({
            target,
            props: {
                content,
                onChange: (updatedContent) => {
                    content = updatedContent;
                },
            },
        });
        this._editor = editor;
    },
    methods: {
        resolveModelPath,
        setupDatGui(skeletonHelper, avatar) {
            const gui = this._gui;
            let folder = gui.addFolder("Skeletons");
            folder.add(skeletonHelper, "visible");
            setTimeout(() => {
                folder.add(avatar, "visible");
                folder.controllers[1].name("Show Avatar");
            }, 5000);
            folder.controllers[0].name("Show Skeleton");
            const bones = skeletonHelper.bones;
            for (let i = 0; i < bones.length; i++) {
                const bone = bones[i];
                folder = gui.addFolder("Bone: " + bone.name);
                if (i == 0) {
                    folder.add(bone.position, "x", -10 + bone.position.x, 10 + bone.position.x);
                    folder.add(bone.position, "y", -10 + bone.position.y, 10 + bone.position.y);
                    folder.add(bone.position, "z", -10 + bone.position.z, 10 + bone.position.z);
                }
                folder.add(bone.rotation, "x", -Math.PI, Math.PI);
                folder.add(bone.rotation, "y", -Math.PI, Math.PI);
                folder.add(bone.rotation, "z", -Math.PI, Math.PI);
                if (i == 0) {
                    folder.controllers[0].name("position.x");
                    folder.controllers[1].name("position.y");
                    folder.controllers[2].name("position.z");
                    folder.controllers[3].name("rotation.x");
                    folder.controllers[4].name("rotation.y");
                    folder.controllers[5].name("rotation.z");
                } else {
                    folder.controllers[0].name("rotation.x");
                    folder.controllers[1].name("rotation.y");
                    folder.controllers[2].name("rotation.z");
                }
            }
            const guiroot = document.querySelector(".lil-gui.root");
            guiroot.style.left =
                "calc(calc(100vw - var(--side-bar-width)) + 19.1vw - 122px)";
            guiroot.style.webkitAppRegion = "no-drag";
            guiroot.style.zIndex = "10000";
        },
        openDevTools() {
            require("@electron/remote").getCurrentWebContents().openDevTools({ mode: "detach" });
        },
        toggleSkeleton() {
            this.showSketelon ? this._gui.hide() : this._gui.show();
            this.showSketelon = !this.showSketelon;
        },
        toggleShow(k, ev) {
            const obj = ev.currentTarget;
            const content = obj.querySelector(".mdui-list-item-content");
            if (content.innerText.includes(this.languages.modelVierer.hide)) {
                this._scene.getObjectByName(k).visible = false;
                content.innerText =
                    this.languages.modelVierer.show +
                    content.innerText.substr(this.languages.modelVierer.hide.length);
            } else {
                this._scene.getObjectByName(k).visible = true;
                content.innerText =
                    this.languages.modelVierer.hide +
                    content.innerText.substr(this.languages.modelVierer.show.length);
            }
        },
        saveJson() {
            const e = this._editor;
            const jsonChanged = e.get().json ? e.get().json : JSON.parse(e.get().text);
            if (JSON.stringify(args.model) == JSON.stringify(jsonChanged)) return;
            if (this.model.isBuildIn) {
                this.failedText = "内建模型不能修改！";
                this.failed = true;
                return;
            }
            removeUserModels(this.model.name);
            addUserModels(jsonChanged);
            this.model = jsonChanged;
        },
    },
};
</script>
