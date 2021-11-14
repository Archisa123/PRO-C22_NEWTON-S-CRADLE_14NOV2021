const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5;   
var con;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		restitution:0.8
	}

	ball = Bodies.circle(310,300,50,ball_options);
    World.add(world,ball);
	ball2 = Bodies.circle(350,300,50,ball_options);
    World.add(world,ball2);
	ball3 = Bodies.circle(390,300,50,ball_options);
    World.add(world,ball3);
	ball4 = Bodies.circle(430,300,50,ball_options);
    World.add(world,ball4);
	ball5 = Bodies.circle(450,300,50,ball_options);
    World.add(world,ball5);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here11

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
