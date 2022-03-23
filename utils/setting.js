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
    try {
        // if is a string
        if (typeof (settings) == typeof ("wxfnb"))
            settings = JSON.parse(settings)
    } catch (e) {
        console.log(e)
        settings = null
    }
    // load default settings when cannot read from localStroage
    if (!settings || !settings.valued) settings = {
        ui: {
            themeColor: 'deep-purple',
            isDark: false,
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
        dev: {
            allowDevTools: false
        },
        valued: true
    }
    return settings
}

var globalSettings = getSettings();

function saveSettings(settings) {
    if (settings)
        localStorage.setItem('sysmocap-global-settings', settings)
    else
        localStorage.setItem('sysmocap-global-settings', globalSettings)
}