// Use randomness or noise
// Use the map() function
// Use a for loop
// Use frameCount() to create a time-based effect
// Use a custom function
// Use an array
// Use an array of objects

var r = 0;
var g = 0;
var b = 0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	r = map(mouseX, 0, 600, 0, 255);
	g = map(mouseY, 0, 400, 255, 0);
	b = map(mouseX, 0, 600, 255, 0);
	background(r, g, b);
}