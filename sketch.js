
var bloco;



function setup() {
  createCanvas(1920,1080);
 
  bloco = createSprite(300,450,50,50);   


}

function draw() 
{
  background("white");

  if(keyDown("right")) {
   bloco.x += 5;

  }

  if(keyDown("left")) {
    bloco.x -= 5;
  }
  
  if(keyDown("up")) {
    bloco.y -= 5;
  }
  
if(keyDown("down")) {
  bloco.y += 5;

}


  drawSprites();
}




