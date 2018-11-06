'use strict'
var preload = () => { // eslint-disable-line
    // put preload code here
}

let capture;

var setup = () => { // eslint-disable-line
    background(255);

    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);

    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
    noStroke();

}


var draw = () => { // eslint-disable-line
    background(0);
    let img = capture.loadPixels();
    let hi = width/640;
    let vi = height/480;
    let s;
    for (let x = 0; x < 640; x+=10) {
        for (let y = 0; y < 480; y+=20) {
            fill(img.get(x, y))
            s = 20/(dist(x*hi,y*vi,mouseX,mouseY)/100);
            if (s>40) s=40;
            if((x+y)%20){
                triangle(x*hi - s, y*vi + s, x*hi, y*vi - s, x*hi + s, y*vi + s);
            }else{
                triangle(x*hi - s, y*vi - s, x*hi, y*vi + s, x*hi + s, y*vi - s);
            }
        }
    }
}
