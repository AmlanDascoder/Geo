const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber = new Rubber(800, 560, 20);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(720, 560, 20, 20);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();

    
 
}