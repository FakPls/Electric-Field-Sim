let testPoint;


function setup() {
  createCanvas(400, 400);
  testPoint = new Partcile(height/2, width/2);
}

function draw() {
  background(220);
}

function Partcile(x, y) {
  pos = createVector(x, y);

  draw = function() {
    circle(this.pos.x, this.pos.y, 10);
  }
}
