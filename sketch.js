const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(2550,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1275,780,2550,20);
    box1 = new Box(2000,700,80,80);
    box2 = new Box(1830,700,80,80);
    box3 = new Box(2000,630,80,80);
    box4 = new Box(1830,630,80,80);
    box5 = new Box(1900,450,80,80);
    pig1 = new Pig(1885,700);
    pig2 = new Pig(1885,630);
    log1 = new Log(1906,650,275,PI/2);
    log2 = new Log(1906,500,275,PI/2);
    log3 = new Log(1830,400,150,PI/7);
    log4 = new Log(2000,400,150,-PI/7);
    bird = new Bird(200,200)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    pig1.display()
    pig2.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
    bird.display()


}