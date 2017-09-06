

function Board(rows, cols){
	this.rows = rows;
	this.cols = cols;
}


Board.prototype.display = function(){

	var rowDiv = height / this.rows;
	var colsDiv = width / this.cols;


	//Paint the background
	fill(19,63,19);
	rect(0,0, width, height);


	fill(0,0,0,0);
	stroke(0);
	//Display each one of the tiles
	for(var r = 0; r < this.rows; r++){
		for(var c = 0; c < this.cols; c++){
			rect(c * colsDiv, r * rowDiv, colsDiv, rowDiv);
		}
	}
}