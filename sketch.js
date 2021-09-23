//this creates constants and refers to the modules in the library to make worlds in the engine and give them physics like in the real world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine;
var world;
var ball;
var ground,rectangle

function setup()
{
  createCanvas(400,400);
  // Creating our own engine
engine= Engine.create();
//engine a world gets created by default
//assign the already created world in a variable;
world = engine.world;
//this is how bouncy the ball is against the ground and how fast the ball moves in the air
var ball_options ={
  restitution:0.95,
  frictionAir: 0.01
}
//creating a body for the object
ball = Bodies.circle(100,20,10,ball_options);

ball2=Bodies.circle(200,20,10,ball_options);
//this makes it so the ground is static
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(0,380,400,20,ground_options)
rectangle=Bodies.rectangle(150,200,10,20,ground_options);
//this is adding the objects to the world 
World.add(world, ball);
World.add(world,ground);
World.add(world,ball2);
World.add(world,rectangle);
}

function draw() 
{
  background(51);
  //this constantly updates the engine
Engine.update(engine);
//all of these display the object in the world so it actually shows up
ellipse(ball.position.x,ball.position.y,40)
rect(ground.position.x,ground.position.y,400,20)
ellipse(ball2.position.x,ball2.position.y,40)
rect(rectangle.position.x,rectangle.position.y,100,20)
}

