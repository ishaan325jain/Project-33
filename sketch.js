
const Engine = Matter.Engine;       
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles ;
var plinkos =[];
var divisions =[];

score = 0;

var turn =0 ;

var s  ;
var score = 0;

var divisionHeight = 200;

var gameState = "inAir";


      
var isMousePressed=0;
var DropPositionX=0;
var DropPositionY=0;


function preload()
{
	
}

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;



  engine = Engine.create();
  world = engine.world;


  //Create the Bodies Here.

  ground = new  Ground(240,590,1200,20);

  


  for (var k=0; k <=width; k = k+80) {
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 75; j <=width; j = j+50) {
  plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j = j+50) {
  plinkos.push(new Plinko(j,175));
  }

  
  for (var j = 75; j <=width; j = j+50) {
    plinkos.push(new Plinko(j,275));
  }
 
  for (var j = 50; j <=width-10; j = j+50) {
    plinkos.push(new Plinko(j,375));
  }
   
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  

  //noStroke();
  //textSize(30);
  //fill(255,30,30);

  text("score:"+score,20,30)

  text("500",330,430);
  text("100",100,430);
  text("100",23,430);
  text("100",410,430);
  text("200",260,430);
  text("200",170,430 );
  


  ground.display();    

  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  

  for(var i = 0;i<divisions.length;i++){
    divisions[i].display();
  }
 
 //DropPositionX = mouseX;
    if(isMousePressed){
    particles = new Particles(mouseX,12,10);
    //score = s;
    //isMousePressed =0;

    turn++;

    particles.display();
  
    }
    drawSprites();
  }



  function mousePressed(){
    isMousePressed = 1 ;

  }
  
  function mouseDragged(){
    if (gameState =="inAir"&& isMousePressed == 1){
    
      if(0< mouseX >= 100){
       console.log(turn);
      }
    }
  }
  
  function mouseReleased(){
    //DropPositionX = mouseX;
    //DropPositionY = 10;
    //Matter.body.setPosition(particles.body,{x:mouseX,y:10});    
    //particles.ground();
    gameState = "launched";
    isMousePressed = 0 ;
  }
