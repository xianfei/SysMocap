<!--
  Shared 3D render stage + overlay, used by BOTH the discrete render page and the
  integrated mocap page (unifies the formerly-duplicated render UI, incl. one
  canonical loading animation). It renders the DOM the imperative avatarRenderer
  attaches three.js to (#model / #status / #background-canvas / #recording), and
  drives it from onMounted. Feed it solved frames via the exposed pushData().

  A part of SysMocap, open sourced under Mozilla Public License 2.0
  https://github.com/xianfei/SysMocap
-->
<template>
    <!-- virtual 3d model shows here (avatarRenderer attaches the WebGL canvas) -->
    <div
        id="model"
        style="
            width: 48%;
            border: solid 1px #ccc;
            border-radius: 10px;
            height: fit-content;
            top: 10px;
            left: 10px;
            overflow: hidden;
            position: fixed;
        "
    ></div>

    <!-- FPS panels (avatarRenderer appends the stats widgets here) -->
    <div id="status" style="position: absolute; bottom: 140px">
        <span style="position: absolute; left: 10px; font-size: 12px">Render</span>
        <span style="position: absolute; left: 100px; font-size: 12px">Mocap</span>
    </div>

    <!-- target framing controls -->
    <div id="controller" style="position: absolute; bottom: 95px; right: 20px">
        <div
            style="
                display: inline-block;
                margin-left: -280px;
                color: #777;
                position: absolute;
            "
        >
            <i class="mdui-icon material-icons" style="transform: scale(0.8)">videocam</i
            ><span style="font-size: 12px; margin-left: 5px"
                >{{ t.resp }} <br />{{ t.tips }}</span
            >
        </div>
        <div
            class="targetButton mdui-ripple"
            :class="{ 'mdui-color-theme': target == 'full' }"
            @click="setTarget('full')"
        >
            <div class="my-icon">
                <i
                    class="mdui-icon material-icons"
                    style="transform: scale(0.8); margin-top: -3px"
                    >accessibility</i
                >
            </div>
            <span>{{ t.fullbody }}</span>
        </div>
        <div
            class="targetButton mdui-ripple"
            :class="{ 'mdui-color-theme': target == 'half' }"
            @click="setTarget('half')"
        >
            <div class="my-icon">
                <i
                    class="mdui-icon material-icons"
                    style="transform: scale(1.2); margin-top: 3px"
                    >accessibility</i
                >
            </div>
            <span>{{ t.halfbody }}</span>
        </div>
        <div
            class="targetButton mdui-ripple"
            :class="{ 'mdui-color-theme': target == 'face' }"
            @click="setTarget('face')"
        >
            <div class="my-icon">
                <i class="mdui-icon material-icons" style="transform: scale(1.2)">person</i>
            </div>
            <span>{{ t.face }}</span>
        </div>
    </div>

    <!-- one canonical loading spinner (was duplicated/divergent across pages) -->
    <div
        v-show="loading"
        style="
            position: fixed;
            left: calc(50vw - 100px);
            bottom: 80px;
            width: 200px;
            height: 40px;
            border-radius: 20px;
            background-color: #fffe;
        "
        class="mdui-shadow-5"
    >
        <div
            class="mdui-spinner mdui-spinner-colorful"
            style="margin: 10px 15px; width: 20px; height: 20px"
        ></div>
        <span
            style="
                line-height: 40px;
                position: fixed;
                color: #555;
                font-size: 14px;
                margin-left: -3px;
            "
            >{{ t.init }}</span
        >
    </div>

    <!-- recording indicator (toggled imperatively by avatarRenderer via this id) -->
    <div
        id="recording"
        style="
            position: fixed;
            bottom: 20px;
            height: 40px;
            width: 200px;
            background-color: #a40601;
            left: calc(50% - 100px);
            border-radius: 20px;
            text-align: center;
            line-height: 40px;
            display: none;
            color: #fff;
        "
    >
        {{ t.rec }}
    </div>

    <canvas
        id="background-canvas"
        style="position: absolute; top: -99999999px; left: -9999999999px"
    ></canvas>
</template>

<script>
import { markRaw } from "vue";
import { createAvatarRenderer } from "../render/avatarRenderer.js";
const { languages } = require("../../utils/language.js");

export default {
    name: "MocapStage",
    props: {
        // globalSettings (output.antialias/showFPS, ui.language, ...)
        settings: { type: Object, required: true },
        // parsed model descriptor (path/binding/camera*)
        modelObj: { type: Object, required: true },
    },
    data() {
        return {
            target: "face",
            loading: true,
            // i18n table for the render overlay
            t: languages[this.settings.ui.language].render,
        };
    },
    mounted() {
        // avatarRenderer is imperative three.js; create it after our DOM exists
        // (it querySelects #model / #status / #background-canvas / #recording).
        // continuousData re-applies the latest frame every render tick (the
        // former per-render-frame cadence of the discrete page).
        this.avatar = markRaw(
            createAvatarRenderer({
                settings: this.settings,
                modelObj: this.modelObj,
                continuousData: () => this._lastData || null,
            })
        );
    },
    methods: {
        setTarget(target) {
            this.target = target;
            this.avatar.setTarget(target);
        },
        // feed a solved { riggedPose, riggedLeftHand, riggedRightHand, riggedFace }
        pushData(data) {
            if (this.loading) this.loading = false;
            this.avatar.tickMocapStats();
            this._lastData = data;
        },
    },
};
</script>
