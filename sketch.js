const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1;
var paperObject;

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground2 = new ground(600,height,1600,20);

    log1 = new Log(1000,390,250,20);

    log2 = new Log(870,350,15,200);
    log3 = new Log(1125,350,15,200);


    paperObject = new Paper(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground2.display();    
    log1.display();
    log2.display();
    log3.display();
    paperObject.display();
}
