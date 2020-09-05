const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Back;
var hapimg;
var hap;

function preload(){
   Back=loadImage("back.png");
   hapimg=loadImage("happy.jpg");
   
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-50);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies Here

    next=createElement('h1');
    next.html("HAPPY TEACHERS DAY DEAR MUBASHARA MAM !!!");
    next.position(25,56);
    next.style('font-size', '70px');
    next.style('color', 'DARKTURQUOISE');
    next.style('font-family','tahoma');

    thank=createElement('h5');
    thank.html("Wishing you joy and happiness, you are an amazing teacher")
    thank.position(24,408);
    thank.style('font-size','40px');
    thank.style('font-family','script');
    thank.style('color','deeppink');

    msg=createElement('h2');
    msg.html("Mam I am extremely luck that I am your student the last 42 golden hours I spend with you were amazing and also upcoming hours will be the golden hours with you the way you taught me is amazing and doing coding with you is just wonderfull. Happy Teachers Day Mam ")
    msg.position(45,499); 
    msg.style('font-size','40px');
    msg.style('font-family','script');
    msg.style('color','yellow');

    hap=createSprite(1290,343,60,60);
    hap.addImage(hapimg);
    hap.scale=0.5;

    

}


function draw(){
    background(Back);
    Engine.update(engine);
    fill("yellow");
    textSize(30);
    textFont("Imapct");
    text(mouseX+":"+mouseY,mouseX,mouseY);
    drawSprites();
}   

