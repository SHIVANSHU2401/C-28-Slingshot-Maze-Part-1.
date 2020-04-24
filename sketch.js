const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10,fruit11,fruit12,fruit13,frui14,fruit15;
var fruit16,fruit17,fruit18,fruit19,fruit20;

var knife;
var fruit70;
var ground1,ground2;

var chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
     
    knife = new Knife(100,100);

    fruit1 = new Fruit(920,180,33,33);
    fruit2 = new Fruit(960,180,33,33);  
    fruit3 = new Fruit(1000,180,33,33);
    fruit4 = new Fruit(1040,180,33,33);
    fruit5 = new Fruit(1080,180,33,33);
    fruit6 = new Fruit(940,160,33,33);
    fruit7 = new Fruit(980,160,33,33);
    fruit8 = new Fruit(1020,160,33,33);
    fruit9 = new Fruit(1060,160,33,33);
    fruit10 = new Fruit(960,140,33,33);
    fruit11 = new Fruit(1000,140,33,33);
    fruit12 = new Fruit(1040,140,33,33);
    fruit13 = new Fruit(980,120,33,33);
    fruit14 = new Fruit(1020,120,33,33);
    fruit15 = new Fruit(1000,100,33,33);


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(1000,200,200,20);

    chain = new Chain(knife.body,fruit70.body);
    fruit70 = new Fruit(600,200,30,30);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(fruit1.body.position.x);
    console.log(fruit1.body.position.y);
    console.log(fruit1.body.angle); 

    fruit1.display();
    fruit2.display();
    fruit3.display();
    fruit4.display();
    fruit5.display();
    fruit6.display();
    fruit7.display();
    fruit8.display();
    fruit9.display();
    fruit10.display();
    fruit11.display();
    fruit12.display();
    fruit13.display();
    fruit14.display();
    fruit15.display();

   // chain.display();

    knife.display();
    fruit70.display();

    ground1.display();
    ground2.display();

}