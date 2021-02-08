
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var tree1
var stone1
var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12
var boy  
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;
	
	stone1= new Stone (300,600,100)
	tree1= new Tree(400,20,300);
 mango1=new Mango(600,100,40);
 mango2=new Mango(600,150,40);
 mango3=new Mango(500,100,40);
 mango4=new Mango(500,150,40);
 mango5=new Mango(420,100,40);
 mango6=new Mango(350,250,40);
 mango7=new Mango(550,100,40);
 mango8=new Mango(550,50,40);
 mango9=new Mango(1000,300,40);
 mango10=new Mango(800,300,40);
 mango11=new Mango(1100,100,40);
 mango12=new Mango(1200,200,40);
 sling1 = new Shot (stone1,100,100)
boi = new Boy (200,200,100)

ground1 = new Ground(width/2,650,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //background ("black");
  
  tree1.display();
stone1.display();
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
sling1.display ();
boi.display ();





ground1.display();

  //drawSprites();
 
}



