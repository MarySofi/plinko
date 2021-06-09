 var ground
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinko=[];
var division=[];
var divisionHeight=300;

function draw() {
  background(255,255,255);  

  ground = new Ground(600,height,1200,20);
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
}
for(var j =15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
}
ground.display()
division.display()
plinko.display()
  drawSprites();
}