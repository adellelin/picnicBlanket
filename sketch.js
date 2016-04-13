var soundButton = [];
var sounds = [];
var time = [];

var soundFiles = [
  "sounds/1.mp3", "sounds/3.mp3",
  "sounds/4.mp3", "sounds/5.mp3",
  "sounds/6.mp3", "sounds/8.mp3",
  "sounds/10.mp3", "sounds/11.mp3",
  "sounds/13.mp3", "sounds/14.mp3"
];

var keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]; // find key code for ";"

function preload() {
  for (var i = 0; i < soundFiles.length; i++) {
    sounds[i] = loadSound(soundFiles[i]);
  }
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255, 200, 200);
  console.log(soundFiles.length);
  //ellipse(100, 100, 25, 25);
  for (var i = 0; i < soundFiles.length; i++) {
    //for (var i in soundFiles.length) {
    //console.log("hi");

    // SoundButton(xpos, ypos, size, red, green, blue)
    soundButton[i] = new SoundButton(displayWidth / (soundFiles.length + 1) * (i + 1),
      displayHeight / 2.5, 500 / soundFiles.length, 255 * (10 - i) / 5, 255 * i / 20, 255 * i / 5, 200);
  }

}



function draw() {

  for (var i = 0; i < soundFiles.length; i++) {

    soundButton[i].display();


    if (keyWentDown(keys[i])) {
      // once key pressed, change button color immediately, record time
      soundButton[i].r = 255;
      soundButton[i].g = 255;
      soundButton[i].b = 255;
      //soundButton[i].a = 0;
      time[i] = frameCount;
      if (sounds[i].play() === false) {
        sounds[i].play();
      } else {
        sounds[i].stop();
        sounds[i].play();
      }
      console.log(time);
    }
    // when 20 framCounts has passed for each button time, change color back to original
    if (frameCount > time[i] + 20) {
      soundButton[i].r = 255 * (10 - i) / 5;
      soundButton[i].g = 255 * i / 20;
      soundButton[i].b = 255 * i / 5;
      //soundButton[i].a = 255;

      console.log(time);
    }
  }
}

function SoundButton(xpos, ypos, size, red, green, blue, alpha) {
  this.x = xpos;
  this.y = ypos;
  this.r = red;
  this.g = green;
  this.b = blue;
  this.a = alpha;
  this.size = size;
  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.size, this.size);
  }

}