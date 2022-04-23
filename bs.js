/**
 *  Run SysMocap in B/S Mode
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.4
 */

// output art text to console
var figlet = require("figlet");

console.log(
    "\x1b[95m%s\x1b[0m",
    figlet.textSync("SysMocap", {
        horizontalLayout: "full",
    })
);

console.log(
    "\x1b[95m%s\x1b[0m",
    "\n   Video-based Motion Capture & Character Animation System"
);
console.log("\x1b[94m%s\x1b[0m", "\t\t\t\t\t\tby xianfei");

const sections = [
    {
        header: "SysMocap",
        content:
            "A real-time video-based motion capture system for virtual character animating and rendering. It's a free and open-sourced software.",
    },
    {
        header: "Options",
        optionList: [
            {
                name: "help",
                type: Boolean,
                description: "Print this usage guide.",
            },
            {
                name: "bsmode",
                type: Boolean,
                description: "Run SysMocap on B/S mode.",
            },
            {
                name: "port",
                typeLabel: "{underline number}",
                description: "The HTTP port when running on B/S mode.",
            },
            {
                name: "reset",
                type: Boolean,
                description: "Reset preferences and run sysmocap",
            },
            {
                name: "disable-acrylic",
                type: Boolean,
                description: "(Windows Only) disable acrylic effects",
            },
        ],
    },
];

const argv = require("simple-argv");

if (argv.help) {
    var commandLineUsage = require("command-line-usage");
    console.log(commandLineUsage(sections));
    process.exit(0);
}

if (argv.bsmode) {
    console.log("\nRunning SysMocap on B/S mode.\nBooting Server...");

    const express = require("express");
    const app = express();

    app.use(express.static(__dirname));

    var port = argv.port ? argv.port : 8080;

    app.listen(port, "0.0.0.0", function () {
        console.log(
            "\x1b[92m%s%d\x1b[0m",
            "\nHTTP server listening on port ",
            port
        );
    });

    app.get("/", (req, res) => {
        res.redirect("/mainview/framework.html");
    });
}
