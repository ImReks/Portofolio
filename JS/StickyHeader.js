let width = window.innerWidth;
const minwidth = 640;
window.onload=function(){StickHeader()}
window.onresize = function(){StickHeader()}
function StickHeader() {
    width = window.innerWidth;
    if (width < minwidth) {
        document.getElementById("header").style.position = "relative";
    }
    else {
        document.getElementById("header").style.position = "fixed";
    }
}

