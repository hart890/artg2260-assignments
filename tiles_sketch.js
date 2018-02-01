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
var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);


function setup() {
	createCanvas(800, 300);
	background(0);

	for (var y = 10; y < 300; y += 10){
		for (var x = 10; x < 800; x += 10){
			fill(r, g, b);
			ellipse(x, y, tileSize, tileSize);
		}
	}
}