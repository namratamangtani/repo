//physics engine
//box2d, matter.js, p2.js

//Matter.js = 3 main parts= Engine, World,Bodies

//Engine = laws of physics (friction, gravity etc)
// World = (Planet Earth) - follows the laws of phyics 
//Bodies = Humans, part of planet earth, follow the laws of physics 

//Engine - laws, World - physical world, Bodies - objects 
//Engine - laws, World - Earth, Bodies - Humans 

//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, object;

function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    'isStatic': true
  }


  object = Bodies.rectangle(100,100,50,50,object_options);
  World.add(world, object);

  console.log(object);
  console.log(object.position.y);



}

function draw() 
{
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
}