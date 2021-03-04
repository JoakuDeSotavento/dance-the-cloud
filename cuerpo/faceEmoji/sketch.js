let video;
let poseNet;
let poses = [];
let emojiCode;

function setup() {
  createCanvas(640 * 1.3, 480 * 1.3);
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function (results) {
    poses = results;
  });
  video.hide();

  textAlign(CENTER, CENTER);
  emojiCode = floor(random(128512, 128592));
}

function modelReady() {
  // select('#status').html('Model Loaded');
}

function draw() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);

  drawEmoji();
  pop();
}

function drawEmoji() {
  if (frameCount % 60 == 0) {
    emojiCode = floor(random(128512, 128581));
  }

  let emojiText = String.fromCodePoint(emojiCode);

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;

    let nosePoint = pose.keypoints[0];
    let leftEarPoint = pose.keypoints[3];
    let rightEarPoint = pose.keypoints[4];

    let noseX, noseY, leftX, leftY, rightX, rightY;

    if (nosePoint.score > 0.2) {
      noseX = nosePoint.position.x;
      noseY = nosePoint.position.y;
    }

    if (leftEarPoint.score > 0.2) {
      leftX = leftEarPoint.position.x;
      leftY = leftEarPoint.position.y;
    }

    if (rightEarPoint.score > 0.2) {
      rightX = rightEarPoint.position.x;
      rightY = rightEarPoint.position.y;
    }

		if(rightX != null && rightY != null && leftX != null && leftY != null && noseX != null && noseY != null){
    	let dis = dist(rightX, rightY, leftX, leftY);
			textSize(dis * 1.75);
    	text(emojiText, noseX, noseY);
		}
  }
}
