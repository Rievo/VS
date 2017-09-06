

function Board(rows, cols){
	this.rows = rows;
	this.cols = cols;


	this.enemies = [];
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


	//Display the enemies

	for(var i = 0; i< this.enemies.length; i++){
		var e = this.enemies[i];
		e.display();
	}
}



Board.prototype.spawnEnemyOnLaneWithIndex = function(index){
	if(index >= this.rows){
		console.log("Error. Index is not available")
	}else{
		//Get the center of that lane
		var rowDiv = height / this.rows;
		var colsDiv = width / this.cols;

		var laneStart = rowDiv * index;

		//Convert to the center
		laneStart = laneStart + rowDiv / 2.0;
		console.log(width - 100 , laneStart );

		//The X will be width +- something

		var enemy = new Enemy();
		enemy.setCenter(width - 100 , laneStart + enemy.height/2);
		this.enemies.push(enemy);
	}
}