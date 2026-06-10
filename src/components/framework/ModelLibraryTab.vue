<template>
            <div v-show="tab=='model'">
                <div id="rightclick" style="
                            display: none;
                            position: fixed;
                            top: 0;
                            right: 0;
                            height: 100%;
                            width: 100%;
                            background: #fff0;
                            z-index: 999;
                        "></div>
                <div id="rightmenu" class="card" style="transform: scaleY(0)">
                    <div id="btnopen" class="carditem">
                        <i class="mdui-icon material-icons cardicon">open_in_new</i>{{language.tabModelLib.open}}
                    </div>
                    <div class="line2"></div>
                    <div id="btndefault" class="carditem">
                        <i class="mdui-icon material-icons cardicon">check</i>{{language.tabModelLib.setAsDefault}}
                    </div>
                    <div class="line2" id="removeline0"></div>
                    <div id="btnshow" class="carditem">
                        <i
                            class="mdui-icon material-icons cardicon">folder_open</i>{{language.tabModelLib.showInFinder}}
                    </div>
                    <div class="line2" id="removeline1"></div>
                    <div id="btnremove" class="carditem">
                        <i class="mdui-icon material-icons cardicon">delete</i>{{language.tabModelLib.remove}}
                    </div>
                </div>
                <!------- User Model ------->
                <h1 style="display: inline-block; vertical-align: middle;color: var(--md-sys-color-primary)">
                    {{language.tabModelLib.userModel}}
                </h1>
                <button class="mdui-btn xf-button" style="
                            display: inline-block;
                            margin: 10px;
                            height: 30px;
                            line-height: 30px;
                            padding-right: 20px;
                        "
                    v-on:click="showModelImporter = !showModelImporter;modelImporterName=modelImporterType=modelImporterImg=''">
                    <i
                        class="mdui-icon material-icons">{{showModelImporter?'expand_less':'add'}}</i>{{showModelImporter?language.tabModelLib.optHide:language.tabModelLib.optAdd}}
                </button>
                <!------- Model Importer ------->
                <div class="model-importer"
                    v-bind:style="{height:showModelImporter?'130px':'0px',marginBottom:showModelImporter?'10px':'0px'}">
                    <div id="drag-area" style="background-size: cover"
                        v-bind:style="{width:showModelImporter==2?'calc(45% - 18px)':'calc(100% - 36px)',background:modelImporterImg==''?'':'url('+modelImporterImg+') no-repeat center center',backgroundSize:modelImporterImg==''?'':'cover'}">
                        <div
                            v-bind:style="{marginLeft:showModelImporter==2?'8px':'40px',marginTop:showModelImporter==2?'38px':'20px'}">
                            <p v-show="showModelImporter==1">
                                {{language.tabModelLib.dragModel}}
                            </p>
                            <p v-show="showModelImporter==1">
                                {{language.tabModelLib.suppotFormat}}
                                <a href="#" onclick="ipcRenderer.send('openDocument')">{{language.tabModelLib.here}}</a>
                            </p>
                            <p v-show="showModelImporter==2&&modelImporterImg==''">
                                {{language.tabModelLib.dragImage}}
                            </p>
                        </div>
                    </div>
                    <div class="modelInfo">
                        <label>Model Name</label>
                        <input class="xf-input" type="text" v-model="modelImporterName" />
                        <button class="mdui-btn xf-button-2" style="
                                    height: 24px !important;
                                    line-height: 24px !important;
                                    width: 80px;
                                    font-size: 12px;
                                    margin-top: 20px;
                                    margin-left: 130px;
                                " onclick="window.addUserModels()">
                            <i class="mdui-icon material-icons"
                                style="font-size: 18px; margin-left: -8px">check</i>finish
                        </button>
                    </div>
                </div>
                <!-- End Model Importer -->
                <div class="flex-container">
                    <div v-if="settings.ui.useNewModelUI" class="model-item-new user-model" v-for="model in userModels"
                        v-on:click="require('electron').ipcRenderer.send('openModelViewer', {model:toRaw(model),backgroundColor:$event.currentTarget.style.getPropertyValue('--md-sys-color-primary-container')?$event.currentTarget.style.getPropertyValue('--md-sys-color-primary-container'):document.body.style.getPropertyValue('--md-sys-color-primary-container'),color:$event.currentTarget.style.getPropertyValue('--md-sys-color-primary')?$event.currentTarget.style.getPropertyValue('--md-sys-color-primary'):document.body.style.getPropertyValue('--md-sys-color-primary'),textColor:$event.currentTarget.style.getPropertyValue('--md-sys-color-on-primary-container')?$event.currentTarget.style.getPropertyValue('--md-sys-color-on-primary-container'):document.body.style.getPropertyValue('--md-sys-color-on-primary-container'),useGlass:settings.ui.useGlass,useLiquidGlass:settings.ui.useLiquidGlass});">
                        <img class="my-img" v-bind:src="resolveModelPath(model.picBg)" />
                        <i class="mdui-icon material-icons" v-show="model.picBg==''">
                            person_outline</i>
                        <div class="desc">
                            <h2>{{model.name}}</h2>
                            <div class="type">
                                {{model.type.toUpperCase()}}
                            </div>
                            <div style="
                                        margin-left: calc(100% - 187px);
                                        text-align: left;
                                        margin-top: -17px;
                                        color: var(--md-sys-color-primary);
                                    " v-show="selectModel==JSON.stringify(model)">
                                <span class="material-icons-outlined" style="font-size: 16px"
                                    mdui-tooltip="{content: '默认使用的形象'}">
                                    done
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-for="i in [1,2,3,4,5,6]" class="model-item-new" style="
                                visibility: hidden;
                                height: 1px;
                                margin-top: 0;
                                margin-bottom: 0;
                            "></div>
                </div>
                <!------- Build-in Model ------->
                <h1 style="color: var(--md-sys-color-primary)">
                    {{language.tabModelLib.buildinModel}}
                </h1>
                <div class="flex-container" id="userModels">
                    <div v-if="settings.ui.useNewModelUI" class="model-item-new buildin-model" v-for="model in builtIn"
                        v-on:click="require('electron').ipcRenderer.send('openModelViewer', {model:toRaw(model),backgroundColor:$event.currentTarget.style.getPropertyValue('--md-sys-color-primary-container')?$event.currentTarget.style.getPropertyValue('--md-sys-color-primary-container'):document.body.style.getPropertyValue('--md-sys-color-primary-container'),color:$event.currentTarget.style.getPropertyValue('--md-sys-color-primary')?$event.currentTarget.style.getPropertyValue('--md-sys-color-primary'):document.body.style.getPropertyValue('--md-sys-color-primary'),textColor:$event.currentTarget.style.getPropertyValue('--md-sys-color-on-primary-container')?$event.currentTarget.style.getPropertyValue('--md-sys-color-on-primary-container'):document.body.style.getPropertyValue('--md-sys-color-on-primary-container'),useGlass:settings.ui.useGlass,useLiquidGlass:settings.ui.useLiquidGlass});">
                        <img class="my-img" v-bind:src="resolveModelPath(model.picBg)" />
                        <div class="desc">
                            <h2>{{model.name}}</h2>
                            <div class="type">
                                {{model.type.toUpperCase()}}
                            </div>
                            <div style="
                                        margin-left: calc(100% - 187px);
                                        text-align: left;
                                        margin-top: -17px;
                                        color: var(--md-sys-color-primary);
                                    " v-show="selectModel==JSON.stringify(model)">
                                <span class="material-icons-outlined" style="font-size: 16px"
                                    mdui-tooltip="{content: '默认使用的形象'}">
                                    done
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-if="false" v-for="model in builtIn" class="mdui-ripple model-item"
                        v-on:click="require('electron').ipcRenderer.send('openModelViewer', {model:toRaw(model),backgroundColor:bg,color:'#fff',useGlass:settings.ui.useGlass,useLiquidGlass:settings.ui.useLiquidGlass});">
                        <img v-bind:src="model.pic" style="
                                    width: 90px;
                                    height: 100px;
                                    object-fit: contain;
                                " />
                        <div style="margin-top: -110px; margin-left: 100px">
                            <h1>{{model.name}}</h1>
                            <div class="mdui-color-theme" style="
                                        width: 35px;
                                        height: 18px;
                                        border-radius: 5px;
                                        margin-top: -8px;
                                        font-size: 10px;
                                        line-height: 18px;
                                        text-align: center;
                                        filter: opacity(0.7);
                                    ">
                                {{model.type.toUpperCase()}}
                            </div>
                        </div>
                    </div>
                    <div v-for="i in [1,2,3,4,5,6]" class="model-item-new" style="visibility: hidden; height: 1px">
                    </div>
                    <div v-for="i in [1,2,3,4,5,6]" class="model-item" style="visibility: hidden; height: 1px"></div>
                </div>
            </div>
</template>

<script>
import { computed, toRefs } from "vue";
import { state } from "./store.js";
import { resolveModelPath } from "../../render/modelPath.js";
export default {
    name: "ModelLibraryTab",
    setup() {
        // referenced only by a dead v-if="false" block; lazy so it never runs
        const bg = computed(() =>
            window.getComputedStyle(document.querySelector(".mdui-color-theme"), null).backgroundColor
        );
        return { ...toRefs(state), bg, resolveModelPath };
    },
};
</script>
