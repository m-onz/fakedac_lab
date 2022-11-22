
var logo;

function preload() {
  logo = loadImage('assets/logo2.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight-120, WEBGL);
  noFill();
  stroke(255);
  strokeWeight(6);
}

function draw() {
  background(0);
  push();
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50 * (noise(frameCount*PI/ 4000) * 200));
  pop();
  push();
  image(logo, -300, -300);
  pop();
}
