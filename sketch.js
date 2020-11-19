var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	background(0,0,0)
	
	package=createSprite(width/2, 100, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 100, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 220 , 5 , {restitution:1.0,static:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	package.x= packageBody.position.x 
	package.y= packageBody.position.y 
  }

  matter.packageBody.setStatic(false);
}



