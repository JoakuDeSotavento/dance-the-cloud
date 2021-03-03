/**
 *  Play a random note
 *  every time you press a key

var monoSynth;


function setup() {

    createCanvas(400, 400);
    monoSynth = new p5.MonoSynth();

    text('press to play a random note at a random velocity', 20, 20);
}

function draw(){
    background(0);

}

function mousePressed() {
    // pick a random midi note

    var midiVal = midiToFreq(round( random(50,72) ));
    let midiMouse = map(mouseX, 0, width, 0, 127);
    monoSynth.triggerAttack(midiMouse, random() );
}

function mouseReleased() {
    monoSynth.triggerRelease();
}
*/

let monoSynth;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSynth);
  background(220);
  textAlign(CENTER);
  text('tap to play', width/2, height/2);

  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();

  let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}