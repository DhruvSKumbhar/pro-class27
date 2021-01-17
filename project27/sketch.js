
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new ground(400,100,500,50);
	ground.shapeColor = color("black");
	
   bob1 = new Bob(400,500,30,30);
   bob1.shapeColor = color("black");
   World.add(world,bob1);

   bob2 = new Bob(300,500,30,30);
   bob2.shapeColor = color("black");
   World.add(world,bob2);

   bob3 = new Bob(200,500,30,30);
   bob3.shapeColor = color("black");
   World.add(world,bob3);

   bob4 = new Bob(500,500,30,30);
   bob4.shapeColor = color("black");
   World.add(world,bob4);

   bob5 = new Bob(600,500,30,30);
   bob5.shapeColor = color("black");
   World.add(world,bob5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
 ellipseMode(RADIUS);
 ellipse(bob1.position.x,bob1.position.y,50,50);

 ellipseMode(RADIUS);
 ellipse(bob2.position.x,bob2.position.y,50,50);

 ellipseMode(RADIUS);
 ellipse(bob3.position.x,bob3.position.y,50,50);

 ellipseMode(RADIUS);
 ellipse(bob4.position.x,bob4.position.y,50,50);

 ellipseMode(RADIUS);
 ellipse(bob5.position.x,bob5.position.y,50,50);
  
 
}



