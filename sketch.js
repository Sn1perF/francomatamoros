var diam1=0;
let x = 100,
  y = 100,
  angle = 0.0,
  segLength = 90;

function setup() {
  createCanvas(700,700);
  strokeWeight(20.0);
  stroke(255, 100);
}
  // this setup locks the backround 

function draw() {
  background("#33ffbb");
  fill("#f70b00");
  stroke("#ffff00");
  strokeWeight(5);
  ellipse(400,200,diam1,diam1); //this places the 3rd still ball//


  fill("#f70b00");
  ellipse(mouseX,mouseY,diam1,diam1);
  {
  textSize(50);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hello there",200,diam1,diam1);//this allows the hello come into the screen//
  }
//this tells the line and ball to follow the cursor//
  dx =mouseX- x;
  dy =mouseY- y;
  angle1 =atan2(dy,dx);
  x =mouseX-cos(angle1) * segLength;
  y =mouseY-sin(angle1) * segLength;
  segment(x,y,angle1);
  ellipse(x,y,diam1,diam1);
  
}
function mousePressed(){ //allows the balls to increase size and allows the text to move//
  if(diam1>70){
    diam1=0;
  }else{
  diam1=diam1+5;
  }
}
function segment(x,y,b) { //this places the ball and second line//
  push();
  translate(x, y);
  rotate(b);
  pop();
}
