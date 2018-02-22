var s;
var scl = 5;
//Y_AXIS = 1;
//var c1, c2;
var obs;
var food;
var score = 0;


function setup() {
	createCanvas(600, 450);
	//c1 = color(255, 0, 127);
  	//c2 = color(255, 145, 0);

	s = new Snake();
	obs = new Obstacle();
	pickLocation();
}

function draw() {
	//setGradient(0, 0, 600, 450, c1, c2, Y_AXIS);
	background(0);

	fill(255);
  	textSize(20);
  	text('Score = ' + score, 10, 30);

	s.update();
	s.show();

	obs.move();
	obs.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

function Snake() {
	this.x = 10;
	this.y = height/2;
	this.xspeed = 1;
	this.yspeed = 0;

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, scl/2, width-(scl/2));
    	this.y = constrain(this.y, scl/2, height-(scl/2));
	}

	this.show = function() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, 20, 20)
	}
}

function Obstacle() {
	this.x = width;
	this.y = 0;
	this.height = random(100, 200);
	this.speed = 5;

	this.move = function() {
		this.x -= this.speed;
	}

	this.show = function() {
		rect(this.x, this.y, 20, this.height);
	}
}

//for background
// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();
//   for (var i = y; i <= y+h; i++) {
//     var inter = map(i, y, y+h, 0, 1);
//     var c = lerpColor(c1, c2, inter);
//     stroke(c);
//     line(x, i, x+w, i);
//   }
// }
