var castle
var cherry
var fairy
var princess
var grass

var castleImage
var cherryImage
var fairyImage
var princessImage
var grassImage


function preload(){
  grassImage = loadImage("grass.png")
  princessImage = loadImage("princess.png")
  fairyImage = loadImage("fairy.png")
  castleImage = loadImage("castle.png")
cherryImage = loadImage("cherry.png")
}



function setup() {                                                                         
  createCanvas(800,400);
  
  grass = createSprite(400,400,800,50);
  fairy = createSprite(320,100)
  castle = createSprite(750,269)
  cherry = createSprite(450,200,100,300)

  fairy.addImage(fairyImage)
  castle.addImage(castleImage)
  grass.addImage(grassImage)
  cherry.addImage(cherryImage)

  grass.velocityX = (-10);
  princess = createSprite(110, 265, 50, 50);
  princess.addImage(princessImage)
  princess.scale = 0.5
  fairy.scale = 0.5
  cherry.scale = 0.4
  castle.scale = 1
}

function draw() {
  background("lightblue"); 
   if(grass.x <0){
grass.x = 300
   }
   camera.x = princess.x+300
  drawSprites();

}