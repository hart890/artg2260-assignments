var weight = 1;

function setup() {
	createCanvas(500, 500);
	background(0);
	stroke(255);
	strokeWeight(weight);
}

function draw() {
	if(mouseIsPressed == true){
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function keyPressed() {
	if(key == 'w' || key == 'W'){
		stroke(255);
	}
	else if(key == 'b' || key == 'B'){
		stroke(153, 255, 255);
	}
	else if(key == 'p' || key == 'P'){
		stroke(255, 0, 127);
	}
	else if(key == 'y' || key == 'Y'){
		stroke(255, 255, 0);
	}
	else if(key == 'g' || key == 'G'){
		stroke(153, 255, 51);
	}
	else if(key == 'v' || key == 'V'){
		stroke(222, 0, 255);
	}
	else if(keyCode == RIGHT_ARROW){
		weight++;
		strokeWeight(weight);
	}
	else if(keyCode == LEFT_ARROW){
		weight/=2;
		strokeWeight(weight);
	}
	else if(key == 'c' || key == 'C'){
		createCanvas(500, 500);
		background(0);
		stroke(255);
		strokeWeight(weight);
	}
	else if(key == 's' || key == 'S'){
		saveCanvas('myCanvas');
	}
}