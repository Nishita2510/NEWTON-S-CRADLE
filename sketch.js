
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;


function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


   //Create the Bodies Here.

	  roofObject = new Roof( 400,20,600,30 );

	  bobDiameter = 80;

	 startBobPositionX = width/2;
	 startBobPositionY = height/3+400;

      bobObject1 = new Bob( startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter );
	  bobObject2 = new Bob( startBobPositionX-bobDiameter, startBobPositionY, bobDiameter );
      bobObject3 = new Bob( startBobPositionX, startBobPositionY, bobDiameter );
   	  bobObject4 = new Bob( startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
	  bobObject5 = new Bob( startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter );

	  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

      rope1 = new Rope( bobObject1.body, roofObject.body, -bobDiameter*2, 0 );
	  rope2 = new Rope( bobObject2.body, roofObject.body, -bobDiameter*1, 0 );
	  rope3 = new Rope( bobObject3.body, roofObject.body, 0, 0 );
      rope4 = new Rope( bobObject4.body, roofObject.body, bobDiameter*1, 0 );
	  rope5 = new Rope( bobObject5.body, roofObject.body, bobDiameter*2, 0 );

     Engine.run(engine);
  
}


function draw() {

      rectMode(CENTER);
	  Engine.update(engine);
      background("220");

		roofObject.display();

		bobObject1.display();
		bobObject2.display();
		bobObject3.display();
		bobObject4.display();
		bobObject5.display();

		rope1.display();
		rope2.display();
		rope3.display();
		rope4.display();
		rope5.display();

      drawSprites();
 
}

function keyPressed() {
	//write code here

	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce( bobObject1.body, bobObject1.body.position, {x:-50,y:-45} );
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}