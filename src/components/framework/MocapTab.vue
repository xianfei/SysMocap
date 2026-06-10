<template>
            <div v-show="tab=='render'">
                <div style="width: 750px; margin: auto">
                    {{language.tabMocap.chooseModel}}<select class="mdui-select" id="demo-js" v-model="selectModel" style="padding-left: 8px;width: 220px;font-size: 14px;">
                        <optgroup v-bind:label="language.tabModelLib.userModel">
                            <option v-for="model in userModels" v-bind:value="JSON.stringify(model)">
                                {{model.name}}
                            </option>
                        </optgroup>
                        <optgroup v-bind:label="language.tabModelLib.buildinModel">
                            <option v-for="model in builtIn" v-bind:value="JSON.stringify(model)">
                                {{model.name}}
                            </option>
                        </optgroup>
                    </select>
                    <span style="margin-left: 60px">{{language.tabMocap.dataSource}}</span>

                    <select class="mdui-select" id="demo-js-4" v-model="videoSource" style="width: 120px;font-size: 14px;padding-left: 8px;">
                        <option value="camera">{{language.tabMocap.camera}}</option>
                        <option value="file">{{language.tabMocap.videoFile}}</option>
                    </select>
                    
                    <span style="margin-left: 70px"></span>
                    <button class="mdui-btn xf-button" onclick="window.startMocap(this)" style="width: 120px;padding-right: 20px;">
                        <i class="mdui-icon material-icons">play_arrow</i>{{language.tabMocap.start}}
                    </button>
                    

                    
                    <div style="margin-top: 10px" v-show="videoSource == 'file'">
                        <button class="mdui-btn xf-button" id="chooseFile">
                            {{language.tabMocap.chooseVideo}}
                        </button>
                        <span style="margin-left: 10px">{{language.tabMocap.choosedVideo +
                            (videoPath==''?language.tabMocap.unchoosed:videoPath)}}</span>
                    </div>
                </div>
                <iframe id="foo" src="about:blank" style="
                            width: calc(100vw - 40px);
                            height: calc((100vw - 40px) * 10 / 32 + 120px);
                            margin-top: 20px;
                            border: none;
                        ">
                </iframe>
            </div>
</template>

<script>
import { toRefs } from "vue";
import { state } from "./store.js";
export default { name: "MocapTab", setup() { return { ...toRefs(state) }; } };
</script>
