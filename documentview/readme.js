const { remote, ipcRenderer,shell } = require('electron')
const { FindInPage } = require('electron-find')

window.$ = window.jQuery = require("../libs/jquery.js");

let findInPage = new FindInPage(remote.getCurrentWebContents(), {
  offsetTop: 30,
  offsetRight: 10
})

var os = require('os');

window.onload = () => {

  $('body').css('background','#ffffff00')
  $('html').css('background','#ffffff22')
  document.body.className += ' mdui-theme-primary-deep-purple mdui-theme-accent-deep-purple'
  for(var ee of $('.url')) {
    ee.onclick = (event)=>{
      event.preventDefault();
      shell.openExternal(event.target.href);
    }
    // ee.href = "javascript:void(0)";
  }

  $('body').prepend(`<div class="mdui-color-theme-50" style="position: fixed;top:-10%;left:200px;filter: opacity(0.3);width: 100%;height: 120%;"></div>
    <div class="border" id="border"></div>
    <div style="position: fixed;right: 0px;top: 0px;width: 100%;-webkit-app-region: drag;z-index: 10;">&nbsp;</div>
<div id='btns'></div>`);

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  if (process.platform === 'darwin') {
    $('#border').hide();
    document.getElementsByClassName('html_header')[0].setAttribute('style', 'margin-top:20px')
    document.getElementById('btns').innerHTML = String.raw`<button class="mdui-btn mdui-btn-icon"
        style="position: fixed;right: 10px;top: 0;-webkit-app-region: no-drag;z-index: 11;" id="minbtn"
        onclick="findInPage.openFindWindow()" style="font-size: 20px;"><i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">search</i></button>
        `
    return
  }

  document.getElementById('btns').innerHTML = String.raw`<button class="mdui-btn mdui-btn-icon"
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
      `

  maximizeBtn()
  document.getElementById('maxbtn').addEventListener('click', () => {
    maximizeBtn()
  })
  $('strong').addClass('mdui-text-color-theme')
  var c = $('.mdui-color-theme-50').css('background-color')
  $('body').css('--var-bg-70',c)
  $('body').css('--var-bg-50',c.split(')')[0]+', 0.6)')
  $('body').css('--var-bg-30',c.split(')')[0]+', 0.4)')

  $('body').css('--var-color',$('strong').css('color'))
}

var isMax = true;
function maximizeBtn() {
  if (isMax) {
    remote.getCurrentWindow().restore();
    document.getElementById('maxbtn').innerHTML = '<i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">fullscreen</i>';
  } else {
    remote.getCurrentWindow().maximize();
    document.getElementById('maxbtn').innerHTML = '<i class="mdui-icon material-icons" style="font-size: 20px;text-shadow: 0 0 3px #fff, 0 0 3px #fff; ">fullscreen_exit</i>';
  }
  isMax = !isMax
}