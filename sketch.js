var iss, spacebg, spacecraft1, spacecraft2, spacecraft3, spacecraft4;

var iss_image, spacecraft, hasDocked=false;

function preload() {
iss_image=loadImage("docking-undocking/iss.png");
spacebg=loadImage("docking-undocking/spacebg.jpg");
spacecraft1=loadImage("docking-undocking/spacecraft1.png")
spacecraft2=loadImage("docking-undocking/spacecraft2.png")
spacecraft3=loadImage("docking-undocking/spacecraft3.png")
spacecraft4=loadImage("docking-undocking/spacecraft4.png")
}
  




function setup() {
  createCanvas(600,350);

  iss= createSprite(330, 130, 50, 50);
  iss.addImage(iss_image);
  iss.scale=0.25;

spacecraft= createSprite(285, 240, 50, 50);
spacecraft.addImage(spacecraft1);
spacecraft.scale=0.15;


}

function draw() {
  background(spacebg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown("LEFT_ARROW")){
    spacecraft.x-=1
    spacecraft.addImage(spacecraft3);

    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=1
      spacecraft.addImage(spacecraft4);
  
      }
      if(keyDown("UP_ARROW")){
        spacecraft.y-=2
        }

        if(keyDown("DOWN_ARROW")){
          spacecraft.addImage(spacecraft2);
        
      
          }
          if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
        hasDocked=true;
        text("DockingSuccessful",200,300)
          }
      
  }  
  drawSprites();
}