
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
	
}




function init(){	
	board = new Board(5,10);

	board.spawnEnemyOnLaneWithIndex(0);
}