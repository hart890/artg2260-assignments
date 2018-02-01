var c = createCanvas(1200, 500);
	var weight = 1;

function setup() {
	createCanvas(1200, 500);
	background(255);
	strokeWeight(weight);	
}

function draw() {
	if (mouseIsPressed == true) {
			stroke(0);
			line(mouseX, mouseY, pmouseX, pmouseY); 
	}	
}

function keyPressed() {
	if (key == 'c' || key == 'C'){
		saveCanvas(c, 'myCanvas', 'jpg');
	}
	else if (keyCode == RIGHT_ARROW) {
		weight++;
      	strokeWeight(weight);
	}
	else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}