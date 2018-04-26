var weight = 1;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	fill(255, 255, 255);
	textSize(24);
	text('Drawing App', 10, 30);
	fill(255, 255, 255);
	textSize(18);
	text('Key:', 10, 60);
	fill(255, 255, 255);
	textSize(18);
	text('c = clear canvas', 10, 90);
	fill(255, 255, 255);
	textSize(18);
	text('s = save drawing', 10, 120);
	fill(255, 255, 255);
	textSize(18);
	text('left/right arrows = change stroke weight', 10, 150);
	fill(255, 255, 255);
	textSize(18);
	text('Colors:', 10, 180);
	fill(255, 255, 255);
	textSize(18);
	text('w = white', 10, 210);
	fill(255, 255, 255);
	textSize(18);
	text('b = blue', 10, 240);
	fill(255, 255, 255);
	textSize(18);
	text('p = pink', 10, 270);
	fill(255, 255, 255);
	textSize(18);
	text('y = yellow', 10, 300);
	fill(255, 255, 255);
	textSize(18);
	text('g = green', 10, 330);
	fill(255, 255, 255);
	textSize(18);
	text('v = violet', 10, 360);
	fill(255, 255, 255);

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
	createCanvas(windowWidth, windowHeight);
	background(0);

	fill(255, 255, 255);
	textSize(24);
	text('Drawing App', 10, 30);
	fill(255, 255, 255);
	textSize(18);
	text('Key:', 10, 60);
	fill(255, 255, 255);
	textSize(18);
	text('c = clear canvas', 10, 90);
	fill(255, 255, 255);
	textSize(18);
	text('s = save drawing', 10, 120);
	fill(255, 255, 255);
	textSize(18);
	text('left/right arrows = change stroke weight', 10, 150);
	fill(255, 255, 255);
	textSize(18);
	text('Colors:', 10, 180);
	fill(255, 255, 255);
	textSize(18);
	text('w = white', 10, 210);
	fill(255, 255, 255);
	textSize(18);
	text('b = blue', 10, 240);
	fill(255, 255, 255);
	textSize(18);
	text('p = pink', 10, 270);
	fill(255, 255, 255);
	textSize(18);
	text('y = yellow', 10, 300);
	fill(255, 255, 255);
	textSize(18);
	text('g = green', 10, 330);
	fill(255, 255, 255);
	textSize(18);
	text('v = violet', 10, 360);
	fill(255, 255, 255);

	stroke(255);
	strokeWeight(weight);
	}
	else if(key == 's' || key == 'S'){
		saveCanvas('myCanvas');
	}
}