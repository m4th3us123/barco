var sea, ship;
var shipImg,seaImg;
var tamanho;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-2.png","ship-2.png","ship-1.png","ship-1.png");
tamanho = 1;
}
function setup(){
  createCanvas(800*tamanho,800*tamanho);
  background("blue");


sea = createSprite(400*tamanho,400*tamanho);
sea.addImage(seaImg);
sea.scale=0.6*tamanho;

ship = createSprite(400*tamanho,400*tamanho);
ship.addAnimation("ship",shipImg);
ship.scale=0.8*tamanho;

}

function draw() {
  background(0);
  sea.velocityX = -3;
    
if(sea.x < 0){
  sea.x = sea.width/8;
}
drawSprites();

}
