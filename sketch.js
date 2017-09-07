
var board;



function setup() {
	createCanvas(700,400);


	init();
}



//This function will be called each frame
function draw() {
	background(51);


	for(var i = 0; i < board.projs.length; i++){
		var p = board.projs[i];
		p.update();
	}


	for(var i = 0; i < board.enemies.length; i++){
		var e = board.enemies[i];
		e.update();
	}


	for(var i = 0; i < board.allies.length; i++){
		var a = board.allies[i];
		a.update();
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

	board.spawnAllyOnCell(0,0);

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
		board.spawnAllyOnCell(cell.row,cell.col);
	}
}
