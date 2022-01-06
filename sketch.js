function preload(){
  //pre-load images;
  jakeImg = loadImage("Runner-1.png")
  pathImg = loadImage("path.png");
}


function setup(){
  createCanvas(400,400);

  // Moving background

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  
  // making Jake

  jake=createSprite(100,340,30,30);
  jake.addImage(jakeImg)
  jake.scale=0.1

  //create left boundary
  leftBoundary=createSprite(0,0,100,800)
  leftBoundary.visible=false;

  //create right boundary
  rightBoundary=createSprite(410,0,100,800)
  rightBoundary.visible=false;
}

function draw() {
  background("white");
  if(path.y>400){
    path.y = height/2;

    
}
drawSprites()
//boy moving on Xaxis with Mouse
jake.x=World.mouseX;

edges= createEdgeSprites();
jake.collide(edges[3]);
jake.collide(leftBoundary);
jake.collide(rightBoundary);

}

  


