let testPoints = [];
let numPoints = 30;
let charge;
let charge2;

function setup() {
  createCanvas(windowHeight, windowHeight);

  for(let i = 0; i < numPoints; i++) {
    for(let j = 0; j < numPoints; j++) {
      testPoints.push(new Particle((i * width/numPoints), (j * height/numPoints)));
    }
  }
  charge = new Charge(width/2, height/2, 1);
}

function draw() {
  background(200);

  charge.draw();
  charge.update();
  //charge2.draw()
  
  for(let points of testPoints) {
    //points.draw();
    points.showVectors(charge);
    //points.showVectors(charge2)
  }
}

