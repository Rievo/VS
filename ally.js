function Ally(){
	this.center = createVector(0, 0);
	this.width = 30;
	this.height = 30;

	this.setCenter(0,0);

	this.life = 10;
}



Ally.prototype.setCenter = function(x,y){
	this.center.x = x;
	this.center.y = y;
}



Ally.prototype.display = function(){

	fill(196,201,50);
	rect(this.center.x - this.width / 2,
			this.center.y - this.height / 2,
			this.width, 
			this.height);
	
}
