var box = document.getElementById("animatebird");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;

function frame() {
    if (xpos > 350 || xpos < 0) {
        xstep = -xstep;
    }
    if (ypos > 350 || ypos < 0) {
        ystep = -ystep;
    }


    xpos = xpos + xstep;
    ypos = ypos + ystep;
    box.style.top = ypos + 'px';
    box.style.left = xpos + 'px';
}

var mousecoords = document.getElementById("mousecoords");
var clickcolor = document.getElementById("clickcolor");

document.addEventListener("mousemove", printMouseCoords);
document.addEventListener("click", colorChange);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    document.getElementById("animatebird").style.left = mouseX + "px";
    document.getElementById("animatebird").style.top = mouseY + "px";
}

function colorChange() {
    clickcolor.style.color = "pink";

}
