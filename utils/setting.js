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