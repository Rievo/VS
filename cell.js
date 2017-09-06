function Cell(row, col, wi, he){
	this.row = row;
	this.col = col;

	this.width = wi;
	this.height = he;

	this.ally = undefined;
}


Cell.prototype.getCenter = function(){
	var x = (this.col * this.width) + this.width / 2;
	var y = (this.row * this.height)+ this.height / 2;


	var v = createVector(x,y);
	console.log(x,y);
	return v;
}


Cell.prototype.pointIn = function(x,y){
	if( x >  (this.col * this.width)
	 && x <  (this.col * this.width) + this.width
	 && y >  (this.row * this.height)
	 && y <  (this.row * this.height) + this.height){
		return true;
	}else{
		return false;
	}
}



Cell.prototype.drawBorder = function(){

	fill(0,0,0,0);
	stroke(255,0,0);
	rect(this.col * this.width,
			this.row * this.height,
			this.width, 
			this.height);
	
}
