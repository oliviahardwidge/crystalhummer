var box = document.getElementById("animationbird");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;
var id = setInterval(frame, 5);

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
