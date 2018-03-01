//Game v3

var gameState = 0;

var bird;
var obs = [];
var scl = 20;
var score = 0;
var lives = 3;
var food = [];


function setup() {
	createCanvas(400, 600);

	bird = new Bird();
	//food = new Food();
	food.push(new Food());
	obs.push(new Obstacle());
}

function draw() {
	if (gameState == 0) {
		startScreen();
	}
	else if (gameState == 1){
		background(188, 0, 202);
		noStroke();
		//sunset
		fill(255, 0, 127);
		rect(0, 300, width, height-30);
		fill(255, 0, 127, 90);
		rect(0, 200, width, height-30);
		fill(255, 0, 127, 80);
		rect(0, 100, width, height-30);

		//sun
		fill(255, 255, 0);
		ellipse(120, 470, 50, 50);
		fill(255, 255, 0, 98);
		ellipse(120, 470, 70, 70);
		fill(255, 255, 0, 96);
		ellipse(120, 470, 90, 90);
		fill(255, 255, 0, 94);
		ellipse(120, 470, 110, 110);
		fill(255, 255, 0, 92);
		ellipse(120, 470, 150, 150);
		fill(255, 255, 0, 90);
		ellipse(120, 470, 190, 190);
		fill(255, 255, 0, 88);
		ellipse(120, 470, 280, 280);

		//mountains
		fill(32, 32, 32, 95);
		triangle(-30,height,150,height,60,530);
		triangle(110,height,width+30,height,270,500);
		triangle(160,height,width+90,height,340,510);
		fill(0);
		triangle(0,height,160,height,80,540);
		triangle(30,height,190,height,110,550);
		triangle(140,height,width+60,height,300,500);


		for (var i = obs.length-1; i >= 0; i--) {
			obs[i].show();
			obs[i].update();

			if (obs[i].hits(bird)) {
				console.log("HIT");
				lives -= 1;

				if (lives <= 0) {
					gameState = 2;
				}
			}

			if (obs[i].offscreen()) {
				obs.splice(i, 1); //delete from array
			}
		}

		for (var i = food.length-1; i >= 0; i--) {
			food[i].show();
			food[i].update();

			if (bird.overlap(food[i])) {
				console.log("MUNCH");
				score++;
				food.splice(i, 1);
				food.push(new Food());
			}

			if (food[i].offscreen()) {
				food.splice(i, 1); //delete from array
				food.push(new Food());
			}
		}

		bird.update();
		bird.show();

		//every 100 frames
		if (frameCount % 100 == 0) {
			obs.push(new Obstacle());
		}

		fill(0);
	  	textSize(18);
	  	text('score = ' + score, 50, 30);
	}
	else if (gameState == 2) {
    	gameOver();
  	}
}

function startScreen(){
  obs = [];
  //food = [];
  score = 0;
  lives = 3;

  background(255, 255, 0);
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("press SPACE to begin", width/2, height/2);

  textAlign(CENTER);
  text("keep pressing SPACE to keep bird afloat,", width/2, height/2+100);
  text("collect food, and avoid obstacles!", width/2, height/2+130);
}

function gameOver(){
  background(255, 255, 0);
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2);
  text("score: " + score, width/2, height/2+100);
  text("press SPACE to play again", width/2, height/2+130);

  obs = [];
  //food = [];
  //score = 0;
  //lives = 3;
}

function keyPressed() {
	if (gameState == 0 && key == ' ') {
		//score = 0;
		gameState = 1;
	}
	else if(gameState = 1) {
		bird.up();
	}
	else if (gameState == 2 && key == ' '){
   		gameState = 1;
 	}
}

function Bird() {
	this.y = height/2;
	this.x = 64;
	this.diameter = 20;

	this.gravity = 0.6;
	this.lift = -15;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter);
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

	this.overlap = function(food) {
		let d = dist(this.x, this.y, food.x, food.y);

		if(d <= food.diameter/2 + this.diameter/2){
			return true;
		} else {
			return false;
		}

	}
}

function Obstacle() {
	this.top = random(height/2-30);
	this.bottom = random(height/2-30);
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

	//checks if obstacle is offscreen
	this.offscreen = function() {
		return this.x < -this.w;
	}
}

function Food() {
	this.x = width+250;
	this.y = random(50, 550);
	this.w = 20;
	this.speed = 2;
	this.diameter = 20;

	this.show = function() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	//checks if obstacle is offscreen
	this.offscreen = function() {
		return this.x < 0;
	}
}



