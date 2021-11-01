
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

let engine;
let world;

var ground;
var rope;

var ball;

var btn1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  

  ground =new Ground(200,390,400,20);


  var ball_options = {
    restitution: 0.95,
  }
   

  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  var options={
    //a point and PE body
    pointA:{x:200,y:20}, //pointA,pointB
    bodyB:ball,         //bodyA,bodyB
    stiffness:0.1,
    length:100

  }
  
  rope=Constraint.create(options);
  World.add(world,rope)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20,20);
  ground.show();

  //point-x,y to balls x,y
  push();
  stroke("red");
  strokeWeight(5);
  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y);
  pop();
  Engine.update(engine);
}



  


