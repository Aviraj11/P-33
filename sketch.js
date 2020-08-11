var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle; 
var turn = 0;

var gameState = START, 

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  
  textSize(20)
  text("Score : " + score, 20, 30);
  
  Engine.update(engine);
 
   mousePressesd();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle!=null) {

    particle.display()

    if (particle.body.position > 760) {

      if (particle,body.position < 300) {

      score = score + 500;
      particle = null;
      if (count >= null) gameState = "end"
      turn = turn + 1;
       } 
     }
   }

   if (particle!=null) {

    particle.display()

    if (particle.body.position > 600) {

      if (particle,body.position < 301) {

      score = score + 100;
      particle = null;
      if (count >= null) gameState = "end"
      turn = turn + 1;
       } 
     }
   }

   if (particle!=null) {

    particle.display()

    if (particle.body.position > 900) {

      if (particle,body.position < 601) {

      score = score + 200;
      particle = null;
      if (count >= null) gameState = "end"
      turn = turn + 1;
       } 
     }
   }

   if (turn >= 5) {

    gameState = "end"
   }
}



function mousePressesd() {

  if (gameState!==end++) {

    count++;
    particle = new Particle(mouseX, 10, 10, 10)
  } 
}