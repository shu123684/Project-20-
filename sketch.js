var car, wall;
var speed, weight;

function setup() {
  // creates the world/canvas
  createCanvas(800,400);

  // creates the sprite for variable wall
  wall = createSprite(730, 200, 60, height/2);

  // sets a random value for speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);

  // creates the sprite for variable car
  car = createSprite(200, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  // sets the background color
  background("black");

  // if/else logic statement for deformation
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;

    let deformation = 0.5*weight*speed*speed/22500;

    if(deformation > 180){
      car.shapeColor = "red";
    }else if (deformation < 180 && deformation >100){
      car.shapeColor = "yellow";
    }else if (deformation < 100){
      car.shapeColor = "green";
    }
  }

  // draws the sprites
  drawSprites();
}

