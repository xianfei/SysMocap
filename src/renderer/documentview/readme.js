/**
 *  Readme page funtions
 *
 *  A part of SysMocap, open sourced under Mozilla Public License 2.0
 *
 *  https://github.com/xianfei/SysMocap
 *
 *  xianfei 2022.3
 */

const { ipcRenderer, shell } = require("electron");
const { FindInPage } = require("electron-find");
const remote = require("@electron/remote");

// import setting utils
const { globalSettings } = require("../utils/setting.js");

// set theme
document.body.setAttribute(
    "class",
    "mdui-theme-primary-" +
        globalSettings.ui.themeColor +
        " mdui-theme-accent-" +
        globalSettings.ui.themeColor
);

window.$ = window.jQuery = require("../node_modules/jquery/dist/jquery.js");

var showNavBar = true;
var expandNavBar = true;

$.get("./readme.md", (str) => {
    // console.log(str)
    document.getElementById("content").innerHTML = marked.parse(str);
    var h1s = $("body").find("h1");
    var h2s = $("body").find("h2");
    var h3s = $("body").find("h3");
    var h4s = $("body").find("h4");
    var h5s = $("body").find("h5");
    var h6s = $("body").find("h6");

    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        if (!links[i].target) {
            if (
                links[i].hostname !== window.location.hostname ||
                /\.(?!html?)([a-z]{0,3}|[a-zt]{0,4})$/.test(links[i].pathname)
            ) {
                links[i].target = "_blank";
            }
        }
    }

    var headCounts = [
        h1s.length,
        h2s.length,
        h3s.length,
        h4s.length,
        h5s.length,
        h6s.length,
    ];
    var vH1Tag = null;
    var vH2Tag = null;
    for (var i = 0; i < headCounts.length; i++) {
        if (headCounts[i] > 0) {
            if (vH1Tag == null) {
                vH1Tag = "h" + (i + 1);
            } else {
                vH2Tag = "h" + (i + 1);
            }
        }
    }
    if (vH1Tag == null) {
        return;
    }

    $("#write").after(
        '<div class="BlogAnchor">' +
            '<p class="html_header">' +
            "<span></span>" +
            "</p>" +
            '<div class="AnchorContent" id="AnchorContent"> </div>' +
            "</div>"
    );

    var id = 0;

    var vH1Index = 0;
    var vH2Index = 0;
    $("body")
        .find("h1,h2,h3,h4,h5,h6")
        .each(function (i, item) {
            var id = "";
            var name = "";
            var tag = $(item).get(0).tagName.toLowerCase();
            var className = "";
            if (tag == vH1Tag) {
                id = name = ++vH1Index;
                name = id;
                vH2Index = 0;
                className = "item_h1";
            } else if (tag == vH2Tag) {
                id = vH1Index + "_" + ++vH2Index;
                name = vH1Index + "." + vH2Index;
                className = "item_h2";
            }
            $(item).attr("id", "wow" + id);
            $(item).addClass("wow_head");
            $("#AnchorContent").css(
                "max-height",
                $(window).height() - 80 + "px"
            );
            $("#AnchorContent").append(
                '<li><a class="nav_item ' +
                    className +
                    ' anchor-link" onclick="return false;" href="#wow' +
                    id +
                    '" link="#wow' +
                    id +
                    '">' +
                    "" +
                    "" +
                    $(this).text() +
                    "</a></li>"
            );
        });

    $(".anchor-link").click(function () {
        $("html,body").animate(
            { scrollTop: $($(this).attr("link")).offset().top },
            500
        );
    });

    var headerNavs = $(".BlogAnchor li .nav_item");
    var headerTops = [];
    $(".wow_head").each(function (i, n) {
        headerTops.push($(n).offset().top);
    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $.each(headerTops, function (i, n) {
            var distance = n - scrollTop;
            if (distance >= 0) {
                $(".BlogAnchor li .nav_item.current").removeClass("current");
                $(headerNavs[i]).addClass("current");
                return false;
            }
        });
    });

    if (!showNavBar) {
        $(".BlogAnchor").hide();
    }
    if (!expandNavBar) {
        $(this).html("目录▼");
        $(this).attr({ title: "展开" });
        $("#AnchorContent").hide();
    }
});

