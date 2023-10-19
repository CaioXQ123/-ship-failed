var sea, invisibleGround;
var ship, ship1, ship2, ship3, ship4;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
  sea.addImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);

  //sprite navio
  ship = createSprite(250,150,20,50);

  //mar (fundo)
  sea = createSprite(200,180,400,20);
  sea.addImage("sea.png");
  sea.x = sea.width /2;
  sea.velocityX = -4;

  //solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("blue");

  console.log(ship.y);
  drawSprites();

 
}
