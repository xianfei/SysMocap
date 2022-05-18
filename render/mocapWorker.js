importScripts('../node_modules/@mediapipe/holistic/holistic.js');

var isProcessing = false;

const holistic = new Holistic({
    locateFile: (file) => {
        if (typeof require != "undefined")
            return __dirname + `/../node_modules/@mediapipe/holistic/${file}`;
        else return `../node_modules/@mediapipe/holistic/${file}`;
    },
});

holistic.onResults((results) => {
    postMessage(results);
    isProcessing = false;
});

addEventListener('message', function (e) {
    const type = e.data.type
    if(type==="set"){
        holistic.setOptions(e.data.args);
    }else if(type==="frame"){
        if(isProcessing)return;
        holistic.send(e.data.args);
        isProcessing = true;
    }
}, false);
