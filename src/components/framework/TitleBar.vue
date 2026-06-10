<template>
        <div class="titlebar" style="height: 44px; align-content: center">
            <!-- Button for Close Window -->
            <button class="mdui-btn mdui-btn-icon" style="
                        position: fixed;
                        right: 7px;
                        top: 4.5px;
                        -webkit-app-region: no-drag;
                        z-index: 11;
                    " id="closebtn" v-show="platform!=='darwin'&&platform!=='web'"
                onclick="remote.getCurrentWindow().close()" mdui-tooltip="{content: 'Close'}">
                <i class="mdui-icon material-icons" style="font-size: 20px; margin-top: 0.5px">close</i>
            </button>
            <!-- Button for Maximize Window -->
            <button class="mdui-btn mdui-btn-icon" style="
                        position: fixed;
                        right: 52px;
                        top: 4.5px;
                        -webkit-app-region: no-drag;
                        z-index: 11;
                    " v-show="platform!=='darwin'&&platform!=='web'" id="maxbtn" mdui-tooltip="{content: 'Maximize'}"
                onclick="window.maximizeBtn()">
                <span class="material-icons-outlined" style="margin-left: 5px; margin-top: 0">
                    crop_square
                </span>
            </button>
            <!-- Button for Minimize Window -->
            <button class="mdui-btn mdui-btn-icon" style="
                        position: fixed;
                        right: 97px;
                        top: 4.5px;
                        -webkit-app-region: no-drag;
                        z-index: 11;
                    " id="minbtn" v-show="platform!=='darwin'&&platform!=='web'"
                onclick="remote.getCurrentWindow().minimize()"
                mdui-tooltip="{content: 'Minimize'}">
                <div style="
                            font-size: 18px;
                            transform: scaleX(0.7);
                            margin-top: 0;
                        ">
                    —
                </div>
            </button>
            <!-- Button for Open DevTools -->
            <button class="mdui-btn mdui-btn-icon" v-show="settings.dev.allowDevTools" style="
                        position: fixed;
                        top: 4.5px;
                        -webkit-app-region: no-drag;
                        z-index: 11;
                    " v-bind:style="{ right: platform=='darwin'?'7px':'142px'}" id="devtoolsbtn"
                onclick="remote.getCurrentWebContents().openDevTools({ mode: 'detach' })"
                mdui-tooltip="{content: 'Open DevTools'}">
                <i style="font-size: 20px; margin-top: 0" class="mdui-icon material-icons">code</i>
            </button>
            <!-- Show App Name -->
            <!-- <img src="../icons/sysmocap.ico" style="display: inline-block;width: 28px;position: fixed;top: 8px;left: 12px;" v-show="platform!='darwin'"> -->
            <div style="display: inline-block; position: relative;width: 200px;"
                v-bind:style="{ marginLeft: platform=='darwin'?'88px':'28px'}">
                <span class="text-titlebar-sysmocap">
                    SysMocap
                </span>
                <div class="titlebar-ver">
                    Beta, v{{appVersion}}
                </div>
            </div>

            <div class="clickable tab-bar">
                <!-- <div
                    class="mdui-color-theme"
                        style="
                            width: 350px;
                            top: 2.5px;
                            position: fixed;
                            left: calc(50vw - 180px);
                            filter: opacity(0.1) brightness(1.8) saturate(0.6);
                            height: 35px;
                            border-radius: 20px;
                            margin-top: 1px;
                        "
                    ></div> -->
                <input id="tabmodel" type="radio" name="tab-bar-sel" value="model" v-model="tab">
                <input id="tabrender" type="radio" name="tab-bar-sel" value="render" v-model="tab">
                <input id="tabsettings" type="radio" name="tab-bar-sel" value="settings" v-model="tab">
                <div class="tab-bar-buttons">
                    <label for="tabmodel" v-bind:class="tab=='model'?'mdui-btn select':'mdui-btn'">
                        <span class="material-icons-outlined" style="margin-top: -2px;">
                            account_balance </span><span class="tab-text" style="top: -1.5px;">{{language.titlebar.modelLib}}</span>
                    </label>
                    <label for="tabrender" v-bind:class="tab=='render'?'mdui-btn select':'mdui-btn'">
                        <i class="mdui-icon material-icons" style="margin-top: -5px;">filter_center_focus</i><span class="tab-text">{{language.titlebar.mocap}}</span>
                    </label>
                    <label for="tabsettings" v-bind:class="tab=='settings'?'mdui-btn select':'mdui-btn'">
                        <span class="material-icons-outlined"> settings </span>
                        <div style="
                                    display: inline-block;
                                    width: 8px;
                                    border-radius: 50%;
                                    height: 8px;
                                    margin-left: -13px;
                                    margin-top: 5px;
                                    background: rgb(219, 46, 46);
                                    position: absolute;
                                " v-show="hasUpdate"></div>
                        <span class="tab-text">{{language.titlebar.settings}}</span>
                    </label>
                    <div class="tab-bar-indicator"></div>
                </div>
            </div>
        </div>
</template>

<script>
import { toRefs } from "vue";
import { state } from "./store.js";
export default { name: "TitleBar", setup() { return { ...toRefs(state) }; } };
</script>
