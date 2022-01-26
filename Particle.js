function Particle(x, y) {
    this.pos = createVector(x, y);
  }
  
  Particle.prototype.draw = function() {
    circle(this.pos.x, this.pos.y, 10);
  }
  