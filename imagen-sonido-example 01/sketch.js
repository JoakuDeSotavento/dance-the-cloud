let img;
let mySound;

function preload() {
	img = loadImage('est.jpg');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('tc-free');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
    image(img, 0, 0, windowWidth, windowHeight);
    
    /*if(mouseIsPressed){
        mySound.play();
    }else{
        mySound.stop();
    }*/
}


function mousePressed() {
    mySound.play();
}

function doubleClicked() {
    mySound.stop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}