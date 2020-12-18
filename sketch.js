// Hi this is my project24
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1 , trash2 , trash3;
var paper;
var ground; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,690,800,20);
	trash1 = new Trash(580,675,150,15);
	trash2 = new Trash(660,645,15,70);
	trash3 = new Trash(500,645,15,70);
	paper = new Paper(100,645,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
trash1.display();
trash2.display();
trash3.display();
paper.display();
  drawSprites();
 //keyPressed();
}

function keyPressed()
{


	if(keyCode === UP_ARROW){


		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:220});
	}
}

