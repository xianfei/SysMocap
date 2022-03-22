/**
 *  Global Settings Utility (stronge in localStorage)
 * 
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 * 
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

function getSettings() {
    var settings = localStorage.getItem('sysmocap-global-settings');
    if (!settings) settings = {
        ui: {
            themeColor: '',
            useGlass: true
        },
        preview: {
            showSketelonOnInput: true,
            mirroringWhenCamera: true,
            mirroringWhenVideoFile: true
        },
        output: {
            antialias: true,
            usePicInsteadOfColor: false,
            bgColor: '#ffffff',
            bgPicPath: '',
        },
        mediapipe: {
            modelComplexity: 1,
            smoothLandmarks: true,
            minDetectionConfidence: 0.7,
            minTrackingConfidence: 0.7,
            refineFaceLandmarks: true
        },
        dev:{
            allowDevTools:false
        }
    }
}

var globalSettings = getSettings();

function saveSettings(){
    localStorage.setItem('sysmocap-global-settings',globalSettings)
}