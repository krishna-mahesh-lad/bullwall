var bullet1, wall1;
var bullet2, wall2;
var bullet3, wall3;
var bullet4, wall4;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet1 = createSprite(50, 340, 20, 10);
  bullet1.velocityX = speed;
  bullet1.shapeColor = rgb(255, 255, 255);

  wall1 = createSprite(800,200, thickness, 400)
  wall1.shapeColor = "grey";

  bullet2 = createSprite(50, 240, 20, 10);
  bullet2.velocityX = speed;
  bullet2.shapeColor = rgb(255, 255, 255);

 
  bullet3 = createSprite(50, 140, 20, 10);
  bullet3.velocityX = speed;
  bullet3.shapeColor = rgb(255, 255, 255);

  bullet4 = createSprite(50, 40, 20, 10);
  bullet4.velocityX = speed;
  bullet4.shapeColor = rgb(255, 255, 255);

}

function draw() {
  background(0,0,0);

 
 hasCollided(bullet1,wall1);
 hasCollided(bullet2,wall1);
 hasCollided(bullet3,wall1);
 hasCollided(bullet4,wall1);

  drawSprites();
}

function hasCollided(ibullet,iwall)
{
  if (iwall.x - ibullet.x < (ibullet.width + iwall.width) / 2) {
  ibullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if (damage > 10) {
    iwall.shapeColor = rgb(255, 0, 0);
  }

  else if (damage < 10) {
    iwall.shapeColor = rgb(0, 255, 0);
  }
}
}