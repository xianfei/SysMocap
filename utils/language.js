module.exports = {
    languages: {
        zh: {
            app: {
                name: "视频驱动虚拟角色动作的自动生成系统",
            },
            titlebar: {
                modelLib: "模型库",
                mocap: "动作捕捉",
                settings: "设置",
            },
            tabModelLib: {
                userModel: "用户模型",
                buildinModel: "内建模型",
                optAdd: "导入",
                optHide: "隐藏",
                dragModel: "把模型拖到这儿来~",
                suppotFormat: "支持VRM/GLB/GLTF/FBX，详细说明参见",
                here: "这里",
                dragImage: "把图片拖到这儿来~",
                open: "打开",
                setAsDefault: "设为默认",
                showInFinder: "在 Finder 中显示",
                remove: "移除",
            },
            tabMocap: {
                chooseModel: "选择模型：",
                dataSource: "数据源：",
                camera: "摄像头",
                videoFile: "视频文件",
                start: "开始",
                stop: "停止",
                chooseVideo: "选择视频文件",
                choosedVideo: "已选择视频文件:",
                unchoosed: "未选择",
                chooseCamera: "选择摄像头",
            },
            tabSettings: {
                desc: "计算机学院 2018级 王衔飞 毕业设计作品",
                document: {
                    name: "文档",
                    openDoc: "打开使用文档",
                },
                ui: {
                    name: "外观",
                    themeColor: "主题颜色",
                    isDark: "使用深色模式",
                    useGlass: "使用毛玻璃效果",
                    language: "语言",
                },
                preview: {
                    name: "实时预览",
                    showSketelonOnInput: "对输入源进行骨骼可视化标记",
                    mirroringWhenCamera: "当输入源为摄像头时，进行水平镜像翻转",
                    mirroringWhenVideoFile:
                        "当输入源为视频文件时，进行水平镜像翻转",
                },
                output: {
                    name: "虚拟形象输出",
                    antialias: "启用抗锯齿",
                    usePicInsteadOfColor: "使用图片作为背景而不是纯色",
                    bgColor: "背景颜色",
                    bgPicPath: "背景图片（点击更换）",
                },
                performance: {
                    name: "性能",
                    gl: "当前图形计算设备：",
                    forcedDGPU:
                        "在双显卡设备优先使用独立显卡进行图形计算（重启软件生效）",
                        useDescrertionProcess: "使用独立进程用于动作捕捉（重启软件生效）",
                },
                forward: {
                    name: "动作/虚拟形象转发",
                    enableForwarding:
                        "启用通过 HTTP / WebSocket 的动作/虚拟形象转发",
                    port: "HTTP / WebSocket 端口号",
                    useSSL: "启用安全协议（HTTPS/WSS）",
                    supportForWebXR: "启用WebXR（AR、VR）支持",
                    webXRtips:"WebXR需要HTTPS协议，该系统会在同一端口同时监听HTTPS和HTTP请求",
                },
                mediapipe: {
                    name: "动作捕捉",
                },
                dev: {
                    name: "开发者",
                    allowDevTools: "显示DevTools入口",
                    openDevToolsWhenMocap: "在启动动作捕捉时打开DevTools窗口",
                    showGpuInfo: "打开GPU信息页面",
                },
                input:{
                    name: "输入",
                }
            },
            modelVierer: {
                fullSupport: "完整动作支持",
                partialSupport: "部分动作支持",
                noSupport: "不支持",
                showSketelon: "显示骨骼控制器",
                hideSketelon: "隐藏骨骼控制器",
                modifyDecoration: "编辑装饰物",
                back: "保存并返回",
                changeBonesBinding: "更换骨骼绑定",
                edit: "编辑虚拟形象信息",
                hide: "隐藏",
                show: "显示",
            },
        },
        en: {
            app: {
                name: "Video-driven Virtual Character Animated System",
            },
            titlebar: {
                modelLib: "library",
                mocap: "mocap",
                settings: "setting",
            },
            tabModelLib: {
                userModel: "User's Models",
                buildinModel: "Built-in Models",
                optAdd: "Import",
                optHide: "Hide",
                dragModel: "Drag model here",
                suppotFormat: "Supported VRM/GLB/GLTF/FBX, details see",
                here: " here",
                dragImage: "Drag image here",
                open: "Open",
                setAsDefault: "Set as default",
                showInFinder: "Show in Finder",
                remove: "Remove",
            },
            tabMocap: {
                chooseModel: "3D Model：",
                dataSource: "Source：",
                camera: "Camera",
                videoFile: "Video File",
                start: "Start",
                stop: "Stop",
                chooseVideo: "Choose Video File",
                choosedVideo: "Choosed Video File: ",
                unchoosed: "Unchoosed",
                chooseCamera: "Choose Camera",
            },
            tabSettings: {
                desc: "By Xianfei, as Undergraduate Graduation Design Works",
                document: {
                    name: "User Manual",
                    openDoc: "Show the User Manual",
                },
                ui: {
                    name: "Interface",
                    themeColor: "Themed Color",
                    isDark: "Use Dark Mode",
                    useGlass: "Use Frosted Glass Effect",
                    language: "Language",
                },
                preview: {
                    name: "Real-time Preview",
                    showSketelonOnInput: "Show Bones Sketelon on Input Source",
                    mirroringWhenCamera:
                        "Horizontal Mirror Flip when Camera as Input",
                    mirroringWhenVideoFile:
                        "Horizontal Mirror Flip when Video File as Input",
                },
                performance: {
                    name: "Performance",
                    gl: "Current GL Device: ",
                    forcedDGPU:
                        "Use Discrete Graphics when Dual GPU （Need Reopen）",
                        useDescrertionProcess: "Use Descretion Process for Motion Capture（Need Reopen）",
                },
                output: {
                    name: "Virtual Character Output",
                    antialias: "Enable Antialias",
                    usePicInsteadOfColor:
                        "Use Picture as Background instead of Color",
                    bgColor: "Background Color",
                    bgPicPath: "Background Picture (click to change)",
                },
                forward: {
                    name: "Mocap Data Forward",
                    enableForwarding: "Enable Forward via HTTP & WebSocket",
                    port: "Port Number of HTTP & WebSocket",
                    useSSL: "Enable Security Protocol（HTTPS/WSS）",
                    supportForWebXR: "Support for WebXR (AR/VR) ",
                    webXRtips:"WebXR needs HTTPS protocol, this system will listen both HTTPS and HTTP at same port.",
                },
                mediapipe: {
                    name: "Motion Capture",
                },
                input:{
                    name: "Input",
                },
                dev: {
                    name: "Developer",
                    allowDevTools: "Show Entrance for DevTools",
                    openDevToolsWhenMocap: "Open DevTools when Mocap Started",
                    showGpuInfo: "Open GPU Info Page",
                },
            },
            modelVierer: {
                fullSupport: "Full Mocap Support",
                partialSupport: "Partial Mocap Support",
                noSupport: "No Support",
                showSketelon: "Show Bones Controller",
                hideSketelon: "Hide Bones Controller",
                modifyDecoration: "Modify Decoration",
                back: "Save & Back",
                changeBonesBinding: "Change Bones Binding",
                edit: "Edit Avatar Info",
                hide: "Hide",
                show: "Show",
            },
        },
    },
};
