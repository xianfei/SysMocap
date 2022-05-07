/**
 *  Video-based Motion Capture and 3D Model Render Part
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

// import setting utils
const globalSettings = window.parent.window.sysmocapApp.settings;

// set theme
document.body.setAttribute(
    "class",
    "mdui-theme-primary-" +
        globalSettings.ui.themeColor +
        " mdui-theme-accent-" +
        globalSettings.ui.themeColor
);

// import mocap web server
var my_server = null;
var ipcRenderer = null;
if (globalSettings.forward.enableForwarding)
    ipcRenderer = require("electron").ipcRenderer;
// my_server = require("../webserv/server.js");

// import Helper Functions from Kalidokit
const remap = Kalidokit.Utils.remap;
const clamp = Kalidokit.Utils.clamp;
const lerp = Kalidokit.Vector.lerp;

// VRM object
let currentVrm;

// Whether mediapipe ready
var started = false;

// renderer
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: globalSettings.output.antialias,
});
renderer.setSize(
    document.querySelector("#model").clientWidth,
    (document.querySelector("#model").clientWidth / 16) * 9
);
renderer.setPixelRatio(window.devicePixelRatio);
document.querySelector("#model").appendChild(renderer.domElement);

window.addEventListener(
    "resize",
    function () {
        orbitCamera.aspect = 16 / 9;
        orbitCamera.updateProjectionMatrix();
        renderer.setSize(
            document.querySelector("#model").clientWidth,
            (document.querySelector("#model").clientWidth / 16) * 9
        );
    },
    false
);

// camera
const orbitCamera = new THREE.PerspectiveCamera(35, 16 / 9, 0.1, 1000);
orbitCamera.position.set(0.0, 1.4, 0.7);

// controls
const orbitControls = new THREE.OrbitControls(orbitCamera, renderer.domElement);
orbitControls.screenSpacePanning = true;
orbitControls.target.set(0.0, 1.4, 0.0);
orbitControls.update();

// scene
const scene = new THREE.Scene();

// stats

const statsContainer = document.getElementById("status");

if (!globalSettings.output.showFPS) {
    statsContainer.style.display = "none";
}

const stats = new Stats();
stats.domElement.style.position = "absolute";
stats.domElement.style.top = "26px";
stats.domElement.style.left = "10px";
statsContainer.appendChild(stats.dom);

const stats2 = new Stats();
stats2.domElement.style.position = "absolute";
stats2.domElement.style.top = "26px";
stats2.domElement.style.left = "100px";
statsContainer.appendChild(stats2.dom);

// Main Render Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    stats.update();

    if (currentVrm) {
        // Update model to render physics
        currentVrm.update(clock.getDelta());
    }
    renderer.render(scene, orbitCamera);
}
animate();

// Import Character VRM
const loader = new THREE.GLTFLoader();
loader.crossOrigin = "anonymous";

var modelObj = JSON.parse(localStorage.getItem("modelInfo"));
var modelPath = modelObj.path;

var fileType = modelPath
    .substring(modelPath.lastIndexOf(".") + 1)
    .toLowerCase();

var skeletonHelper;

// init server
if (ipcRenderer)
    ipcRenderer.send(
        "startWebServer",
        parseInt(globalSettings.forward.port),
        modelPath,
        globalSettings.forward.supportForWebXR
    );
// my_server.startServer(parseInt(globalSettings.forward.port), modelPath);

// Import model from URL, add your own model here
loader.load(
    modelPath,

    (gltf) => {
        if (fileType == "vrm") {
            // calling these functions greatly improves the performance
            THREE.VRMUtils.removeUnnecessaryVertices(gltf.scene);
            THREE.VRMUtils.removeUnnecessaryJoints(gltf.scene);

            THREE.VRM.from(gltf).then((vrm) => {
                scene.add(vrm.scene);
                const light = new THREE.DirectionalLight(0xffffff);
                light.position.set(1.0, 1.0, 1.0).normalize();
                scene.add(light);
                currentVrm = vrm;
                currentVrm.scene.rotation.y = Math.PI; // Rotate model 180deg to face camera
            });
        } else {
            // for glb files
            skeletonHelper = new THREE.SkeletonHelper(gltf.scene);
            scene.add(gltf.scene);
            scene.add(new THREE.HemisphereLight(0xcccccc, 0xffffff));
            const light = new THREE.DirectionalLight(0x555555);
            light.position.set(1.0, 1.0, 1.0).normalize();
            scene.add(light);
            skeletonHelper.bones[0].rotation.y = Math.PI; // Rotate model 180deg to face camera
        }
    },

    (progress) =>
        console.log(
            "Loading model...",
            100.0 * (progress.loaded / progress.total),
            "%"
        ),

    (error) => console.error(error)
);

// Animate Rotation Helper function
const rigRotation = (
    name,
    rotation = { x: 0, y: 0, z: 0 },
    dampener = 1,
    lerpAmount = 0.3
) => {
    if (currentVrm) {
        const Part = currentVrm.humanoid.getBoneNode(
            THREE.VRMSchema.HumanoidBoneName[name]
        );
        if (!Part) {
            return;
        }
        let euler = new THREE.Euler(
            rotation.x * dampener,
            rotation.y * dampener,
            rotation.z * dampener,
            rotation.rotationOrder || "XYZ"
        );
        let quaternion = new THREE.Quaternion().setFromEuler(euler);
        Part.quaternion.slerp(quaternion, lerpAmount); // interpolate
    } else if (skeletonHelper) {
        name = modelObj.binding[name]; // convert name with model json binding info
        // find bone in bones by name
        var b = skeletonHelper.bones.find((bone) => bone.name == name);
        if (b) {
            b.rotation.x = rotation.x * dampener;
            b.rotation.y = rotation.y * dampener;
            b.rotation.z = rotation.z * dampener;
        } else {
            console.log("Can not found bone " + name);
        }
    }
};

// Animate Position Helper Function
const rigPosition = (
    name,
    position = { x: 0, y: 0, z: 0 },
    dampener = 1,
    lerpAmount = 0.3
) => {
    if (currentVrm) {
        const Part = currentVrm.humanoid.getBoneNode(
            THREE.VRMSchema.HumanoidBoneName[name]
        );
        if (!Part) {
            return;
        }
        let vector = new THREE.Vector3(
            position.x * dampener,
            position.y * dampener,
            position.z * dampener
        );
        Part.position.lerp(vector, lerpAmount); // interpolate
    } else if (skeletonHelper) {
        name = modelObj.binding[name]; // convert name with model json binding info
        // find bone in bones by name
        var b = skeletonHelper.bones.find((bone) => bone.name == name);
        if (b) {
            b.position.x = position.x * dampener;
            b.position.y = position.y * dampener;
            b.position.z = position.z * dampener;
        } else {
            console.log("Can not found bone " + name);
        }
    }
};

let oldLookTarget = new THREE.Euler();
const rigFace = (riggedFace) => {
    if (!currentVrm) {
        return; // face motion only support VRM Now
    }

    // Blendshapes and Preset Name Schema
    const Blendshape = currentVrm.blendShapeProxy;
    const PresetName = THREE.VRMSchema.BlendShapePresetName;

    // Simple example without winking. Interpolate based on old blendshape, then stabilize blink with `Kalidokit` helper function.
    // for VRM, 1 is closed, 0 is open.
    riggedFace.eye.l = lerp(
        clamp(1 - riggedFace.eye.l, 0, 1),
        Blendshape.getValue(PresetName.Blink),
        0.4
    );
    riggedFace.eye.r = lerp(
        clamp(1 - riggedFace.eye.r, 0, 1),
        Blendshape.getValue(PresetName.Blink),
        0.4
    );
    // riggedFace.eye.l = Kalidokit.Face.stabilizeBlink(
    //     {l:riggedFace.eye.l,r:riggedFace.eye.l},
    //     riggedFace.head.y
    // ).l;
    // riggedFace.eye.r = Kalidokit.Face.stabilizeBlink(
    //     {l:riggedFace.eye.r,r:riggedFace.eye.r},
    //     riggedFace.head.y
    // ).r;
    riggedFace.eye.l /= 0.8;
    riggedFace.eye.r /= 0.8;
    Blendshape.setValue(PresetName.BlinkL, riggedFace.eye.l);
    Blendshape.setValue(PresetName.BlinkR, riggedFace.eye.r);

    // Interpolate and set mouth blendshapes
    Blendshape.setValue(
        PresetName.I,
        lerp(
            riggedFace.mouth.shape.I / 0.8,
            Blendshape.getValue(PresetName.I),
            0.3
        )
    );
    Blendshape.setValue(
        PresetName.A,
        lerp(
            riggedFace.mouth.shape.A / 0.8,
            Blendshape.getValue(PresetName.A),
            0.3
        )
    );
    Blendshape.setValue(
        PresetName.E,
        lerp(
            riggedFace.mouth.shape.E / 0.8,
            Blendshape.getValue(PresetName.E),
            0.3
        )
    );
    Blendshape.setValue(
        PresetName.O,
        lerp(
            riggedFace.mouth.shape.O / 0.8,
            Blendshape.getValue(PresetName.O),
            0.3
        )
    );
    Blendshape.setValue(
        PresetName.U,
        lerp(
            riggedFace.mouth.shape.U / 0.8,
            Blendshape.getValue(PresetName.U),
            0.3
        )
    );

    //PUPILS
    //interpolate pupil and keep a copy of the value
    let lookTarget = new THREE.Euler(
        lerp(oldLookTarget.x, riggedFace.pupil.y, 0.4),
        lerp(oldLookTarget.y, riggedFace.pupil.x, 0.4),
        0,
        "XYZ"
    );
    oldLookTarget.copy(lookTarget);
    currentVrm.lookAt.applyer.lookAt(lookTarget);
};

/* VRM Character Animator */
const animateVRM = (vrm, results) => {
    if (!vrm && !skeletonHelper) {
        return;
    }
    // Take the results from `Holistic` and animate character based on its Face, Pose, and Hand Keypoints.
    let riggedPose, riggedLeftHand, riggedRightHand, riggedFace;

    const faceLandmarks = results.faceLandmarks;
    // Pose 3D Landmarks are with respect to Hip distance in meters
    const pose3DLandmarks = results.ea;
    // Pose 2D landmarks are with respect to videoWidth and videoHeight
    const pose2DLandmarks = results.poseLandmarks;
    // Be careful, hand landmarks may be reversed
    const leftHandLandmarks = results.rightHandLandmarks;
    const rightHandLandmarks = results.leftHandLandmarks;

    if (faceLandmarks) {
        riggedFace = Kalidokit.Face.solve(faceLandmarks, {
            runtime: "mediapipe",
            video: videoElement,
        });
    }

    if (pose2DLandmarks && pose3DLandmarks) {
        riggedPose = Kalidokit.Pose.solve(pose3DLandmarks, pose2DLandmarks, {
            runtime: "mediapipe",
            video: videoElement,
        });
    }

    if (leftHandLandmarks) {
        riggedLeftHand = Kalidokit.Hand.solve(leftHandLandmarks, "Left");
    }

    if (rightHandLandmarks && fileType == "vrm") {
        riggedRightHand = Kalidokit.Hand.solve(rightHandLandmarks, "Right");
    }

    if (ipcRenderer)
        ipcRenderer.send(
            "sendBoradcast",
            JSON.stringify({
                type: "xf-sysmocap-data",
                riggedPose: riggedPose,
                riggedLeftHand: riggedLeftHand,
                riggedRightHand: riggedRightHand,
                riggedFace: riggedFace,
            })
        );

    // Animate Face
    if (faceLandmarks) {
        rigRotation("Neck", riggedFace.head, 0.7);
        if (fileType == "vrm") rigFace(riggedFace);
    }

    // Animate Pose
    if (pose2DLandmarks && pose3DLandmarks) {
        rigRotation("Hips", riggedPose.Hips.rotation, 0.7);
        rigPosition(
            "Hips",
            {
                x: riggedPose.Hips.position.x, // Reverse direction
                y: riggedPose.Hips.position.y + 1, // Add a bit of height
                z: -riggedPose.Hips.position.z, // Reverse direction
            },
            1,
            0.07
        );

        rigRotation("Chest", riggedPose.Spine, 0.25, 0.3);
        rigRotation("Spine", riggedPose.Spine, 0.45, 0.3);

        rigRotation("RightUpperArm", riggedPose.RightUpperArm);
        rigRotation("RightLowerArm", riggedPose.RightLowerArm);
        rigRotation("LeftUpperArm", riggedPose.LeftUpperArm);
        rigRotation("LeftLowerArm", riggedPose.LeftLowerArm);

        rigRotation("LeftUpperLeg", riggedPose.LeftUpperLeg);
        rigRotation("LeftLowerLeg", riggedPose.LeftLowerLeg);
        rigRotation("RightUpperLeg", riggedPose.RightUpperLeg);
        rigRotation("RightLowerLeg", riggedPose.RightLowerLeg);
    }

    // Animate Hands
    if (leftHandLandmarks && fileType == "vrm") {
        rigRotation("LeftHand", {
            // Combine pose rotation Z and hand rotation X Y
            z: riggedPose.LeftHand.z,
            y: riggedLeftHand.LeftWrist.y,
            x: riggedLeftHand.LeftWrist.x,
        });
        rigRotation("LeftRingProximal", riggedLeftHand.LeftRingProximal);
        rigRotation(
            "LeftRingIntermediate",
            riggedLeftHand.LeftRingIntermediate
        );
        rigRotation("LeftRingDistal", riggedLeftHand.LeftRingDistal);
        rigRotation("LeftIndexProximal", riggedLeftHand.LeftIndexProximal);
        rigRotation(
            "LeftIndexIntermediate",
            riggedLeftHand.LeftIndexIntermediate
        );
        rigRotation("LeftIndexDistal", riggedLeftHand.LeftIndexDistal);
        rigRotation("LeftMiddleProximal", riggedLeftHand.LeftMiddleProximal);
        rigRotation(
            "LeftMiddleIntermediate",
            riggedLeftHand.LeftMiddleIntermediate
        );
        rigRotation("LeftMiddleDistal", riggedLeftHand.LeftMiddleDistal);
        rigRotation("LeftThumbProximal", riggedLeftHand.LeftThumbProximal);
        rigRotation(
            "LeftThumbIntermediate",
            riggedLeftHand.LeftThumbIntermediate
        );
        rigRotation("LeftThumbDistal", riggedLeftHand.LeftThumbDistal);
        rigRotation("LeftLittleProximal", riggedLeftHand.LeftLittleProximal);
        rigRotation(
            "LeftLittleIntermediate",
            riggedLeftHand.LeftLittleIntermediate
        );
        rigRotation("LeftLittleDistal", riggedLeftHand.LeftLittleDistal);
    }
    if (rightHandLandmarks && fileType == "vrm") {
        // riggedRightHand = Kalidokit.Hand.solve(rightHandLandmarks, "Right");
        rigRotation("RightHand", {
            // Combine Z axis from pose hand and X/Y axis from hand wrist rotation
            z: riggedPose.RightHand.z,
            y: riggedRightHand.RightWrist.y,
            x: riggedRightHand.RightWrist.x,
        });
        rigRotation("RightRingProximal", riggedRightHand.RightRingProximal);
        rigRotation(
            "RightRingIntermediate",
            riggedRightHand.RightRingIntermediate
        );
        rigRotation("RightRingDistal", riggedRightHand.RightRingDistal);
        rigRotation("RightIndexProximal", riggedRightHand.RightIndexProximal);
        rigRotation(
            "RightIndexIntermediate",
            riggedRightHand.RightIndexIntermediate
        );
        rigRotation("RightIndexDistal", riggedRightHand.RightIndexDistal);
        rigRotation("RightMiddleProximal", riggedRightHand.RightMiddleProximal);
        rigRotation(
            "RightMiddleIntermediate",
            riggedRightHand.RightMiddleIntermediate
        );
        rigRotation("RightMiddleDistal", riggedRightHand.RightMiddleDistal);
        rigRotation("RightThumbProximal", riggedRightHand.RightThumbProximal);
        rigRotation(
            "RightThumbIntermediate",
            riggedRightHand.RightThumbIntermediate
        );
        rigRotation("RightThumbDistal", riggedRightHand.RightThumbDistal);
        rigRotation("RightLittleProximal", riggedRightHand.RightLittleProximal);
        rigRotation(
            "RightLittleIntermediate",
            riggedRightHand.RightLittleIntermediate
        );
        rigRotation("RightLittleDistal", riggedRightHand.RightLittleDistal);
    }

    // if (my_server)
    //     my_server.sendBoradcast(
    //         JSON.stringify({
    //             type: "xf-sysmocap-data",
    //             riggedPose: riggedPose,
    //             riggedLeftHand: riggedLeftHand,
    //             riggedRightHand: riggedRightHand,
    //             riggedFace: riggedFace,
    //         })
    //     );
};

