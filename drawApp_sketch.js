function setup() {
	createCanvas(1200, 500);
	background(255);

	function draw(){
  	if (mouseIsPressed == true) {
    	line(mouseX, mouseY, pmouseX, pmouseY); 
  	}	
	}	
}