function Particle(x, y) {
    this.pos = createVector(x, y);
  }
  
  Particle.prototype.draw = function() {
    fill(255);
    circle(this.pos.x, this.pos.y, 10);
  }

  Particle.prototype.showVectors = function(charge) {
    dir = p5.Vector.sub(this.pos, charge.pos);
    dist = constrain(dir.mag(), 200, 10000);
    dir.setMag((10000/dist) * charge.q);
    line(this.pos.x, this.pos.y, this.pos.x + dir.x, this.pos.y + dir.y);
    
  }
  