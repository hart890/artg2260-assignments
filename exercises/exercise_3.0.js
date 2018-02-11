// declare variables xPos and yPos
// declare a var called xSpeed;
// declare a var called ySpeed
// declare a variable called img 
// declare a var for image width, assign 40 
// declare a var for image height, assign 30
var xPos;
var yPos;
var xSpeed;
var ySpeed;
var img;
var imgWidth = 40;
var imgHeight = 30;

// use the preload()function to load an image, 
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there
function preload() {
	img = loadImage('assets/png.png');
}

function setup() {
	// create a canvas at least 400 x 400
	// set xPos to be half of the width 
	// set yPos to be half of the height
	createCanvas(400,400);
	xPos = width/2;
	yPos = height/2; 

	// assign xSpeed and ySpeed 
	// with random values between 1 and 10
	xSpeed = random(1, 10);
	ySpeed = random(1, 10);
}

function draw(){
	background(0);

	// draw the image at the (xPos, yPos) coordinate,
	// using the template image(img, xPos, yPos, width, height)
	image(img, xPos, yPos, width, height);

	// add the xSpeed to xPos
	// add the ySpeed to yPos
	xPos += xSpeed;
	yPos += ySpeed;

	// if we reach the edge of the canvas
	// turn around (toggle xSpeed negative to positive)
	if (xPos >= width || xPos <= 0) {
		xSpeed *= -1;
	}

	// same as above, toggle ySpeed if we hit the top or bottom
	if (yPos >= height || yPos <= 0) {
		ySpeed *= -1;
	}
}