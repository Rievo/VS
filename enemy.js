

function Enemy(){
	this.center = createVector(0, 0);
	this.width = 60;
	this.height = 70;

	this.setCenter(0,0);

	this.life = 10;


	this.attackFreq = 60 * 1; //60fps * X
	this.attackCount = 0;

	this.img = loadImage("enemy.png");
}





Enemy.prototype.setCenter = function(x,y){
	this.center.x = x;
	this.center.y = y;
}



Enemy.prototype.display = function(){


	image(this.img, this.center.x - this.width ,
			this.center.y - this.height,
			this.width,
			this.height);

}


Enemy.prototype.update = function(){

	//This is the updating algorithm


	//Do I have any ally in range?
	var range = 5;

	var inRange = board.getAlliesAtRangeOfEnemy(range, this);


	if(inRange.length == 0 || inRange == undefined){ //I can´t attack
		this.move();
	}else{
		this.attack(inRange[0]);
	}


}


Enemy.prototype.move = function(){
	this.center = this.center.add(-1,0);

	if(this.center.x <= 0){
		this.center.x = width;
	}
}


Enemy.prototype.attack = function(ally){
	if(this.attackCount == this.attackFreq){
		//Attack
		ally.loseLife(1);

		this.attackCount = 0;
	}else{
		this.attackCount += 1;
	}
}


Enemy.prototype.loseLife = function(count){
	this.life = this.life - count;
}
