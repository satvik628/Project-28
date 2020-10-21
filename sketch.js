
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var boy,boyImg,stone,tree,launcher;


function preload()
{
boyImg=loadImage("boy.png")	;
}

function setup() {
	createCanvas(1600, 700);

	boy=createSprite(250,580);
	boy.addImage("boy",boyImg);
	boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;
	
	stone=new Stone(205,520,20); 

	
	//Create the Bodies Here.
	ground=new Ground(width/2,650,width,20);
	tree=new Tree(1200,650);
	mango1=new Mango(1200,200,30);
  mango2=new Mango(1270,230,30);
	mango3=new Mango(1110,240,30);
	mango4=new Mango(1100,170,30);
	mango5=new Mango(1200,170,30);
	mango6=new Mango(1100,330,30);
	mango7=new Mango(1300,200,30);
  mango8=new Mango(1170,230,30);
	mango9=new Mango(1310,240,30);
	mango10=new Mango(1300,170,30);
	mango11=new Mango(1200,120,30);
	mango12=new Mango(1200,330,30);

	launcher=new Launcher(stone.body,{x:195,y:522})

	Engine.run(engine);
  
}


function draw() {

	background(230);
  rectMode(CENTER);
  
  
  drawSprites();

  fill("Blue");
  text("Drag mouse to shot",10,25);
  fill("Black");
  text("Space to play again",10,55)

 tree.display();
 ground.display();
 stone.display();
 mango1.display();
 mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
 mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   mango12.display();
   launcher.display();

   detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcherObject.attach(stone.body);

	   mouseDragged()
	   mouseReleased()
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  

  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

