var s;
var scl = 20;
Y_AXIS = 1;
var c1, c2;
var obs;
var food;
var score = 0;


function setup() {
	createCanvas(600, 450);
	c1 = color(255, 0, 127);
  	c2 = color(255, 145, 0);

	s = new Snake();
	obs = new Obstacle();
	pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
	setGradient(0, 0, 600, 450, c1, c2, Y_AXIS);
	//background(0);
	noStroke();

	fill(255);
  	textSize(20);
  	text('Score = ' + score, 10, 30);

	obs.move();
	obs.show();

	if (s.eat(food)) {
    pickLocation();
  }
  	s.death();
  	s.update();
  	s.show();
  	
  	fill(0, 204, 204);
  	rect(food.x, food.y, scl, scl);
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
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      score++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        score = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, 20, 20);

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
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  for (var i = y; i <= y+h; i++) {
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
  }
}
