/**
 *  Process for SysMocap Web Server
 * 
 *  Forwarding motion data with WebSocket and display over HTTP.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.5
 */

var my_server = require("./server.js");

process.on("message", (message) => {
    if(message.type == 'startWebServer'){
        my_server.startServer(...message.arg);
    }else if(message.type == 'stopWebServer'){
        if(my_server)my_server.stopServer();
        my_server = null;
    }else if(message.type == 'sendBroadcast'){
        if(my_server)my_server.sendBroadcast(message.arg);
    }
});