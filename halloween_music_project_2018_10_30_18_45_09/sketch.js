var mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('ghosts.mp3');

}

var x;
var y;
var vx = 3;
var vy = 2;
var r = 5;


function setup() {
  colorMode(HSB); 
  createCanvas(400, 400);
  x = random(r, width-r);
  y = random(r, height-r);
  

}
 function mousePressed() {
   mySound.play(); 
   }

function draw() {
 //black
  background(0);
  
  //moon
  fill(46, 81, 98);
  ellipse (100,100,170,170); 
  fill(0);
  ellipse(150,100,150,140);
  fill(197, 100, 51); 
  textSize(20); 
  text('happy', 190,90); 
  text('halloween', 190,120); 
  
   
  // ground and headstones 
  noStroke();  
  fill(120, 1, 48); 
  rect(40,270,30,70,80); 
  rect(240,270,50,100,80); 
  rect(100,270,40,100,80); 
  fill(25, 49, 29);
  rect(0,300,400,300);
 
   
  //pumpkin stems
  fill(23, 63, 44);
  rect(95,315,10,20); 
  rect(315,315,10,20); 
  
  //pumpkins
  fill(25,100,140);
  ellipse(100,350,40,40);
  rect(100,330,30,40,50);
  rect(70,330,30,40,50);
  
  fill(25,100,140);
  ellipse(320,350,40,40);
  rect(290,330,30,40,50);
  rect(320,330,30,40,50);
  
  //faces on the pumpkins
  fill(30,20,130);
  ellipse(90,340,10,10);
  ellipse(110,340,10,10);
  arc(100, 355, 20, 20, 0, PI + QUARTER_PI, OPEN);
  rect(330,340,10,10);
  rect(300,340,10,10);
  arc(323, 355, 20, 20, 0, PI + QUARTER_PI, PIE);
  

  //the ghosts  
  fill (259, 62, 87); 
  noStroke();
  rect(x, y, 30,40,70,70,70,70);
  ellipse(x+5,y+35,15,15);
  ellipse(x+15,y+38,15,15);
  ellipse(x+27,y+34,15,15);
  ellipse(x+40,y+15,10,15); 
  ellipse(x-10,y+15,10,15); 
  fill(0);
  ellipse(x+10,y+10,10,10); 
  ellipse(x+20, y+10, 10,10);
  ellipse(x+15,y+25,10,10);
  
  fill (100); 
  noStroke();
  rect(y, x, 30,40,70,70,70,70);
  ellipse(y+5,x+35,15,15);
  ellipse(y+15,x+38,15,15);
  ellipse(y+27,x+34,15,15);
  ellipse(y+40,x+15,10,15); 
  ellipse(y-10,x+15,10,15); 
  fill(0);
  ellipse(y+10,x+10,10,10); 
  ellipse(y+20, x+10, 10,10);
  ellipse(y+15,x+25,10,20);
   

 //movement around the canvas
  x += vx;
  y += vy;
  
  
  
  if (x < r || x > width-r) {
    vx = -vx;
   // mySound.play();
    //mySound.setVolume(0.3);
  } 
  
  
   if (y < r || y > height-r) {
    vy = -vy;
  // mySound.play();
  }
   
}