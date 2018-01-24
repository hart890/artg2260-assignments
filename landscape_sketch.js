function setup() {
	createCanvas(500, 500);
	background(255, 0, 102);
	noStroke();
	
	//sunset
	fill(255, 128, 0);
  	arc(250, 500, 900, 900, PI, TWO_PI);

  	fill(255, 162, 0);
  	arc(250, 500, 700, 700, PI, TWO_PI);

  	//sun
  	fill(255, 255, 0);
  	arc(250, 500, 500, 500, PI, TWO_PI);

  	//ocean
  	fill(0, 0, 102);
  	rect(0, 350, 500, 300);

  	//ground
  	fill(0);
  	rect(0, 400, 500, 300);

  	//mountains
  	//triangle

}