let findInPage = new FindInPage(remote.getCurrentWebContents(), {
    offsetTop: 30,
    offsetRight: 10,
});

var os = require("os");

window.onload = () => {
    $("body").css("background", "#ffffff00");
    $("html").css("background", "#ffffff22");
    for (var ee of $("a")) {
        if (ee.href.includes("http")||ee.href.endsWith(".pdf"))
            ee.onclick = (event) => {
                event.preventDefault();
                if (event.target.href.endsWith(".pdf"))
                    require("electron").ipcRenderer.send(
                        "openPDF",
                        event.target.href
                    );
                else shell.openExternal(event.target.href);
            };
        // ee.href = "javascript:void(0)";
    }

    $("body")
        .prepend(`<div class="mdui-color-theme-50" style="position: fixed;top:-10%;left:200px;filter: opacity(0.3);width: 100%;height: 120%;z-index:-1;"></div>
    <div class="border" id="border"></div>
    <div style="position: fixed;right: 0px;top: 0px;width: 100%;-webkit-app-region: drag;z-index: 10;">&nbsp;</div>
<div id='btns'></div>`);

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }

    // if (process.platform === 'darwin') {
    //   $('#border').hide();
    //   document.getElementsByClassName('html_header')[0].setAttribute('style', 'margin-top:20px')
    //   document.getElementById('btns').innerHTML = String.raw`<button class="mdui-btn mdui-btn-icon"
    //       style="position: fixed;right: 10px;top: 0;-webkit-app-region: no-drag;z-index: 11;" id="minbtn"
    //       onclick="findInPage.openFindWindow()" style="font-size: 20px;"><i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">search</i></button>
    //       `
    //   return
    // }

    document.getElementById(
        "btns"
    ).innerHTML = String.raw`<button class="mdui-btn mdui-btn-icon"
      style="position: fixed;right: 5px;top: 0px;-webkit-app-region: no-drag;z-index: 11;" id="closebtn"
      onclick="remote.getCurrentWindow().close()"><i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">close</i></button>
      <button class="mdui-btn mdui-btn-icon"
      style="position: fixed;right: 50px;top: 0px;-webkit-app-region: no-drag;z-index: 11;" id="maxbtn"
      ><i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">close</i></button>
  <button class="mdui-btn mdui-btn-icon"
      style="position: fixed;right: 95px;top: 0;-webkit-app-region: no-drag;z-index: 11;" id="minbtn"
      onclick="remote.getCurrentWindow().minimize()" style="font-size: small;"><font style="font-size: 18px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">—</font></button>
      <button class="mdui-btn mdui-btn-icon"
      style="position: fixed;right: 140px;top: 0;-webkit-app-region: no-drag;z-index: 11;" id="minbtn"
      onclick="findInPage.openFindWindow()" style="font-size: 20px;"><i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">search</i></button>
      `;

    maximizeBtn();
    document.getElementById("maxbtn").addEventListener("click", () => {
        maximizeBtn();
    });
    $("strong").addClass("mdui-text-color-theme");
    var c = $(".mdui-color-theme-50").css("background-color");
    $("body").css("--var-bg-70", c);
    $("body").css("--var-bg-50", c.split(")")[0] + ", 0.6)");
    $("body").css("--var-bg-30", c.split(")")[0] + ", 0.4)");

    $("body").css("--var-color", $(".mdui-text-color-theme").css("color"));
};

var isMax = true;
function maximizeBtn() {
    if (isMax) {
        remote.getCurrentWindow().restore();
        document.getElementById("maxbtn").innerHTML =
            '<i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">fullscreen</i>';
    } else {
        remote.getCurrentWindow().maximize();
        document.getElementById("maxbtn").innerHTML =
            '<i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">fullscreen_exit</i>';
    }
    isMax = !isMax;
}

$(window).resize(function () {
    $("#AnchorContent").css("max-height", $(window).height() - 80 + "px");
});
