let b;

function setup(){
	b = new Box();
	createCanvas(400,400);
}

function draw() {
	background(0);
	b.display();
	b.move();
	b.teleport();
}

class Box {
	constructor() {
		this.color = 255;
		this.yPos = 400;
	}

	display() {
		fill(this.color);
		rect(width/2 - 15, this.yPos, 30, 30);
	}

	move() {
		this.yPos--;
	}

	teleport() {
		if(this.yPos == 0){
			this.color = random(255);
			this.yPos = 400;
		}
	}
}