let videoElement = document.querySelector(".input_video"),
    videoCtrl = document.querySelector("#videoCtrl"),
    guideCanvas = document.querySelector("canvas.guides");

const onResults = (results) => {
    stats2.update();
    // Draw landmark guides
    if (globalSettings.preview.showSketelonOnInput) drawResults(results);
    // Animate model
    animateVRM(currentVrm, results);
    if (!started) {
        document.getElementById("loading").remove();
        if (localStorage.getItem("useCamera") == "file") videoElement.play();
        started = true;
    }
};

const holistic = new Holistic({
    locateFile: (file) => {
        if (typeof require != "undefined")
            return __dirname + `/../node_modules/@mediapipe/holistic/${file}`;
        else return `../node_modules/@mediapipe/holistic/${file}`;
    },
});

holistic.setOptions({
    modelComplexity: parseInt(globalSettings.mediapipe.modelComplexity),
    smoothLandmarks: globalSettings.mediapipe.smoothLandmarks,
    minDetectionConfidence: parseFloat(
        globalSettings.mediapipe.minDetectionConfidence
    ),
    minTrackingConfidence: parseFloat(
        globalSettings.mediapipe.minTrackingConfidence
    ),
    refineFaceLandmarks: globalSettings.mediapipe.refineFaceLandmarks,
});
// Pass holistic a callback function
holistic.onResults(onResults);

