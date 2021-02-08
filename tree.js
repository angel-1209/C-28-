// class Tree
// {
// 	constructor(x,y,width,height)
// 	{
		
// 		this.width = width;
//       this.height = height;
//       this.x=x ;
//       this.y=y ;
//       this.body = Bodies.rectangle(x,y,width,height,options);
//       World.add(world, this.body);
// 		// this.dustbinWidth=450;
// 		// this.dustbinHeight=600;
// 		// this.wallThickness=10;
		
// 		this.image=loadImage("images/tree.png")
// 		//  this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
// 		//  this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
// 		//  this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
// 		//  World.add(world, this.bottomBody)
// 		//  World.add(world, this.leftWallBody)
// 		//  World.add(world, this.rightWallBody);

// 	}
// 	display(){
// 		var pos =this.body.position;
// 		push()
// 		translate(pos.x, pos.y);
// 		 //rectMode(CENTER);
// 		 //fill(128,128,128)
// 		 //rect(0, 0, this.width, this.height);
// 		 imageMode(CENTER);
//     	 image(this.image,0, 0,this.width,this.height);
// 		 pop();
// 	   }

// }
class Tree {
	constructor (x,y,r)
	{
	var options ={
	isStatic : true ,
	restitution :0,
	friction : 1 ,
	}
	this.x=x;
	this.y=y;
	this.r=r;
	this.image=loadImage("pics/tree.png")
	this.body=Bodies.circle(this.x,this.y,this.r,options)
	World.add(world,this.body);
	}
	display(){
		var pos =this.body.position;
		push()
		translate (pos.x,pos.y);
		rotate(this.body.angle); 
		 ellipseMode(CENTER);
		 image(this.image,pos.x, pos.y, this.r*2,this.r*2);
		 pop();
	   }
	}