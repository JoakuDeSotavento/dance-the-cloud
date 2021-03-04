let xStart, yStart, zStart; 
let xNoise, yNoise, zNoise;

let sideLength = 200;
let spacing = 50;

let rotacionX = 0;
let rotacionY = 0;
let profundidad = -250;

let rhymes, word;

let robotFont;

function preload() {
  robotFont = loadFont("Roboto-Regular.ttf");
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    frameRate(30);
    //smooth();
    noStroke();
    xStart = random(100);
    yStart = random(100);
    zStart = random(100);
    
    textFont(robotFont);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
    
    lexicon = new RiLexicon();
    findRhymes();
    setInterval(findRhymes, 4000);
}

function draw(){
    background(0);
    xStart += 0.01;
    yStart += 0.01;
    zStart += 0.01;
    
    xNoise = xStart;
    yNoise = yStart;
    zNoise = zStart;
    
    
    rotacionX = map(mouseX, 0, windowWidth, 0, 2*PI);
    rotacionY = map(mouseY, 0, windowHeight, 0, 2*PI);
    
    translate(-windowWidth/4, -windowHeight/4, profundidad);
    rotateX(rotacionY);
    rotateY(rotacionX);
    //console.log("rotacion X " + rotacionX + " mouse X" + mouseX);
    
   // text('Hellow word', 0, 0);
    
    for(let z = 0; z <= sideLength; z += spacing){
        zNoise += 0.1;
        yNoise += yStart;
        for(let y = 0; y <= sideLength; y += spacing){
            yNoise += 0.1;
            xNoise += xStart;
            for(let x = 0; x <= sideLength; x += spacing){
                xNoise += 0.1;
                
                drawPoint(x, y, z, noise(xNoise, yNoise, zNoise), rhymes[2]);
            }
        
        }
    }
}

function drawPoint(_x, _y, _z, noiseFactor, letra){
    push();
    translate(_x, _y, _z);
    //rotate(noiseFactor * radians(540));
    let grey = noiseFactor * 255;
    //let alph = noiseFactor * 255;
    fill(grey, 10);
    text(letra, 0, 0);
    //box(spacing, spacing, spacing);
    pop();
    
}

// this function fires with mousewheel movement
// over canvas only
function mouseWheel(event) {
  if (event.deltaY > 0) {
    profundidad = profundidad + 10;
  } else {
    profundidad = profundidad - 10;
  }
}

function findRhymes() { // called by timer

  var tmp = '';
  do {
    word = lexicon.randomWord();
    tmp = lexicon.rhymes(word);
  } while ( word && tmp.length < 3) 

  var arr = subset(tmp, 0, min(tmp.length, 13)); // max of 13 words
  rhymes = arr.join("\n");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}