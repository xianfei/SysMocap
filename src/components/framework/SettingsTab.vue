<template>
            <div v-show="tab=='settings'" style="max-width: 550px; margin: auto">
                <div class="text-titlebar-sysmocap" style="font-size: 32px;-webkit-user-select: text; margin-top: 15px">
                    SysMocap<span style="margin-left: 5px; font-size: 18px;">by xianfei</span>
                </div>
                <div class="mdui-text-color-theme" style="-webkit-user-select: text;">
                    {{language.app.name}}
                </div>
                <div style="color: #555; margin-top: 20px; font-size: 14px"></div>
                <div v-bind:class="updateError?'model-importer-error':'model-importer'"
                    v-bind:style="{height:hasUpdate||updateError?'58px':checkingUpdate?'30px':'16px'}" style="
                            width: 490px;
                            padding: 15px;
                            position: relative;
                        ">
                    <span class="material-icons-outlined" style="font-size: 16px;margin-left: 10px;"
                        mdui-tooltip="{content: 'SysMocap Version'}">
                        widgets
                    </span>
                    <span style="
                                line-height: 8px;
                                top: -3px;
                                font-size: 14px;
                                position: inherit;
                                margin-left: 3px;
                            ">v{{appVersion}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" style="
                                height: 15px;
                                fill: var(--md-sys-color-on-primary-container);
                                stroke: var(
                                    --md-sys-color-on-primary-container
                                );
                                stroke-width: 0.3px;
                                margin-left: 36px;
                            " mdui-tooltip="{content: 'Electron Version'}" enable-background="new 0 0 24 24"
                        viewBox="0 0 24 24">
                        <path
                            d="M12.12 24c-1.909 0-3.607-1.754-4.661-4.812-.135-.392.073-.818.465-.953.39-.135.818.072.953.465.808 2.344 2.05 3.801 3.243 3.801.78 0 1.595-.62 2.294-1.746.219-.353.681-.46 1.033-.242.352.219.46.681.242 1.033C14.691 23.151 13.457 24 12.12 24zM16.628 17.642c-.05 0-.101-.005-.152-.016-.406-.083-.667-.48-.583-.886.275-1.337.415-2.768.415-4.251 0-5.9-2.207-10.011-4.188-10.011-.414 0-.75-.336-.75-.75s.336-.75.75-.75c3.189 0 5.688 5.056 5.688 11.511 0 1.585-.15 3.117-.446 4.554C17.289 17.397 16.976 17.642 16.628 17.642z" />
                        <path
                            d="M12.12 3.457c-.958 0-1.738-.775-1.738-1.729C10.382.775 11.162 0 12.12 0s1.738.775 1.738 1.728C13.857 2.681 13.078 3.457 12.12 3.457zM12.12 1.5c-.131 0-.238.103-.238.228 0 .252.476.252.476 0C12.357 1.603 12.251 1.5 12.12 1.5zM12.12 14.226c-.958 0-1.738-.775-1.738-1.728 0-.953.78-1.729 1.738-1.729s1.738.775 1.738 1.729C13.857 13.45 13.078 14.226 12.12 14.226zM12.12 12.269c-.131 0-.238.103-.238.229 0 .251.476.251.476 0C12.357 12.372 12.251 12.269 12.12 12.269zM19.591 13.365c-.168 0-.338-.057-.478-.172-.319-.264-.363-.737-.099-1.056 1.584-1.913 2.18-3.721 1.555-4.719-.501-.801-1.657-.99-2.539-1.008-.414-.008-.743-.351-.735-.765.008-.415.326-.732.765-.735 1.794.037 3.102.628 3.78 1.712 1.009 1.612.399 3.971-1.671 6.472C20.021 13.272 19.807 13.365 19.591 13.365zM2.738 19.108c-.25 0-.494-.125-.636-.352-.477-.762-.598-1.724-.349-2.783.616-2.626 3.384-5.723 7.224-8.081 1.56-.958 3.217-1.735 4.794-2.249.394-.128.816.087.945.481.128.394-.087.817-.481.945-1.465.477-3.012 1.203-4.473 2.1-3.458 2.124-6.029 4.928-6.549 7.145-.157.67-.104 1.224.16 1.645.22.351.113.814-.238 1.034C3.012 19.072 2.875 19.108 2.738 19.108z" />
                        <path
                            d="M2.741 20.086c-.581 0-1.15-.289-1.479-.814-.246-.392-.323-.856-.217-1.306.106-.452.383-.834.779-1.078 0 0 0 0 .001 0 .812-.498 1.883-.248 2.387.558.246.393.322.856.217 1.306-.106.452-.383.834-.78 1.078C3.367 20.003 3.052 20.086 2.741 20.086zM2.609 18.167c-.067.042-.093.1-.103.142-.009.041-.012.103.028.168.07.111.218.146.331.075.068-.042.094-.101.104-.142.01-.041.013-.103-.028-.167C2.872 18.13 2.724 18.096 2.609 18.167L2.609 18.167zM3.206 11.554c-.254 0-.502-.129-.643-.363-1.119-1.855-1.32-3.562-.565-4.805.983-1.623 3.372-2.163 6.56-1.482C8.962 4.99 9.22 5.389 9.134 5.794s-.488.663-.89.577C5.795 5.848 3.893 6.152 3.28 7.164c-.451.743-.249 1.898.567 3.253.214.354.1.815-.255 1.029C3.471 11.519 3.338 11.554 3.206 11.554zM17.819 20c-2.464 0-5.642-.97-8.795-2.846-1.33-.792-2.546-1.68-3.615-2.639-.308-.277-.334-.751-.057-1.059.275-.308.751-.334 1.059-.057.996.894 2.133 1.724 3.38 2.466 5.112 3.043 9.81 3.288 10.83 1.605.215-.355.677-.468 1.03-.252.354.215.467.676.252 1.03C21.189 19.425 19.715 20 17.819 20z" />
                        <path
                            d="M21.258,19.586c-0.304,0-0.61-0.079-0.888-0.244c0,0,0,0,0,0c-0.4-0.238-0.682-0.617-0.794-1.067c-0.112-0.448-0.041-0.913,0.199-1.309c0.493-0.813,1.562-1.078,2.38-0.59c0.4,0.238,0.682,0.617,0.794,1.067c0.112,0.449,0.042,0.914-0.198,1.309C22.424,19.289,21.848,19.586,21.258,19.586z M21.137,18.053c0.114,0.068,0.262,0.033,0.331-0.08c0.04-0.064,0.036-0.127,0.025-0.167c-0.01-0.042-0.037-0.1-0.106-0.141c-0.114-0.068-0.263-0.032-0.331,0.08c-0.04,0.065-0.036,0.127-0.025,0.167C21.042,17.954,21.068,18.012,21.137,18.053L21.137,18.053z" />
                    </svg>
                    <span style="
                                line-height: 8px;
                                top: -3px;
                                font-size: 14px;
                                position: inherit;
                                margin-left: 3px;
                            ">v{{process.versions.electron}}</span>
                    <span class="material-icons-outlined"
                        style="font-size: 16px;transform: rotate(30deg);margin-left: 36px;"
                        mdui-tooltip="{content: 'Node Version'}">
                        hexagon
                    </span>
                    <span style="
                                line-height: 8px;
                                top: -3px;
                                font-size: 14px;
                                position: inherit;
                                margin-left: 3px;
                            ">v{{process.versions.node}}</span>
                    <button v-show="!hasUpdate" onclick="window.checkUpdate()" class="mdui-btn xf-button-2" style="
                                height: 25px !important;
                                line-height: 24px !important;
                                width: 150px;
                                font-size: 12px;
                                margin-top: -5px;
                                right: 20px;
                                position: absolute;
                            ">
                        <i class="mdui-icon material-icons"
                            style="font-size: 18px; margin-left: -8px">{{isLatest?'check':'update'}}</i>
                        {{isLatest?'is latest':checkingUpdate?'checking...':'check update'}}
                    </button>
                    <div style="margin-top: 10px; position: relative" v-show="checkingUpdate">
                        <div class="mdui-progress">
                            <div class="mdui-progress-indeterminate"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px; position: relative" v-show="updateError">
                        <span class="material-icons-outlined" style="font-size: 28px">
                            error </span><span style="
                                    line-height: 8px;
                                    top: -8px;
                                    font-size: 15px;
                                    position: inherit;
                                    margin-left: 10px;
                                ">{{updateError}}</span>
                        <button onclick="window.openInGithub()" class="mdui-btn xf-button-2" style="
                                    height: 25px !important;
                                    line-height: 24px !important;
                                    width: 150px;
                                    font-size: 12px;
                                    bottom: 2px;
                                    right: 5px;
                                    position: absolute;
                                ">
                            <i class="mdui-icon material-icons"
                                style="font-size: 18px; margin-left: -8px">open_in_browser</i>
                            open in github
                        </button>
                    </div>
                    <div style="margin-top: 10px; position: relative" v-show="hasUpdate">
                        <span class="material-icons-outlined" style="font-size: 28px">
                            info </span><span style="
                                    line-height: 8px;
                                    top: -8px;
                                    font-size: 15px;
                                    position: inherit;
                                    margin-left: 10px;
                                ">Update Available: {{hasUpdate?.name}}</span>
                        <button onclick="window.openInGithub()" class="mdui-btn xf-button-2" style="
                                    height: 25px !important;
                                    line-height: 24px !important;
                                    width: 150px;
                                    font-size: 12px;
                                    bottom: 2px;
                                    right: 5px;
                                    position: absolute;
                                ">
                            <i class="mdui-icon material-icons"
                                style="font-size: 18px; margin-left: -8px">open_in_browser</i>
                            open in github
                        </button>
                    </div>
                </div>
                <div style="height: 20px"></div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><i class="mdui-icon material-icons"
                                style="margin-right: 10px; margin-top: -3px">update</i>{{language.tabSettings.disableUpdate}}</span>
                        <input type="checkbox" v-model="disableAutoUpdate" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <!-- Setting Tab: Show Document -->
                <!-- <h1 class="mdui-text-color-theme" v-show="platform!=='web'">
                    {{language.tabSettings.document.name}}
                </h1>
                <div class="settings-item" onclick="ipcRenderer.send('openDocument')" v-show="platform!=='web'">
                    <i class="mdui-icon material-icons" style="margin-right: 10px; margin-top: -3px">help_outline</i>

                    {{language.tabSettings.document.openDoc}}
                </div>
                <div class="settings-item" onclick="ipcRenderer.send('openPDF','../pdfs/bylw.pdf')">
                    <i class="mdui-icon material-icons" style="margin-right: 10px; margin-top: -3px">school</i>
                    阅读毕业设计论文
                </div> -->
                <!-- Setting Tab: UI -->
                <h1 class="mdui-text-color-theme">
                    {{language.tabSettings.ui.name}}
                </h1>
                <div class="settings-item">
                    <div style="
                                display: flex;
                                align-content: space-between;
                                justify-content: space-between;
                                width: 100%;
                            ">
                        {{language.tabSettings.ui.themeColor}}
                        <div v-for="c in ['deep-purple', 'pink','indigo','light-blue','teal','cyan','light-green','amber','orange']"
                            v-bind:class="'color-dot mdui-color-'+c+' mdui-ripple'"
                            v-on:click="settings.ui.themeColor=c"></div>
                        <div></div>
                    </div>
                </div>
                <div class="settings-item">
                    <i class="mdui-icon material-icons" style="margin-right: 10px; margin-top: -3px">language</i>
                    <span>{{language.tabSettings.ui.language}}</span>
                    <select v-model="settings.ui.language" class="mdui-select" style="float: right; margin-right: 10px"
                        id="demo-js-2">
                        <option value="zh">简体中文</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span><i class="mdui-icon material-icons"
                                style="margin-right: 10px; margin-top: -3px">layers</i>{{language.tabSettings.ui.useGlass}}</span>
                        <input type="checkbox" v-model="settings.ui.useGlass" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="platform=='darwin' && settings.ui.useGlass">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                water_drop </span>{{language.tabSettings.ui.useLiquidGlass}}</span>
                        <input type="checkbox" v-model="settings.ui.useLiquidGlass" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                dark_mode </span>{{language.tabSettings.ui.isDark}}</span>
                        <input type="checkbox" v-model="settings.ui.isDark" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="false">
                    <label class="mdui-switch">
                        <span>使用新版模型库UI (beta)</span>
                        <input type="checkbox" v-model="settings.ui.useNewModelUI" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <!-- Setting Tab: input -->
                <h1 class="mdui-text-color-theme">
                    {{language.tabSettings.input.name}}
                </h1>
                <div class="settings-item">
                    <span><span class="material-icons-outlined">
                            camera </span>{{language.tabMocap.chooseCamera}}</span>
                    <select v-model="camera" class="mdui-select" style="float: right; margin-right: 10px"
                        id="demo-js-3">
                        <option v-for="c in cameras" v-bind:value="c.id">
                            {{c.label}}
                        </option>
                    </select>
                </div>
                <!-- Setting Tab: Preview -->
                <h1 class="mdui-text-color-theme">
                    {{language.tabSettings.preview.name}}
                </h1>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                accessibility_new </span>{{language.tabSettings.preview.showSketelonOnInput}}</span>
                        <input type="checkbox" v-model="settings.preview.showSketelonOnInput" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                voice_chat </span>{{language.tabSettings.preview.mirroringWhenCamera}}</span>
                        <input type="checkbox" v-model="settings.preview.mirroringWhenCamera" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                mms </span>{{language.tabSettings.preview.mirroringWhenVideoFile}}</span>
                        <input type="checkbox" v-model="settings.preview.mirroringWhenVideoFile" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <!-- Setting Tab: Forward -->
                <h1 class="mdui-text-color-theme" v-show="platform!=='web'">
                    {{language.tabSettings.forward.name}}
                </h1>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span><i class="mdui-icon material-icons"
                                style="margin-right: 10px; margin-top: -3px">wifi_tethering</i>{{language.tabSettings.forward.enableForwarding}}</span>
                        <input type="checkbox" v-model="settings.forward.enableForwarding" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="settings.forward.enableForwarding"
                    onclick="mdui.prompt('','修改端口号',(s)=>{window.sysmocapApp.settings.forward.port = parseInt(s)},()=>{},{defaultValue:window.sysmocapApp.settings.forward.port})">
                    <span><span class="material-icons-outlined"> cable
                        </span>{{language.tabSettings.forward.port}}</span>
                    <span style="
                                float: right;
                                margin-right: 10px;
                                font-weight: 600;
                            " class="mdui-text-color-theme-accent">{{settings.forward.port}}</span>
                </div>
                <div class="settings-item" v-show="false && settings.forward.enableForwarding">
                    <label class="mdui-switch">
                        <span>{{language.tabSettings.forward.useSSL}}</span>
                        <input type="checkbox" v-model="settings.forward.useSSL" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="settings.forward.enableForwarding">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                view_in_ar </span>{{language.tabSettings.forward.supportForWebXR}}<i
                                class="mdui-icon material-icons"
                                mdui-tooltip="{content: window.sysmocapApp.language.tabSettings.forward.webXRtips}"
                                style="margin-top: -2.5px; margin-left: 2px">info_outline</i></span>
                        <input type="checkbox" v-model="settings.forward.supportForWebXR" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <!-- Setting Tab: Performance -->
                <h1 class="mdui-text-color-theme" v-show="platform!=='web'">
                    {{language.tabSettings.performance.name}}
                </h1>
                <div class="settings-item" v-bind:onclick="'mdui.alert(`'+glRenderer+'`,`GL Render`)'"
                    v-show="platform!=='web'">
                    <span style="
                                overflow: hidden;
                                display: -webkit-box;
                                height: 30px;
                            "><span class="material-icons-outlined">
                            memory </span>{{language.tabSettings.performance.gl}}
                        {{glRenderer?.substr(7,glRenderer.length-8)}}</span>
                </div>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                storm </span>{{language.tabSettings.performance.forcedDGPU}}</span>
                        <input type="checkbox" v-model="settings.performance.useDgpu" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                account_tree</span>{{language.tabSettings.performance.useDescrertionProcess}}</span>
                        <input type="checkbox" v-model="settings.performance.useDescrertionProcess" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <!-- Setting Tab: Output -->
                <h1 class="mdui-text-color-theme">
                    {{language.tabSettings.output.name}}
                </h1>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                directions_off </span>{{language.tabSettings.output.antialias}}</span>
                        <input type="checkbox" v-model="settings.output.antialias" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span><span class="material-icons-outlined">
                                60fps_select </span>Show FPS</span>
                        <input type="checkbox" v-model="settings.output.showFPS" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="false">
                    <label class="mdui-switch">
                        <span>{{language.tabSettings.output.usePicInsteadOfColor}}</span>
                        <input type="checkbox" v-model="settings.output.usePicInsteadOfColor" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="false && !settings.output.usePicInsteadOfColor">
                    <label>
                        <span>{{language.tabSettings.output.bgColor}}</span>
                        <input type="color" v-model="settings.output.bgColor" style="
                                    background: none;
                                    border: none;
                                    padding: 0;
                                    width: 40px;
                                    height: 25px;
                                " />
                    </label>
                </div>
                <div class="settings-item" v-show="settings.output.usePicInsteadOfColor">
                    <span>{{language.tabSettings.output.usePicInsteadOfColor}}</span>
                </div>
                <!-- <div
                        class="settings-item"
                        onclick="openLightInput()"
                        v-show="false"
                    >
                        <span>灯光效果（lambda表达式）</span>
                    </div> -->
                <!-- Setting Tab: Mocap & Mediapipe -->
                <h1 class="mdui-text-color-theme">
                    {{language.tabSettings.mediapipe.name}}<span style="
                                color: #777;
                                font-size: 12px;
                                font-weight: 400;
                                margin-left: 10px;
                            ">Powered by
                        <span style="cursor: pointer"
                            onclick="ipcRenderer.send('openPDF','../pdfs/pose_model_card.pdf')">MediaPipe BlazePose GHUM
                            3D CNN Model</span></span>
                </h1>
                <div class="settings-item">
                    <span style="display: inline-block; width: 56%">MODEL_COMPLEXITY
                        <i class="mdui-icon material-icons"
                            mdui-tooltip="{content: 'Complexity of the pose landmark model: 0, 1 or 2. Landmark accuracy as well as inference latency generally go up with the model complexity. Default to 1.'}"
                            style="margin-top: -2.5px">info_outline</i>
                    </span>
                    <label class="mdui-slider mdui-slider-discrete" style="
                                display: inline-block;
                                width: 40%;
                                margin-bottom: -12px;
                            ">
                        <input type="range" step="1" min="0" max="2" value="2"
                            v-model="settings.mediapipe.modelComplexity" />
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span>SMOOTH_LANDMARKS
                            <i class="mdui-icon material-icons"
                                mdui-tooltip="{content: 'If set to true, the solution filters pose landmarks across different input images to reduce jitter. Default to true.'}"
                                style="margin-top: -2.5px">info_outline</i>
                        </span>
                        <input type="checkbox" v-model="settings.mediapipe.smoothLandmarks" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <label class="mdui-switch">
                        <span>REFINE_FACE_LANDMARKS
                            <i class="mdui-icon material-icons"
                                mdui-tooltip="{content: 'Whether to further refine the landmark coordinates around the eyes and lips, and output additional landmarks around the irises. Default to false.'}"
                                style="margin-top: -2.5px">info_outline</i>
                        </span>
                        <input type="checkbox" v-model="settings.mediapipe.refineFaceLandmarks" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item">
                    <span style="display: inline-block; width: 56%">MIN_DETECTION_CONFIDENCE
                        <i class="mdui-icon material-icons"
                            mdui-tooltip="{content: 'Minimum confidence value ([0.0, 1.0]) from the person-detection model for the detection to be considered successful. Default to 0.5.'}"
                            style="margin-top: -2.5px">info_outline</i>
                    </span>
                    <label class="mdui-slider mdui-slider-discrete" style="
                                display: inline-block;
                                width: 40%;
                                margin-bottom: -12px;
                            ">
                        <input type="range" step="0.1" min="0" max="1" v-model="settings.mediapipe.minDetectionConfidence" />
                    </label>
                </div>
                <div class="settings-item">
                    <span style="display: inline-block; width: 56%">MIN_TRACKING_CONFIDENCE
                        <i class="mdui-icon material-icons"
                            mdui-tooltip="{content: 'Minimum confidence value ([0.0, 1.0]) from the landmark-tracking model for the pose landmarks to be considered tracked successfully, or otherwise person detection will be invoked automatically on the next input image. Setting it to a higher value can increase robustness of the solution, at the expense of a higher latency. Default to 0.5.'}"
                            style="margin-top: -2.5px">info_outline</i>
                    </span>
                    <label class="mdui-slider mdui-slider-discrete" style="
                                display: inline-block;
                                width: 40%;
                                margin-bottom: -12px;
                            ">
                        <input type="range" step="0.1" min="0" max="1" v-model="settings.mediapipe.minTrackingConfidence" />
                    </label>
                </div>
                <!-- Setting Tab: About -->
                <h1 class="mdui-text-color-theme" v-show="platform!=='web'">
                    {{language.tabSettings.about.name}}
                </h1>
                <div class="settings-item">
                    <div style="
                                display: flex;
                                align-content: space-between;
                                justify-content: space-between;
                                width: 100%;
                            ">
                        {{language.tabSettings.about.paper}}
                    </div>
                </div>
                <div style="position: relative;height: 90px;">
                    <div class="model-importer" style="
                                width: 250px;
                                height: 75px;
                                padding: 5px;
                                position:absolute;
                                top: -15px;
                                font-size: 14px;
                                border-radius: 10px;
                                left: -2px;
                            ">
                        <img :src="'../../../../pdfs/ismar.png'"
                            style="box-shadow: #7773 -1px -1px 2px;width: 70px;position: absolute;top: 13px;display: block;right: -10px;border-radius: 5px 0 0 0;transform: rotate(10deg);">
                        <div style="position: absolute;top: 6px;left: 10px;">
                            <div style="font-size: 10px;margin-bottom: 5px;">ISMAR 2022</div>
                            Real-time Expressive Avatar <br>Animation Generation...
                            <div style="position: absolute;height: 20px;top: 55px;">
                                <button onclick="ipcRenderer.send('openPDF','../pdfs/ismar.pdf')" class="mdui-btn xf-button-2" style="
                                height: 15px !important;
                                line-height: 14px !important;
                                min-width: 30px;
                                font-size: 8px;
                            ">
                                    <i class="mdui-icon material-icons"
                                        style="font-size: 14px; margin-left: -8px;margin-bottom: -1px;">open_in_browser</i>
                                    PDF
                                </button>
                                <button onclick="window.openInIEEE()" class="mdui-btn xf-button-2" style="
                                height: 15px !important;
                                line-height: 14px !important;
                                min-width: 30px;
                                font-size: 8px;
                                margin-left: 10px;
                            ">
                                    <i class="mdui-icon material-icons"
                                        style="font-size: 14px; margin-left: -8px;margin-bottom: -1px;">public</i>
                                    IEEE
                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="model-importer" style="
                                width: 250px;
                                height: 75px;
                                padding: 5px;
                                position:absolute;
                                border-radius: 10px;
                                font-size: 14px;
                                top: -15px;
                                left: 268px;
                            "><img :src="'../../../../pdfs/bylw.png'"
                            style="box-shadow: #7773 -1px -1px 2px;width: 70px;position: absolute;top: 15px;display: block;right: -10px;border-radius: 5px 0 0 0;transform: rotate(10deg);">
                        <div style="position: absolute;top: 6px;left: 10px;">
                            <div style="font-size: 10px;margin-bottom: 5px;">本科毕业论文（Chinese Only）</div>
                            视频驱动虚拟角色动作的自动<br>生成系统的设计与实现
                            <div style="position: absolute;height: 20px;top: 55px;">
                                <button onclick="ipcRenderer.send('openPDF','../pdfs/bylw.pdf')" class="mdui-btn xf-button-2" style="
                                height: 15px !important;
                                line-height: 14px !important;
                                min-width: 30px;
                                font-size: 8px;
                            ">
                                    <i class="mdui-icon material-icons"
                                        style="font-size: 14px; margin-left: -8px;margin-bottom: -1px;">open_in_browser</i>
                                    PDF
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
                <!-- Setting Tab: Dev -->
                <h1 class="mdui-text-color-theme" v-show="platform!=='web'">
                    {{language.tabSettings.dev.name}}
                </h1>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span><i class="mdui-icon material-icons"
                                style="margin-right: 10px; margin-top: -3px">code</i>{{language.tabSettings.dev.allowDevTools}}</span>
                        <input type="checkbox" v-model="settings.dev.allowDevTools" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" v-show="platform!=='web'">
                    <label class="mdui-switch">
                        <span>{{language.tabSettings.dev.openDevToolsWhenMocap}}</span>
                        <input type="checkbox" v-model="settings.dev.openDevToolsWhenMocap" />
                        <i class="mdui-switch-icon"></i>
                    </label>
                </div>
                <div class="settings-item" onclick="ipcRenderer.send('openGpuInfo')" v-show="platform!=='web'">
                    <i class="mdui-icon material-icons" style="margin-right: 10px; margin-top: -3px">open_in_new</i>
                    {{language.tabSettings.dev.showGpuInfo}}
                </div>
            </div>
</template>

<script>
import { toRefs } from "vue";
import { state } from "./store.js";
export default { name: "SettingsTab", setup() { return { ...toRefs(state) }; } };
</script>
