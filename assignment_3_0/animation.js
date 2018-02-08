var dots = []; //array of objects

var r = 0;
var g = 0;
var b = 0;

function setup() {
	createCanvas(600, 400);
	//create objects
	for (var i = 0; i < 50; i++) {
		dots.push(new Wiggle());
	}
}

// FIX

function draw() {
	//background
	r = map(frameCount, 0, 600, 0, 255);
	//g = map(frameCount, 0, 400, 255, 0);
	b = map(frameCount, 0, 600, 255, 0);
	background(r, 0, b);

	for(var i = 0; i < dots.length; i++) {
		dots[i].move();
		dots[i].display();
	}
}

//custom function
function Wiggle() {
	this.x = random(width);
	this.y = random(height);
	this.diameter = random(10, 30);
	this.speed = 1;

	this.move = function() {
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	};

	this.display = function() {
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter)
	};
}

