/**
 *  SysMocap Web Server
 * 
 *  Forwarding motion data with WebSocket and display over HTTP.
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.5
 */

const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const io =  require('socket.io');

app.use("/node_modules", express.static(__dirname + "/../node_modules"));
app.use(express.static(__dirname + "/public"));

// var expressWs = require("express-ws")(app);
var modelPath = null;
var server = null;

let opts = {
    key: fs.readFileSync(__dirname + '/../webserv/ssl/private.pem'),
    cert: fs.readFileSync(__dirname + '/../webserv/ssl/file.crt')
};
let httpx = require('./httpx');
let httpxServer = httpx.createServer(opts, app);
let ws = io(httpxServer.http);
let wss = io(httpxServer.https);

// app.ws("/", function (ws, req) {
//     ws.on("message", function (msg) {
//         console.log("[ Mocap Web Server ][ From Client ]" + msg);
//     });
// });

app.get("/model", (req, res) => {
    if (modelPath) res.sendFile(modelPath);
    else res.send("Model file undefined");
});

var useWebXR = false;

app.get("/useWebXR", (req, res) => {
    res.send(JSON.stringify(useWebXR));
});

module.exports = {
    startServer: function (port, modelPath_,useXR) {
        modelPath = path.resolve(__dirname, modelPath_);
        useWebXR = useXR;
        server = httpxServer.listen(port, "0.0.0.0", function () {
            console.log("[ Mocap Forwarding Server ] Server Started.");
        });
    },
    stopServer: function () {
        if (server) {
            server.close();
            console.log("[ Mocap Forwarding Server ] Server Stoped.");
            server = null;
        } else console.error("[ Mocap Forwarding Server ] Server not running.");
    },
    sendBroadcast: function (obj) {
        // for (var ws of expressWs.getWss().clients) {
        //     ws.send(obj);
        // }
        if(wss)wss.emit('message',obj)
        if(ws)ws.emit('message',obj)
        
    },
};
