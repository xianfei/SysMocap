<!--
  Camera / video input preview for the integrated mocap page: the source video
  and the skeleton-overlay canvas. holisticPipeline querySelects .input_video and
  canvas.guides (which this renders) and drives them imperatively, so this is a
  purely presentational component.

  A part of SysMocap, open sourced under Mozilla Public License 2.0
  https://github.com/xianfei/SysMocap
-->
<template>
    <div class="preview">
        <!-- skeleton guides -->
        <canvas
            class="guides"
            style="
                width: 48%;
                border: solid 1px #ccc;
                border-radius: 10px;
                height: auto;
                overflow: hidden;
                position: fixed;
                top: 10px;
                left: 50%;
                z-index: 1000;
                pointer-events: none;
                transform: scale(-1, 1);
            "
        ></canvas>
        <!-- camera / video input -->
        <video
            class="input_video"
            muted
            style="
                width: 48%;
                border: solid 1px #ccc;
                border-radius: 10px;
                height: auto;
                overflow: hidden;
                position: fixed;
                top: 10px;
                left: 50%;
                transform: scale(-1, 1);
            "
        ></video>
    </div>
</template>

<script>
export default { name: "InputPreview" };
</script>
