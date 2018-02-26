// //include forces, transformations, and new class(es)
// //Use of transformations with push() and pop()
// //forces -- gravity


var bird;
var pipes = [];
var score = 0;


function setup() {
	createCanvas(400, 600);

	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {


	background(218, 11, 211);

	//background
	fill(255, 0, 127);
	rect(0, 70, width, height-30);

	fill(255, 128, 0);
	rect(0, 200, width, height-30);


	fill(0);
	ellipse(100, height, 300, 100, 10);
	ellipse(300, height, 300, 150, 10);

	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {
			console.log("HIT");
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1); //delete from array
		}
	}

	bird.update();
	bird.show();

	//every 100 frames
	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

	fill(0);
  	textSize(18);
  	text('Score = ' + score, 10, 30);
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}
}

function Bird() {
	this.y = height/2;
	this.x = 64;

	this.gravity = 0.6;
	this.lift = -15;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, 16, 16)
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.veloctiy = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.veloctiy = 0;
		}
	}
}

function Pipe() {
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 2;

	this.hits = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				return true;
			}
		}
		return false;
	}

	this.show = function() {
		fill(255);
		noStroke();
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	//checks if pipe is offscreen
	this.offscreen = function() {
		return this.x < -this.w;
	}
}


