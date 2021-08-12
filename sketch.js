var castle
var cherry
var fairy
var princess
var grass
var girl

var castleImage
var cherryImage
var fairyImage
var princessImage
var grassImage
var girlImage

function preload(){
  grassImage = loadImage("skybackground.jpg")
  princessImage = loadImage("princess.png")
  //fairyImage = loadImage("fairy.png")
  castleImage = loadImage("castle.png")
cherryImage = loadImage("cherry.png")
girlImage = loadAnimation("Walk (1).png", "Walk (2).png","Walk (3).png","Walk (4).png","Walk (5).png","Walk (6).png",)
}



function setup() {                                                                         
  createCanvas(800,400);
  
  grass = createSprite(400,100,800,50);
  // fairy = createSprite(320,100)
  castle = createSprite(2000,230)
  cherry = createSprite(450,250,100,300)

  //fairy.addImage(fairyImage)
  castle.addImage(castleImage)
  grass.addImage(grassImage)
  cherry.addImage(cherryImage)

  grass.velocityX = (-5);
  castle.velocityX = (-5);
  cherry.velocityX = (-5)
  princess = createSprite(100, 290, 50, 50);
  princess.addAnimation("girl",girlImage)
  princess.scale = 0.25
 // fairy.scale = 0.5
  cherry.scale = 0.4
  castle.scale = 1
  grass.scale = 2
  
}

function draw() {
  background("lightblue"); 
   if(grass.x <100){
grass.x = 300
   }
   camera.x = princess.x+300
  drawSprites();

}