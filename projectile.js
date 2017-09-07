

function Projectile(x, y, dx, dy){
      this.center = createVector(x,y);
      this.vel = createVector(dx,dy);
}



Projectile.prototype.update = function(){
      this.center.add(this.vel);
}


Projectile.prototype.display = function(){
      fill(230);
      stroke(10);
      ellipse(this.center.x, this.center.y, 20, 20);
}
