let xStart, yStart, xNoise, yNoise;

function setup(){
    createCanvas(800, 600);
    background(0);
    xStart = random(10);
    yStart = random(10);
    frameRate(30);
    smooth();
}

function draw(){
    background(0);
    xStart += 0.1;
    yStart += 0.1;
    
    xNoise = xStart;
    yNoise = yStart;
    
    for(let y = 0; y <= 600; y += 5){
        yNoise += 0.1;
        xNoise += xStart;
        for(let x = 0; x <= 800; x += 5){
            xNoise += 0.1;
            drawPoint(x, y, noise(xNoise, yNoise));
        }
        
    }
    
}

function drawPoint(x, y, noiseFactor){
    push();
    translate(x,y);
    rotate(noiseFactor * radians(540));
    noStroke();
    let edgeSize = noiseFactor * 35;
    let grey = 150 + (noiseFactor * 120);
    let alph = 150 + (noiseFactor * 120);
    fill(grey, alph);
    ellipse(0,0, edgeSize, edgeSize/2);
    pop();
    
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}