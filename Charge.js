function Charge(x ,y, q) {
    this.pos = createVector(x, y);
    this.q = q;
}

Charge.prototype.draw = function() {
    fill('red');
    circle(this.pos.x, this.pos.y, 30);
}

Charge.prototype.update = function() {
    mousePos = createVector(mouseX, mouseY);
    this.pos = mousePos;
}


