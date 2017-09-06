
var board;



function setup() {
	createCanvas(700,400);

	
	init();
}



//This function will be called each frame
function draw() {
	background(51);


	for(var i = 0; i < board.enemies.length; i++){
		var e = board.enemies[i];
		e.update();
	}

	board.display();


	
	var cell = board.getCellAtPoint(mouseX, mouseY);

	if(cell != undefined){
		cell.drawBorder();
	}
}




function init(){	
	board = new Board(5,10);

	board.spawnEnemyOnLaneWithIndex(0);

	board.spawnAllyOnCell(0,3);
	board.spawnAllyOnCell(0,3);
}


function mouseMoved(){

	var cell = board.getCellAtPoint(mouseX, mouseY);

	if(cell != undefined){
		cell.drawBorder();
	}
}


function mouseClicked(){
	var x = mouseX;
	var y = mouseY;


	//Get the cell at this position

	var cell = board.getCellAtPoint(x,y);

	if(cell != undefined){

	}
}