var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, body1,body2,body3;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	//create box
	body1=Bodies.rectangle(330,610, 20,100, {isStatic:true});;
	World.add(world, body1);
	body2=Bodies.rectangle(390,650,100,20,{isStatic:true});
	World.add(world,body2);
	body3=Bodies.rectangle(450,610,20,100,{isStatic:true});
	World.add(world,body3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
  rect(this.body1.position.x,this.body1.position.y,20,100);
  rect(this.body2.position.x,this.body2.position.y,100,20);
  rect(this.body3.position.x,this.body3.position.y,20,100);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  drawSprites(); 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



