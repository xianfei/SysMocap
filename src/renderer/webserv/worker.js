const { Worker, parentPort } = require("worker_threads");

var my_server = require("./server.js");

parentPort.on("message", (message) => {
    if(message.type == 'startWebServer'){
        my_server.startServer(...message.arg);
    }else if(message.type == 'stopWebServer'){
        if(my_server)my_server.stopServer();
        my_server = null;
    }else if(message.type == 'sendBroadcast'){
        if(my_server)my_server.sendBroadcast(message.arg);
    }
});
