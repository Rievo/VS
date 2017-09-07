

function Board(rows, cols){
	this.rows = rows;
	this.cols = cols;


	this.enemies = [];
	this.allies = [];
	this.projs = [];

	this.cells = [];


	var rowDiv = height / this.rows;
	var colsDiv = width / this.cols;

	for(var r = 0; r < this.rows; r++){
		this.cells[r] = [];

		for(var c = 0; c < this.cols; c++){
			var cell = new Cell(r,c,colsDiv,rowDiv);
			this.cells[r].push(cell);
		}
	}
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



	//Display the projectiles
	for(var i = 0; i< this.projs.length; i++){
		var p = this.projs[i];
		p.display();
	}


	//Display the allies
	for(var i = 0; i< this.allies.length; i++){
		var a = this.allies[i];
		a.display();
	}

	//Display the enemies
	for(var i = 0; i< this.enemies.length; i++){
		var e = this.enemies[i];
		e.display();
	}

	//Check and remove the dead allies and enemies
	this.checkDeadAllies();
	this.checkDeadProjs();
}



function getIndexInArrayForObject(array, object){
	for(var i = 0; i< array.length; i++){
		if(array[i] === object){
			return i;
		}
	}

	return -1;
}

Board.prototype.spawnAllyOnCell = function(row,col){
	var cell = this.cells[row][col];


	if(cell.ally  == undefined){ //The cell is empty
		var center = cell.getCenter();

		var ally = new Ally();
		ally.setCenter(center.x, center.y);
		this.allies.push(ally);

		cell.ally = ally;
		ally.currentCell = cell;
	}else{
		console.log("Error. The cell is not empty");
	}

}

Board.prototype.checkDeadAllies = function(){
	var alliesToRemove = [];

	for(var i = 0; i< this.allies.length; i++){
		var a = this.allies[i];
		var r = a.checkLife();

		if(r != undefined){
			alliesToRemove.push(a);
		}
	}

	for(var i = 0; i< alliesToRemove.length; i++){
		var remove = alliesToRemove[i];
		remove.currentCell.ally = undefined;
		var indexInArray = getIndexInArrayForObject(this.allies, remove);
		this.allies.splice(indexInArray, 1);

	}
}


Board.prototype.checkDeadProjs = function(){
	var projsToRemove = [];

	for(var i = 0; i< this.projs.length; i++){
		var p = this.projs[i];


		if(p.center.x >= width){
			projsToRemove.push(p);
		}
	}

	for(var i = 0; i< projsToRemove.length; i++){
		var remove = projsToRemove[i];

		var indexInArray = getIndexInArrayForObject(this.projs, remove);
		this.projs.splice(indexInArray, 1);

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


		//The X will be width +- something

		var enemy = new Enemy();
		enemy.setCenter(width - 100 , laneStart + enemy.height/2);
		this.enemies.push(enemy);
	}
}

Board.prototype.getCellAtPoint = function(x, y){

	for(var r = 0; r < this.rows; r++){

		for(var c = 0; c < this.cols; c++){

			var cell = this.cells[r][c];

			if(cell.pointIn(x,y)){
				return cell;
			}
		}
	}

	return undefined;
}


Board.prototype.getAlliesAtRangeOfEnemy = function(distance, enemy){
	var atRange = [];


	for(var i = 0; i< this.allies.length; i++){
		var a = this.allies[i];


		var d = dist(a.center.x, a.center.y, enemy.center.x, enemy.center.y);


		if(d <= distance + (a.width)){
			atRange.push(a);
		}
	}

	return atRange;
}


Board.prototype.spawnProjectile = function(p){
	this.projs.push(p);
}
