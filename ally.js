function Ally(){
	this.center = createVector(0, 0);
	this.width = 60;
	this.height = 70;

	this.setCenter(0,0);

	this.life = 5;

	this.lifeDivision = this.height / this.life;

	this.currentCell = undefined;


	this.img = loadImage("ally1.png");


	this.attackFreq = 60 * 0.8; //60fps * X
	this.attackCount = 0;
}



Ally.prototype.setCenter = function(x,y){
	this.center.x = x;
	this.center.y = y;
}


Ally.prototype.update = function(){

	//TODO: We should only attack if there is an enemy on this lane
	this.attack();
}


Ally.prototype.attack = function(){
	if(this.attackCount == this.attackFreq){
		//Attack

		//Dispatch a Projectile
		var p = new Projectile(this.center.x + this.width/2, this.center.y, 4, 0);
		board.spawnProjectile(p);

		this.attackCount = 0;
	}else{
		this.attackCount += 1;
	}
}


Ally.prototype.display = function(){

	/*fill(196,201,50);
	rect(this.center.x - this.width / 2,
			this.center.y - this.height / 2,
			this.width,
			this.height);


	//Display the life
	fill(150, 20,20);
	rect(this.center.x - this.width / 2,
			this.center.y - this.height / 2,
			this.width,
			this.height - this.lifeDivision * this.life);*/
	image(this.img, this.center.x - this.width / 2 ,
			this.center.y - this.height / 2,
			this.width,
			this.height);

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
