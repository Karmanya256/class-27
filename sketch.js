const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var table,r1,b1,r2,b2,r3,b3,r4,b4,r5,b5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	table = new Board(350,100,300,30);
	world.add(world,table);

	b1 = new Bob(250,300);
	b2 = new Bob(250,300);
	b3 = new Bob(250,300);
	b4 = new Bob(250,300);
	b5 = new Bob(250,300);


	r1 = new Rope(b1.body,board.body,-100,0);
	world.add(world,r1);

	r2 = new Rope(b2.body,board.body,-50,0);
	world.add(world,r2);

	r3 = new Rope(b3.body,board.body,0,0);
	world.add(world,r3);

	r4 = new Rope(b4.body,board.body,+50,0);
	world.add(world,r4);

	r5 = new Rope(b5.body,board.body,+100,0);
	world.add(world,r5);

	{
		isStatic: true
	};
	  World.add(world, ground);
	}

	


	Engine.run(Engine);
  



function draw() {
  
  background(0);
  Engine.update(engine);

	table.display();
	
	b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();
	
	r1.dispaly();
	r2.dispaly();
	r3.dispaly();
	r4.dispaly();
	r5.dispaly();
  
  drawSprites();
 
}
function keypressed(){
if(keycode === 32){
	Matter.body.applyForce(b1.body,b1.body.position,{x:-730,})
}

}



