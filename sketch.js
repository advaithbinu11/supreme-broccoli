const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var heximg;
var score=0;
function preload(){
    heximg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(450,350,900,50)
    platform=new Ground(700,290,400,75);
    cup1=new Cup(750,320-90,55,65);
    cup2=new Cup(775,320-90,55,65);
    cup3=new Cup(800,320-90,55,65);
    cup4=new Cup(762.5,312.5-130,55,65);
    cup5=new Cup(787.5,312.5-130,55,65);
    cup6=new Cup(775,280-140,55,65);
    stone1=new Stone(100,150,50,50);
    sling1=new SlingShot(stone1.body,{x:150,y:160})
}
function draw(){
    background(0);
    text("Score:"+score,500,50);
    Engine.update(engine);
    ground1.display()
    platform.display();
    cup1.display();
    cup1.score();
    cup2.display();
    cup2.score();
    cup3.display();
    cup3.score();
    cup4.display();
    cup4.score();
    cup5.display();
    cup5.score();
    cup6.display();
    cup6.score();
    stone1.display();
    sling1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling1.attach(stone1.body)
    }
}