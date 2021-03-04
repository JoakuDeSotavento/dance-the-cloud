let _num = 10;
let _circlesArr = [];
//Circles[] _circlesArr = {};

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    smooth();
    strokeWeight(1);
    fill(150, 150);
    drawCircles();
}

function draw() {
    background(255);
    for(let i = 0; i < _circlesArr.lengh; i++){
        let thisCirc = _circlesArr[i];
        thisCirc.updateMe();
    }
}

function mouseReleased(){
    drawCircles();
}


function drawCircles(){
    for(let i = 0; i < _num; i++){
        let thisCircle = new Circle();
        thisCircle.drawMe();
        _circlesArr = append(_circlesArr, thisCircle);
    }
}

function Circle() {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let radius = random(100) + 10;
    let linecol = color(random(255), random(255), random(255));
    let fillcol = color(random(255), random(255), random(255));
    let alpha = random(255);
    let xmove = random(10)-5;
    let ymove = random(10)-5;

    this.drawMe = function(){
        noStroke();
        fill(fillcol, alpha);
        ellipse(x, y, radius*2, radius*2);
        stroke(linecol, 150);
        noFill();
        ellipse(x, y, 10, 10);
    }
    this.updateMe = function(){
        x += xmove;
        y += ymove;
        if(x > (windowWidth+radius)){x = 0 - radius;}
        if(x < (0 - radius)){x = windowWidth + radius;}
        if(y > (windowHeight+radius)){y = 0 - radius;}
        if(y < (0 - radius)){y = windowHeight + radius;}
        drawMe();
    }
}