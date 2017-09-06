

function Enemy(){
	this.center = createVector(0, 0);
	this.width = 30;
	this.height = 30;

	this.setCenter(0,0);

	this.life = 10;
}





Enemy.prototype.setCenter = function(x,y){
	this.center.x = x;
	this.center.y = y;
}



Enemy.prototype.display = function(){

	fill(135,150,156);
	ellipse(this.center.x - this.width / 2,
			this.center.y - this.height / 2,
			this.width, 
			this.height);
	
}


Enemy.prototype.update = function(){
	this.move();
}


Enemy.prototype.move = function(){
	this.center = this.center.add(-1,0);

	if(this.center.x <= 0){
		this.center.x = width;
	}
}
