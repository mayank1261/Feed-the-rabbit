var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaves,orangeImg,redImg,greenImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
orangeImg =loadImage("orangeLeaf.png");
redImg =loadImage("redImage.png");
greenImg=loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

 var select_sprites=Math.round(random(1,2));
  if(frameCount%80==0){
  
    if(select_sprites==1){
      createApples();
    }
    else{
  createLeaves();
    }
  }
rabbit.x=mouseX
  drawSprites();


}

function createApples(){
apple=createSprite(random(50,350),40,10,10);
apple.scale=0.06;
apple.addImage(appleImg);
apple.lifetime=300;
apple.velocityY=3;
}

function createLeaves(){
  leaves=createSprite(random(70,250),50,30,30);
  leaves.addImage(redImg,orangeImg,greenImg);
  leaves.scale=0.06;
  leaves.lifetime=300;
leaves.velocityY=3;

  
}