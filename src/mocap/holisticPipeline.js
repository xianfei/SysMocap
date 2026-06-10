/**
 *  MediaPipe Holistic detection pipeline (shared).
 *
 *  Owns camera/video input + the Holistic model + the input-skeleton overlay,
 *  and per frame solves the landmarks into Kalidokit rigged data, handing it to
 *  onRigged({riggedPose, riggedLeftHand, riggedRightHand, riggedFace}). The
 *  consumer (integrated mocaprender wrapper) then forwards and/or applies it via
 *  the shared avatarRenderer — so the detection half lives here, the render half
 *  in avatarRenderer.js, and neither is duplicated.
 *
 *  Holistic / Kalidokit / drawConnectors / drawLandmarks / POSE_CONNECTIONS /
 *  FACEMESH_TESSELATION / HAND_CONNECTIONS are window globals provided by the
 *  page's classic <script> tags (loaded before this module runs).
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *  https://github.com/xianfei/SysMocap
 */

/**
 * @param {object} opts
 * @param {object} opts.settings  globalSettings (mediapipe.* + preview.showSketelonOnInput)
 * @param {string} opts.fileType  model file type ("vrm" gates right-hand solving, as before)
 * @param {(rigged: object) => void} opts.onRigged  called per detected frame
 */
export function createHolisticPipeline({ settings, fileType, onRigged }) {
    const videoElement = document.querySelector(".input_video");
    const guideCanvas = document.querySelector("canvas.guides");
    let started = false;

    // Landmarks -> Kalidokit rigged data (note: MediaPipe's 3D-landmark field is
    // the mangled `results.za`, and the hand landmarks arrive reversed).
    const solve = (results) => {
        const faceLandmarks = results.faceLandmarks;
        const pose3DLandmarks = results.za;
        const pose2DLandmarks = results.poseLandmarks;
        const leftHandLandmarks = results.rightHandLandmarks;
        const rightHandLandmarks = results.leftHandLandmarks;

        let riggedPose, riggedLeftHand, riggedRightHand, riggedFace;
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
        return { riggedPose, riggedLeftHand, riggedRightHand, riggedFace };
    };

    const drawResults = (results) => {
        guideCanvas.width = videoElement.videoWidth;
        guideCanvas.height = videoElement.videoHeight;
        let canvasCtx = guideCanvas.getContext("2d");
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
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
            // draw pupils
            drawLandmarks(
                canvasCtx,
                [results.faceLandmarks[468], results.faceLandmarks[468 + 5]],
                { color: "#ffe603", lineWidth: 2 }
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

    const onResults = (results) => {
        if (settings.preview.showSketelonOnInput) drawResults(results);
        onRigged(solve(results));
        if (!started) {
            document.getElementById("loading")?.remove();
            if (localStorage.getItem("useCamera") == "file") videoElement.play();
            started = true;
        }
    };

    const holistic = new Holistic({
        // MediaPipe (with nodeIntegration on) loads these sibling assets via
        // Node fs, so locateFile must return an ABSOLUTE filesystem path, not a
        // URL/relative path (fs.open would resolve it against cwd -> ENOENT).
        // Derive the absolute path from the page URL so it works from the
        // bundled chunk without relying on __dirname/cwd. Pages live at
        // dist/src/pages/<page>/render.html, so node_modules (copied to the dist
        // root) is three levels up: dist/src/pages/<page>/ -> dist/node_modules.
        locateFile: (file) => {
            const rel = `../../../node_modules/@mediapipe/holistic/${file}`;
            try {
                return require("url").fileURLToPath(
                    new URL(rel, window.location.href)
                );
            } catch (e) {
                return rel;
            }
        },
    });
    holistic.setOptions({
        modelComplexity: parseInt(settings.mediapipe.modelComplexity),
        smoothLandmarks: settings.mediapipe.smoothLandmarks,
        minDetectionConfidence: parseFloat(settings.mediapipe.minDetectionConfidence),
        minTrackingConfidence: parseFloat(settings.mediapipe.minTrackingConfidence),
        refineFaceLandmarks: settings.mediapipe.refineFaceLandmarks,
    });
    holistic.onResults(onResults);

    // input: live camera or a video file, driven by requestVideoFrameCallback
    const useCamera = localStorage.getItem("useCamera") == "camera";

    // input-preview horizontal mirror, configurable per source. The .input_video +
    // .guides ship an inline scale(-1,1), so set the transform EXPLICITLY here (not "")
    // to let the toggle win. Display-only: MediaPipe reads the raw videoElement, so
    // this never affects detection.
    const mirrorPreview = useCamera
        ? settings.preview.mirroringWhenCamera
        : settings.preview.mirroringWhenVideoFile;
    videoElement.style.transform = guideCanvas.style.transform = mirrorPreview
        ? "scale(-1, 1)"
        : "scale(1, 1)";

    if (useCamera) {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    deviceId: localStorage.getItem("cameraId"),
                    width: 1280,
                    height: 720,
                },
            })
            .then(function (stream) {
                videoElement.srcObject = stream;
                videoElement.play();
                var videoFrameCallback = async () => {
                    await holistic.send({ image: videoElement });
                    videoElement.requestVideoFrameCallback(videoFrameCallback);
                };
                videoElement.requestVideoFrameCallback(videoFrameCallback);
            })
            .catch(function (err0r) {
                alert(err0r);
            });
    } else {
        videoElement.src = localStorage.getItem("videoFile");
        videoElement.loop = true;
        videoElement.controls = true;
        var videoFrameCallback = async () => {
            await holistic.send({ image: videoElement });
            videoElement.requestVideoFrameCallback(videoFrameCallback);
        };
        videoElement.requestVideoFrameCallback(videoFrameCallback);
    }

    return { videoElement, guideCanvas };
}
