var movingRect,fixedRect;  
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "yellow"
  fixedRect = createSprite(700,200,50,80);
  fixedRect.shapeColor = "yellow"
  fixedRect.velocityX = -2;
  movingRect.velocityX = 2;
}

function draw() {
  background(0);  
 
  bounceOff (fixedRect,movingRect);
   
  drawSprites();
}
