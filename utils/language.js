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
            },
            tabMocap: {
                chooseModel: "选择模型：",
                dataSource: "数据源：",
                camera: "摄像头",
                videoFile: "视频文件",
                start: "开始",
                stop: "停止",
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
                performance:{
                    name:"性能",
                    gl:"当前图形计算设备：",
                    forcedDGPU:"在双显卡设备优先使用独立显卡进行图形计算（重启软件生效）"
                },
                forward: {
                    name: "动作/虚拟形象转发",
                    enableForwarding:
                        "启用通过 HTTP / WebSocket 的动作/虚拟形象转发",
                    port: "HTTP / WebSocket 端口号",
                },
                mediapipe: {
                    name: "动作捕捉",
                },
                dev: {
                    name: "开发者",
                    allowDevTools: "显示GUI DevTools入口",
                    openDevToolsWhenMocap: "在启动动作捕捉时打开DevTools窗口",
                    showGpuInfo: "打开GPU信息页面"
                },
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
                optAdd: "导入",
            },
            tabMocap: {
                chooseModel: "3D Model：",
                dataSource: "Source：",
                camera: "Camera",
                videoFile: "Video File",
                start: "Start",
                stop: "Stop",
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
                performance:{
                    name:"Performance",
                    gl:"Current GL Device: ",
                    forcedDGPU:"Use Discrete Graphics on Dual GPU Laptop（Need Reopen Software）"
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
                },
                mediapipe: {
                    name: "Motion Capture",
                },
                dev: {
                    name: "Developer",
                    allowDevTools: "Show Entrance for DevTools",
                    openDevToolsWhenMocap: "Open DevTools when Mocap Started",
                    showGpuInfo: "Open GPU Info Page"
                },
            },
        },
    },
};
