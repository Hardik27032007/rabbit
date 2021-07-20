var garden,rabbit,apple;
var gardenImg,rabbitImg,apple1;
var orangeLeaf, leaf1, frameCount;
var grass1, grass;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeaf = loadImage("orangeLeaf.png");
  apple = loadImage("apple.png");
  grass1 = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  createApples();
  createLeaves();
  createGrass();
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  text(mouseX,110,350);
  text(mouseY,110,380);
}

function createApples(){
  if(frameCount% 50 == 0){
  apple1 = createSprite(160,130);
  apple1.scale = 0.05;
  apple1.addImage(apple);
  apple1.velocityY = 4;
  apple1.y = Math. round(random(50,300));
  rabbit.depth = apple1.depth +1;
  } 
  }

function createLeaves (){
  if(frameCount% 50 == 0){
  leaf1 = createSprite(200,150);
  leaf1.scale = 0.05;
  leaf1.addImage(orangeLeaf);
  leaf1.velocityY = 4;
  leaf1.y = Math.round(random(100,350));
  rabbit.depth = leaf1.depth +1;
}
}

function createGrass(){
  if(frameCount% 50 == 0){
  grass = createSprite(260,130)
  grass.scale = 0.06;
  grass.addImage(grass1);
  grass.velocityY = 4;
  grass.y = Math.round(random(10,200));
  rabbit.depth = grass.depth +1;
}
}