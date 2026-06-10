/**
 *  Shared avatar renderer (three.js scene + model load + rig + animate + record)
 *
 *  Extracted verbatim from the triplicated render logic in render/render.js,
 *  mocaprender/script.js and webserv/public/script.js so all consumers share
 *  ONE implementation. It is decoupled from the data source: consumers feed it
 *  already-solved Kalidokit data via applyRigged(rigged) (e.g. from IPC or
 *  socket.io), or pass a `continuousData` getter so the animate loop re-applies
 *  the latest frame every render tick (the discrete render-iframe behavior).
 *
 *  Page-specific concerns (theme class, the #vue0 target overlay, #loading
 *  spinner, mocap-FPS ticking, data-source wiring) stay in each page wrapper.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import Stats from "three/addons/libs/stats.module.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { evalAxisExpr } from "./binding.js";
import { resolveModelPath } from "./modelPath.js";

/**
 * @param {object} opts
 * @param {object} opts.settings   globalSettings (output.antialias/showFPS, ...)
 * @param {object} opts.modelObj   parsed model descriptor (path/binding/camera*)
 * @param {() => (object|null)} [opts.continuousData] if provided, the animate
 *        loop applies its return value every frame (discrete render-iframe).
 */
export function createAvatarRenderer({ settings, modelObj, continuousData = null }) {
    // Kalidokit helpers (loaded as a window global via the page's classic script)
    const clamp = Kalidokit.Utils.clamp;
    const lerp = Kalidokit.Vector.lerp;

    const hipRotationOffset = 0.0;

    let currentVrm = null;
    let skeletonHelper;
    let initRotation = {};

    const modelPath = resolveModelPath(modelObj.path);
    const fileType = modelPath
        .substring(modelPath.lastIndexOf(".") + 1)
        .toLowerCase();

    // renderer
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: settings.output.antialias,
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
    const orbitControls = new OrbitControls(orbitCamera, renderer.domElement);
    orbitControls.screenSpacePanning = true;
    orbitControls.target.set(0.0, 1.4, 0.0);
    orbitControls.update();

    // scene
    const scene = new THREE.Scene();

    // stats
    const statsContainer = document.getElementById("status");
    if (!settings.output.showFPS) {
        statsContainer.style.display = "none";
    }
    const stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.top = "20px";
    stats.domElement.style.left = "10px";
    statsContainer.appendChild(stats.dom);

    const stats2 = new Stats();
    stats2.domElement.style.position = "absolute";
    stats2.domElement.style.top = "20px";
    stats2.domElement.style.left = "100px";
    statsContainer.appendChild(stats2.dom);

    const clock = new THREE.Clock();

    // light
    const light0 = new THREE.DirectionalLight(0xffffff, Math.PI);
    light0.position.set(1.0, 1.0, 1.0).normalize();
    scene.add(light0);

    if (fileType !== "vrm") {
        const light = new THREE.AmbientLight(0xffffff, 0.8);
        light.position.set(10.0, 10.0, -10.0).normalize();
        scene.add(light);
        const light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(0, 3, -2);
        light2.castShadow = true;
        scene.add(light2);
    }

    // Import model
    let loader = null;
    if (fileType == "fbx") {
        loader = new FBXLoader();
    } else {
        loader = new GLTFLoader();
        loader.register((parser) => {
            return new VRMLoaderPlugin(parser);
        });
    }
    loader.crossOrigin = "anonymous";
    loader.load(
        modelPath,
        (gltf) => {
            let model = null;
            if (fileType == "fbx") {
                model = gltf;
                gltf.scale.set(0.01, 0.01, 0.01);
            } else {
                model = gltf.scene;
            }

            if (fileType == "vrm") {
                // calling these functions greatly improves the performance
                VRMUtils.removeUnnecessaryVertices(gltf.scene);
                VRMUtils.removeUnnecessaryJoints(gltf.scene);
                const vrm = gltf.userData.vrm;
                scene.add(vrm.scene);
                if (vrm.meta.metaVersion === "0") {
                    vrm.scene.rotation.y = Math.PI; // Rotate model 180deg to face camera
                }
                currentVrm = vrm;
                window.currentVrm = currentVrm;
            } else {
                skeletonHelper = new THREE.SkeletonHelper(model);
                skeletonHelper.visible = false;
                scene.add(skeletonHelper);
                // for glb files
                scene.add(model);
                model.rotation.y = Math.PI; // Rotate model 180deg to face camera
                const rot = { x: 0, y: 0, z: -3.1129221599796764 };
                for (const i in rot) orbitCamera.rotation[i] = rot[i];
                const pos = {
                    x: -0,
                    y: 0.5922529898344698,
                    z: -1.4448572419883419,
                };
                for (const i in pos) orbitCamera.position[i] = pos[i];

                orbitControls.target.y = 0.5;
                orbitControls.update();

                if (modelObj.cameraTarget) {
                    orbitControls.target.set(
                        modelObj.cameraTarget.x,
                        modelObj.cameraTarget.y,
                        modelObj.cameraTarget.z
                    );
                    orbitControls.update();
                }
                if (modelObj.cameraPosition) {
                    for (const i in modelObj.cameraPosition)
                        orbitCamera.position[i] = modelObj.cameraPosition[i];
                }
                if (modelObj.cameraRotation) {
                    for (const i in modelObj.cameraRotation)
                        orbitCamera.rotation[i] = modelObj.cameraRotation[i];
                }

                if (modelObj.init) {
                    initRotation = modelObj.init;
                }
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

    function capitalizeFirstLetterToLowerCase(str) {
        if (str.length === 0) {
            return str;
        }
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    // Animate Rotation Helper function
    const rigRotation = (
        name,
        rotation = { x: 0, y: 0, z: 0 },
        dampener = 1,
        lerpAmount = 0.3
    ) => {
        if (currentVrm) {
            const Part = currentVrm.humanoid.getNormalizedBoneNode(
                capitalizeFirstLetterToLowerCase(name)
            );
            if (!Part) {
                return;
            }
            let euler = new THREE.Euler(
                (currentVrm.meta.metaVersion === "1" ? -1 : 1) *
                    rotation.x *
                    dampener,
                rotation.y * dampener,
                (currentVrm.meta.metaVersion === "1" ? -1 : 1) *
                    rotation.z *
                    dampener,
                rotation.rotationOrder || "XYZ"
            );
            let quaternion = new THREE.Quaternion().setFromEuler(euler);
            Part.quaternion.slerp(quaternion, lerpAmount); // interpolate
        } else if (skeletonHelper) {
            var skname = modelObj.binding[name].name; // convert name with model json binding info
            if (skname == "None") {
                return;
            }
            // find bone in bones by name
            var b = skeletonHelper.bones.find((bone) => bone.name == skname);

            if (b) {
                if (!initRotation[name]) {
                    initRotation[name] = {
                        x: b.rotation.x,
                        y: b.rotation.y,
                        z: b.rotation.z,
                    };
                }
                const bindingFunc = modelObj.binding[name].func;
                const order = modelObj.binding[name].order?.toUpperCase();
                const x = rotation.x * dampener;
                const y = rotation.y * dampener;
                const z = rotation.z * dampener;

                let euler = new THREE.Euler(
                    initRotation[name].x + evalAxisExpr(bindingFunc.fx, x, y, z),
                    initRotation[name].y + evalAxisExpr(bindingFunc.fy, x, y, z),
                    initRotation[name].z + evalAxisExpr(bindingFunc.fz, x, y, z),
                    order || rotation.rotationOrder || "XYZ"
                );
                let quaternion = new THREE.Quaternion().setFromEuler(euler);
                b.quaternion.slerp(quaternion, lerpAmount); // interpolate
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
            const Part = currentVrm.humanoid.getNormalizedBoneNode(
                capitalizeFirstLetterToLowerCase(name)
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
            name = modelObj.binding[name].name; // convert name with model json binding info
            // find bone in bones by name
            var b = skeletonHelper.bones.find((bone) => bone.name == name);
            if (b) {
                if (fileType == "fbx") {
                    dampener *= 100;
                }
                let vector = new THREE.Vector3(
                    position.x * dampener,
                    position.y * dampener,
                    -position.z * dampener
                );
                if (fileType == "fbx") {
                    vector.y -= 1.2 * dampener;
                }
                b.position.lerp(vector, lerpAmount); // interpolate
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
        const Blendshape = currentVrm.expressionManager;
        const PresetName = {
            A: "aa",
            Angry: "angry",
            Blink: "blink",
            BlinkL: "blinkLeft",
            BlinkR: "blinkRight",
            E: "ee",
            Fun: "happy",
            I: "ih",
            Joy: "relaxed",
            Lookdown: "lookDown",
            Lookleft: "lookLeft",
            Lookright: "lookRight",
            Lookup: "lookUp",
            Neutral: "neutral",
            O: "oh",
            Sorrow: "sad",
            U: "ou",
            Unknown: "unknown",
        };

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
        riggedFace.eye.l /= 0.8;
        riggedFace.eye.r /= 0.8;
        Blendshape.setValue(PresetName.BlinkL, riggedFace.eye.l);
        Blendshape.setValue(PresetName.BlinkR, riggedFace.eye.r);

        // Interpolate and set mouth blendshapes
        Blendshape.setValue(
            PresetName.I,
            lerp(riggedFace.mouth.shape.I / 0.8, Blendshape.getValue(PresetName.I), 0.3)
        );
        Blendshape.setValue(
            PresetName.A,
            lerp(riggedFace.mouth.shape.A / 0.8, Blendshape.getValue(PresetName.A), 0.3)
        );
        Blendshape.setValue(
            PresetName.E,
            lerp(riggedFace.mouth.shape.E / 0.8, Blendshape.getValue(PresetName.E), 0.3)
        );
        Blendshape.setValue(
            PresetName.O,
            lerp(riggedFace.mouth.shape.O / 0.8, Blendshape.getValue(PresetName.O), 0.3)
        );
        Blendshape.setValue(
            PresetName.U,
            lerp(riggedFace.mouth.shape.U / 0.8, Blendshape.getValue(PresetName.U), 0.3)
        );

        // PUPILS — interpolate pupil and keep a copy of the value
        let lookTarget = new THREE.Euler(
            lerp(oldLookTarget.x, riggedFace.pupil.y, 0.4),
            lerp(oldLookTarget.y, riggedFace.pupil.x, 0.4),
            0,
            "XYZ"
        );
        oldLookTarget.copy(lookTarget);
        currentVrm.lookAt.applier.applyYawPitch(lookTarget.y, lookTarget.x);
    };

    let positionOffset = { x: 0.0, y: 1.0, z: 0.0 };

    // Apply already-solved Kalidokit data to the model (the former animateVRM).
    const applyRigged = (results) => {
        if (!currentVrm && !skeletonHelper) {
            return;
        }
        if (!results) return;
        let riggedPose = results.riggedPose,
            riggedLeftHand = results.riggedLeftHand,
            riggedRightHand = results.riggedRightHand,
            riggedFace = results.riggedFace;

        // Animate Face
        if (riggedFace) {
            rigRotation("Neck", riggedFace.head, 0.7);
            if (fileType == "vrm") rigFace(structuredClone(riggedFace));
        }

        // Animate Pose
        if (riggedPose) {
            rigRotation(
                "Hips",
                {
                    x: riggedPose.Hips.rotation.x,
                    y: riggedPose.Hips.rotation.y,
                    z: riggedPose.Hips.rotation.z + hipRotationOffset,
                },
                0.7
            );
            rigPosition(
                "Hips",
                {
                    x: riggedPose.Hips.position.x + positionOffset.x, // Reverse direction
                    y: riggedPose.Hips.position.y + positionOffset.y, // Add a bit of height
                    z: -riggedPose.Hips.position.z + positionOffset.z, // Reverse direction
                },
                1,
                0.07
            );

            rigRotation("Chest", riggedPose.Chest, 0.25, 0.3);
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
        if (riggedLeftHand && fileType == "vrm") {
            rigRotation("LeftHand", {
                z: riggedPose?.LeftHand?.z ?? 0,
                y: riggedLeftHand.LeftWrist.y,
                x: riggedLeftHand.LeftWrist.x,
            });
            rigRotation("LeftRingProximal", riggedLeftHand.LeftRingProximal);
            rigRotation("LeftRingIntermediate", riggedLeftHand.LeftRingIntermediate);
            rigRotation("LeftRingDistal", riggedLeftHand.LeftRingDistal);
            rigRotation("LeftIndexProximal", riggedLeftHand.LeftIndexProximal);
            rigRotation("LeftIndexIntermediate", riggedLeftHand.LeftIndexIntermediate);
            rigRotation("LeftIndexDistal", riggedLeftHand.LeftIndexDistal);
            rigRotation("LeftMiddleProximal", riggedLeftHand.LeftMiddleProximal);
            rigRotation("LeftMiddleIntermediate", riggedLeftHand.LeftMiddleIntermediate);
            rigRotation("LeftMiddleDistal", riggedLeftHand.LeftMiddleDistal);
            rigRotation("LeftThumbProximal", riggedLeftHand.LeftThumbProximal);
            rigRotation("LeftThumbIntermediate", riggedLeftHand.LeftThumbIntermediate);
            rigRotation("LeftThumbDistal", riggedLeftHand.LeftThumbDistal);
            rigRotation("LeftLittleProximal", riggedLeftHand.LeftLittleProximal);
            rigRotation("LeftLittleIntermediate", riggedLeftHand.LeftLittleIntermediate);
            rigRotation("LeftLittleDistal", riggedLeftHand.LeftLittleDistal);
        }
        if (riggedRightHand && fileType == "vrm") {
            rigRotation("RightHand", {
                z: riggedPose?.RightHand?.z ?? 0,
                y: riggedRightHand.RightWrist.y,
                x: riggedRightHand.RightWrist.x,
            });
            rigRotation("RightRingProximal", riggedRightHand.RightRingProximal);
            rigRotation("RightRingIntermediate", riggedRightHand.RightRingIntermediate);
            rigRotation("RightRingDistal", riggedRightHand.RightRingDistal);
            rigRotation("RightIndexProximal", riggedRightHand.RightIndexProximal);
            rigRotation("RightIndexIntermediate", riggedRightHand.RightIndexIntermediate);
            rigRotation("RightIndexDistal", riggedRightHand.RightIndexDistal);
            rigRotation("RightMiddleProximal", riggedRightHand.RightMiddleProximal);
            rigRotation("RightMiddleIntermediate", riggedRightHand.RightMiddleIntermediate);
            rigRotation("RightMiddleDistal", riggedRightHand.RightMiddleDistal);
            rigRotation("RightThumbProximal", riggedRightHand.RightThumbProximal);
            rigRotation("RightThumbIntermediate", riggedRightHand.RightThumbIntermediate);
            rigRotation("RightThumbDistal", riggedRightHand.RightThumbDistal);
            rigRotation("RightLittleProximal", riggedRightHand.RightLittleProximal);
            rigRotation("RightLittleIntermediate", riggedRightHand.RightLittleIntermediate);
            rigRotation("RightLittleDistal", riggedRightHand.RightLittleDistal);
        }
    };

    // ---- recording (html2canvas + RecordRTC window globals) ----
    const elementToRecord = document.querySelector("#model");
    const canvas2d = document.getElementById("background-canvas");
    const context = canvas2d.getContext("2d");
    canvas2d.width = elementToRecord.clientWidth;
    canvas2d.height = elementToRecord.clientHeight;
    const recorder = new RecordRTC(canvas2d, { type: "canvas" });
    let isRecordingStarted = false;

    function startRecording() {
        isRecordingStarted = true;
        recorder.startRecording();
    }

    function stopRecording() {
        recorder.stopRecording(function () {
            isRecordingStarted = false;
            var blob = recorder.getBlob();
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "video.webm";
            link.dispatchEvent(
                new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                })
            );
            setTimeout(() => {
                window.URL.revokeObjectURL(blob);
                link.remove();
            }, 100);
        });
    }

    // ---- main render loop ----
    function animate() {
        requestAnimationFrame(animate);

        if (continuousData) {
            applyRigged(continuousData());
        }

        stats.update();

        if (currentVrm) {
            currentVrm.update(clock.getDelta()); // render physics
        }
        renderer.render(scene, orbitCamera);

        if (isRecordingStarted)
            html2canvas(elementToRecord).then(function (canvas) {
                context.clearRect(0, 0, canvas2d.width, canvas2d.height);
                context.drawImage(canvas, 0, 0, canvas2d.width, canvas2d.height);
            });
    }
    animate();

    // ---- keyboard: arrow/WASD nudge positionOffset, 'r' toggles recording ----
    document.addEventListener("keydown", (event) => {
        var step = 0.1;
        switch (event.key) {
            case "d":
            case "ArrowRight":
                positionOffset.x -= step;
                break;
            case "a":
            case "ArrowLeft":
                positionOffset.x += step;
                break;
            case "w":
            case "ArrowUp":
                positionOffset.y += step;
                break;
            case "s":
            case "ArrowDown":
                positionOffset.y -= step;
                break;
            case "r":
                if (isRecordingStarted) {
                    stopRecording();
                    document.getElementById("recording").style.display = "none";
                } else {
                    startRecording();
                    document.getElementById("recording").style.display = "";
                }
        }
    });

    // ---- drag an image onto the stage to set it as background ----
    elementToRecord.ondragcenter =
        elementToRecord.ondragover =
        elementToRecord.ondragleave =
            () => false;
    elementToRecord.ondrop = (e) => {
        e.preventDefault(); // stop Electron's default (opening/navigating to the dropped image)
        var file = e.dataTransfer.files[0];
        // Electron 32 removed File.path; webUtils.getPathForFile is the replacement (available since Electron 30)
        var { webUtils } = require("electron");
        var filePath = (
            webUtils && webUtils.getPathForFile
                ? webUtils.getPathForFile(file)
                : file.path
        ).replaceAll("\\", "/");
        elementToRecord.style.backgroundImage = `url(${filePath})`;
        elementToRecord.style.backgroundSize = "cover";
        elementToRecord.style.backgroundPosition = "center";
        elementToRecord.style.backgroundRepeat = "no-repeat";
    };

    // target presets (face / half / full) — adjusts the hip position offset
    function setTarget(target) {
        var zRe = 1;
        if (currentVrm) {
            zRe = currentVrm.meta.metaVersion === "1" ? -1 : 1;
        }
        if (target == "face") {
            positionOffset = { x: 0.0, y: 1.0, z: 0.0 };
        } else if (target == "half") {
            positionOffset = { x: 0.0, y: 1.1, z: zRe * 1 };
        } else if (target == "full") {
            positionOffset = { x: 0.0, y: 1.4, z: zRe * 2 };
        }
    }

    return {
        applyRigged,
        setTarget,
        startRecording,
        stopRecording,
        tickMocapStats: () => stats2.update(),
        get currentVrm() {
            return currentVrm;
        },
        get fileType() {
            return fileType;
        },
        scene,
        renderer,
    };
}
