var hr = hour();
var min = minute();
var sec = second();

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  scAngle = map(sc, 0, 60, 0, 360); 

  hour();
  minute();
  second();

  drawSprites();
}

  function hour() {

   hr = createSprite (400, 200, 50, 50);
   hr.shapeColor = ("red");

   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(5);
   line(400,200,600,175);
   pop();

 }

function minute() {

  min = createSprite (400, 200, 50, 50);
  min.shapeColor = ("green");
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(400,200,600,150);
  pop();
  
  }

  function second() {

    sec = createSprite (400, 200, 50, 50);
    sec.shapeColor = ("blue");
    
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(5);
    line(400,200,600,125);
    pop();
    
    }