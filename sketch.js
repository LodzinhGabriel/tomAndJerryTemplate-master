
var cat, mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat3.png");
    cat4 = loadImage("images/cat4.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse3.png");
    mouse4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    

    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", cat1);
    cat.scale = 0.2;
    mouse = createSprite(200, 600);
    mouse.addAnimation("ratoNeutro", mouse1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", cat4);
        cat.changeAnimation("ultimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("ultimaImagemRato", mouse4);
        mouse.changeAnimation("ultimaImagemRato");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
      mouse.addAnimation("ratoProvocando", mouse2);
      mouse.changeAnimation("ratoProvocando");
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("gatoCaminhando", loadAnimation(cat2, cat3));
      cat.changeAnimation("gatoCaminhando");
    }

}
