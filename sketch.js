var caixa;
function setup() {
  createCanvas(400,400);
caixa=createSprite(200,200,30,30)
}

function draw() 
{
  //background(30);

if (keyDown("up")) {
  background ("blue")
}

if (keyDown("down")) {
  background ("green")
  }

if (keyDown("left")) {
 
  background ("yellow")
  }
  if (keyDown("right")) { 
    background ("red")
  }



  drawSprites()
}




