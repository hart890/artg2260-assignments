// function setup() {
// 	createCanvas(500, 500);
// 	background(0);
// 	noStroke();

// 	//for loop

// 	//want circle
// 	//var to change size
// 	//something to handle clicking - change size 
// 	//change color


// }


var tileSize = 10;

function setup() {
	createCanvas(800, 300);
	background(0);
	
	for (var y = 10; y < 300; y += 10){
		for (var x = 10; x < 800; x += 10){
			ellipse(x, y, tileSize, tileSize);
		}
	}
}