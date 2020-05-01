let img = new Image();
img.src = 'images/spritesheet.png';
img.onload = function() {
  
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = 153;
const height = 218;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

function init() {
  window.requestAnimationFrame(step);
}

const cycleLoop = [0,1,2,3,4,5,6,7];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;

let animationFrameId;

function step() {
  frameCount++;
  if (frameCount < 50) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
    currentDirection++; // Next row/direction in the sprite sheet
  }
  // Reset to the "down" direction once we've run through them all
  if (currentDirection >= 3) {
    currentDirection = 0;
  }
  window.requestAnimationFrame(step);
}


