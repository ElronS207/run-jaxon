var boy, boy_running;
var path, pathImage;
var leftboundary,rightboundary;
var edges;
function preload(){
  //pre-load images
boy_running = loadAnimation("Runner-1.png","Runner-2.png")

pathImage = loadImage("path.png")
}

function setup(){

  edges=createEdgeSprites();

  createCanvas(400,400);
  //create sprites here
  
boy = createSprite(200,200,40,10);
boy.addAnimation("running",boy_running);
boy.scale = 0.5;

path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 5;
  path.scale = 1.2;


leftboundary = createSprite(0,300,100,600)
rightboundary = createSprite(390,300,80,600)
leftboundary.visible=false
rightboundary.visible=false



}

function draw() {
  
  background(0);
  
  console.log(boy.y)

  path.velocityY = 5;
boy.X=World.mouseX;
if (path.y > 400){
  path.y = height/2
}
path.depth = boy.depth
boy.depth += 1
boy.collide(leftboundary)
boy.collide(rightboundary)
boy.collide(path);


boy.collide(edges[3]);

drawSprites();

}
