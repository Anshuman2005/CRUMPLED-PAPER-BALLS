
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var world;
var engine;

var ground;
var ball;
var left;
var right;


function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Ball(100,400,20);

	ground = new Ground(width/2,450,width,20);
	left = new Ground(670,380,20,120);
    right = new Ground(770,380,20,120);


	rectMode(CENTER);
    ellipseMode(RADIUS);
  
}


function draw() {

  background(0);
   
  ball.show();
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,{ x:0.5,y:0 },{x:0.05,y:0});
	}
}

