
var board;


function setup() {
	createCanvas(700,400);

	
	init();
}



//This function will be called each frame
function draw() {
	background(51);

	board.display();
}




function init(){	
	board = new Board(5,7);
}