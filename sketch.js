
//Criando variáveis
var arco ;
  var flecha;
var fundo;
  var redB;
var pinkB;
  var greenB;
var blueB; 
  var grupo_flecha;
var imgarco;
  var imgflecha;
var imggreenB;
  var imgredB;
var imgpinkB;
  var imgblueB;
var imgfundo;
  var score =0;


function preload(){ 

  imgfundo = loadImage("background0.png");
    imgflecha = loadImage("arrow0.png");
  imgarco = loadImage("bow0.png");
    imgredB = loadImage("red_balloon0.png");
  imggreenB = loadImage("green_balloon0.png");
    imgpinkB = loadImage("pink_balloon0.png");
  imgblueB = loadImage("blue_balloon0.png");

}

function setup() {
  createCanvas(400, 400);
  
  //Criando fundo
  fundo = createSprite(0,0,400,400);
   fundo.addImage(imgfundo);
  fundo.scale = 2.5
  
  //Criando arco
  arco = createSprite(380,220,20,50);
    arco.addImage(imgarco); 
  arco.scale = 1;
  

  score = 0  

  //Criando grupos
  redBG= new Group();
    greenBG= new Group();
  blueBG= new Group();
    pinkBG= new Group();
  grupo_flecha= new Group();  
}

function draw() {
 background(0);
  //Movendo fundo
  fundo.velocityX = -3 

  if (fundo.x < 0){
    fundo.x = fundo.width/2;
  }
  
  //Movendo o arco
  arco.y = World.mouseY
  
  //Atirando flecha
  if (keyDown("space")) {
    createarrow();  
  }
  
  //Criando inimigos
  var rndB = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (rndB == 1) {
        redBalloon();
    } else if (rndB == 2) {
      greenBalloon();
    } else if (rndB == 3) {
        blueBalloon();
    } else {
        pinkBalloon();
    }
  }
  
  if (grupo_flecha.isTouching(redBG)) {
    redBG.destroyEach();
    grupo_flecha.destroyEach();
    score=score+1;
  }

  if (grupo_flecha.isTouching(greenBG)) {
    greenBG.destroyEach();
    grupo_flecha.destroyEach();
    score=score+3;
  }

  if (grupo_flecha.isTouching(blueBG)) {
    blueBG.destroyEach();
    grupo_flecha.destroyEach();
    score=score+2;
  }

  if (grupo_flecha.isTouching(pinkBG)) {
    pinkBG.destroyEach();
    grupo_flecha.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Pontuação: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(imgredB);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBG.add(red);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(imggreenB);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(imgpinkB);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkBG.add(pink);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(imgblueB);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBG.add(blue);
}


//Criando flechas para o arco
 function createarrow() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(imgflecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  grupo_flecha.add(flecha);
   
}
