function Ally(){
	this.center = createVector(0, 0);
	this.width = 30;
	this.height = 30;

	this.setCenter(0,0);

	this.life = 5;

	this.lifeDivision = this.height / this.life;

	this.currentCell = undefined;
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


	//Display the life
	fill(150, 20,20);
	rect(this.center.x - this.width / 2,
			this.center.y - this.height / 2,
			this.width, 
			this.height - this.lifeDivision * this.life);
	
}



//If life is less or equal to 0, return this, so it will be removed
Ally.prototype.checkLife = function(){
	if(this.life <= 0){
		return this;
	}else{
		return undefined;
	}
}


Ally.prototype.loseLife = function(count){
	this.life = this.life - count;
}