const drawResults = (results) => {
    guideCanvas.width = videoElement.videoWidth;
    guideCanvas.height = videoElement.videoHeight;
    let canvasCtx = guideCanvas.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
    // Use `Mediapipe` drawing functions
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
        color: "#00cff7",
        lineWidth: 4,
    });
    drawLandmarks(canvasCtx, results.poseLandmarks, {
        color: "#ff0364",
        lineWidth: 2,
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
        color: "#C0C0C070",
        lineWidth: 1,
    });
    if (results.faceLandmarks && results.faceLandmarks.length === 478) {
        //draw pupils
        drawLandmarks(
            canvasCtx,
            [results.faceLandmarks[468], results.faceLandmarks[468 + 5]],
            {
                color: "#ffe603",
                lineWidth: 2,
            }
        );
    }
    drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {
        color: "#eb1064",
        lineWidth: 5,
    });
    drawLandmarks(canvasCtx, results.leftHandLandmarks, {
        color: "#00cff7",
        lineWidth: 2,
    });
    drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, {
        color: "#22c3e3",
        lineWidth: 5,
    });
    drawLandmarks(canvasCtx, results.rightHandLandmarks, {
        color: "#ff0364",
        lineWidth: 2,
    });
};

// switch use camera or video file
if (localStorage.getItem("useCamera") == "camera") {
    videoCtrl.parentNode.remove();
    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await holistic.send({ image: videoElement });
        },
        width: 1280,
        height: 720,
    });
    camera.start();
} else {
    videoCtrl.oninput = () => {
        videoElement.currentTime = videoCtrl.value;
    };
    // path of video file
    videoElement.src = localStorage.getItem("videoFile");
    videoElement.loop = true;

    var videoFrameCallback = async () => {
        // videoElement.pause()
        await holistic.send({ image: videoElement });
        videoCtrl.value = videoElement.currentTime;
        videoCtrl.max = videoElement.duration;
        mdui.updateSliders(videoCtrl.parentNode);
        videoElement.requestVideoFrameCallback(videoFrameCallback);
        // videoElement.play()
    };

    videoElement.requestVideoFrameCallback(videoFrameCallback);
}

// keyborad control camera position
document.addEventListener("keydown", (event) => {
    console.log(event);
    var x = orbitCamera.position.x;
    var y = orbitCamera.position.y;
    var z = orbitCamera.position.z;
    var step = 0.1;
    switch (event.key) {
        case "d":
        case "ArrowRight":
            orbitCamera.position.set(x + step, y, z);
            break;
        case "a":
        case "ArrowLeft":
            orbitCamera.position.set(x - step, y, z);
            break;
        case "w":
        case "ArrowUp":
            orbitCamera.position.set(x, y + step, z);
            break;
        case "s":
        case "ArrowDown":
            orbitCamera.position.set(x, y - step, z);
            break;
    }
});
