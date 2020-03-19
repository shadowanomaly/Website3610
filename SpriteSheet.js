let img = new Image();
img.src = 'spritesheet2.png';
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
const scale = 2;
const width = 57;
const height = 91;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [1,2,3,4,5,6,7,8,9,0,9];
let currentLoopIndex = 0;
let frameCount = 10;

function step() {
  document.getElementById("demo");
  frameCount++;
  if (frameCount < 50) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
  currentLoopIndex++;
  if(cycleLoop[currentLoopIndex] == 11){
  drawFrame(1, 0, 500, 0);
  drawFrame(0, 0, 700, 0);
  }
  currentLoopIndex++;
  window.requestAnimationFrame(step);
}
