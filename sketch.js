var alvo, alvoImg;
var dardo, dardoImg;


function preload(){
    alvoImg = loadImage("imagens/alvo.png");
    dardoImg = loadImage("imagens/dardo.png");
}

function setup(){
    createCanvas(1200,600);
    criarDardo();    
}

function draw(){
    background("#12CBC4");

    dardo.x = World.mouseX;
    dardo.y = World.mouseY;
    
    criarAlvos();
    drawSprites();
}

function criarAlvos(){
    if(frameCount % 120 === 0){
        alvo = createSprite(1200, 300, 50,50);
        alvo.y = Math.round(random(100,500));
        alvo.velocityX = -8;

        alvo.addImage("alvo", alvoImg);
        alvo.scale = 0.07;

        //alvo.debug = true;
        //alvo.setCollider("circle",0,0,1350);
    }
}

function criarDardo(){
    dardo = createSprite(100,100,50,50);    
    dardo.addImage("dardo", dardoImg);
    dardo.scale = 0.09;
}