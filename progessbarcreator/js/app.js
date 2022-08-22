let progressContainer = document.querySelector(".progressContainer");
let progressBar = document.querySelector(".progressBar");
let runButton = document.querySelector(".runButton");
let copyButton = document.querySelector("#copyButton");
let cssCode = document.querySelector("#cssCode");
let jsCode = document.querySelector("#jsCode");
let htmlCode = document.querySelector("#htmlCode");
let alldocument;
let borderColors = document.querySelector("#borderColor");
let backgroundColors = document.querySelector("#backgroundColor");
let barInColor = document.querySelector("#barInColor");
let cssCodeS;
let control = 0;
let plusWidth = 0;
let progressBarInterval = document.querySelector("#barInterval");
let barWidth = document.querySelector("#barWidth");
let barHeight = document.querySelector("#barHeight");
let barBorder = document.querySelector("#barBorder");
let barBorderRadius = document.querySelector("#barBorderRadius");

window.onload = function () {
  sessinLoad();
};
runButton.onclick = function () {
  progressSession();
};
islem();
function progressSession() {
  if (control == 0) {
    if (barWidth.value > 300) {
      barWidth.value = 300;
    } else if (barHeight.value > 40) {
      barHeight.value = 40;
    } else if (progressBarInterval.value > 10) {
      progressBarInterval.value = 10;
    } else if (barBorder.value > 7) {
      barBorder.value > 7;
    } else if (barBorderRadius > 10) {
      barBorderRadius.value = 10;
    } else {
      progressBar.style.height = "100%";
      progressContainer.style.width = barWidth.value + "px";
      progressContainer.style.height = barHeight.value + "px";
      progressContainer.style.borderColor = borderColors.value;
      barBorder.value + "px" + " solid" + " black";
      progressContainer.style.borderRadius = barBorderRadius.value + "px";
      progressContainer.style.borderColor = progressBar.style.width = "100%";
      progressBar.style.transitionDuration = progressBarInterval.value + "s";
      progressContainer.style.borderColor = borderColors.value;
      progressContainer.style.backgroundColor = backgroundColors.value;
      progressBar.style.backgroundColor = barInColor.value;
      runButton.innerHTML = "Restart"; //
      sessinLoad();
      control = 1;
    }
  } else {
    progressContainer.style.height = barHeight.value + "px";
    progressContainer.style.borderWidth = barBorder.value + "px";
    progressContainer.style.borderRadius = barBorderRadius.value + "px";
    progressBar.style.height = "100%";
    progressBar.style.width = "0%";
    progressBar.style.transitionDuration = "0s";
    runButton.innerHTML = "Run";
    control = 0;
  }
}

function islem() {
  progressBar.style.height = "100%";
  progressContainer.style.width = barWidth.value + "px";
  progressContainer.style.height = barHeight.value + "px";
  progressContainer.style.border = barBorder.value + "px" + " solid" + " black";
  progressContainer.style.borderRadius = barBorderRadius.value + "px";
  progressBar.style.transitionDuration = progressBarInterval.value + "s";
  progressContainer.style.borderColor = borderColors.value;
  progressContainer.style.backgroundColor = backgroundColors.value;
  progressBar.style.backgroundColor = barInColor.value;
}

progressBarInterval.oninput = function () {
  if (progressBarInterval.value > 10) {
    barWidth.value = 10;
  }
  islem();
  sessinLoad();
};
barWidth.oninput = function () {
  if (barWidth.value > 300) {
    barWidth.value = 300;
  }
  islem();
  sessinLoad();
};
barHeight.oninput = function () {
  if (barHeight.value > 40) {
    barHeight.value = 40;
  }
  islem();
  sessinLoad();
};
barBorder.oninput = function () {
  if (barBorder.value > 7) {
    barBorder.value = 7;
  }
  islem();
  sessinLoad();
};
barBorderRadius.oninput = function () {
  if (barBorderRadius.value > 10) {
    barBorderRadius.value = 10;
  }
  islem();
  sessinLoad();
};
borderColors.oninput = function () {
  progressContainer.style.borderColor = borderColors.value;
  islem();
  sessinLoad();
};
barInColor.oninput = function () {
  progressBar.style.backgroundColor = barInColor.value;
  islem();
  sessinLoad();
};
backgroundColors.oninput = function () {
  progressContainer.style.backgroundColor = backgroundColors.value;
  islem();
  sessinLoad();
};
copyButton.onclick = function () {
  navigator.clipboard.writeText(
    cssCode.textContent + htmlCode.textContent + jsCode.textContent
  );
  alert(
    "Copied the text" +
      cssCode.textContent +
      htmlCode.textContent +
      jsCode.textContent
  );
};
function sessinLoad() {
  cssCode.innerHTML =
    '<code style="background-color:purple; border-radius:2px; color:white"><code><</code>style></code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">.progressContainer { </code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">background-color:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    backgroundColors.value +
    ";" +
    "</code><br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">width:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    progressContainer.style.width +
    ";" +
    "</code><br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">height:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    progressContainer.style.height +
    ";" +
    "</code><br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">overflow:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">hidden;</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">border:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    barBorder.value +
    "px " +
    "solid " +
    borderColors.value +
    ";" +
    "</code><br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">}</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">.progressBar {</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">background-color:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    barInColor.value +
    ";" +
    "</code><br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">width:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">0px;</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">transition-property:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">width;</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white">height:</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;">' +
    progressBar.style.height +
    ";" +
    "<br>" +
    '<code style="background-color:purple; border-radius:2px; color:white">}</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white"><code><</code>/style></code><br>';

  jsCode.innerHTML =
    '<code style="background-color:purple; border-radius:2px; color:white"><code><</code>script></code><br>' +
    '<code style="background-color:blue; border-radius:2px; color:white";>let runButton=document.querySelector(".runButton");</code><code style="background-color:aqua; border-radius:2px; margin-left:5px;"><br>' +
    '<code style="background-color:blue; border-radius:2px; color:white">let progressBar=document.querySelector(".progressBar");</code><br>' +
    '<code style="background-color:blue; border-radius:2px; color:white">runButton.onclick=function(){</code><br>' +
    '<code style="background-color:blue; border-radius:2px; color:white">progressBar.style.transitionDuration=</code><code style="background-color:aqua; border-radius:2px; margin-left:1px;">' +
    '"' +
    progressBar.style.transitionDuration +
    '"' +
    ";" +
    "</code><br>" +
    '<code style="background-color:blue; border-radius:2px; color:white">progressBar.style.width="100%";</code><br>' +
    '<code style="background-color:blue; border-radius:2px; color:white">/* Your Session */<br>}</code><br>' +
    '<code style="background-color:purple; border-radius:2px; color:white"><code><</code>/script></code><br>';
  htmlCode.innerHTML =
    '<code style="background-color:#46f98c; color:blue;"><code><</code>div class<code>="progressContainer"></code></code><br>' +
    '<code style="background-color:#46f98c; color:blue;"><code><</code>div class<code>="progressBar"></code><<code>/div></code></code><br><code style="background-color:#46f98c; color:blue";><<code>/div></code><br>' +
    '<code style="background-color:#46f98c; color:blue;"><code><</code>button class<code>="runButton">Run</code><<code>/button></code></code><br>';
}

/*Your Session */
