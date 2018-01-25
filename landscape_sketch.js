function setup() {
	createCanvas(500, 500);
	background(102, 0, 51);
	noStroke();
	
	//sunset
	fill(153, 0, 76);
  	arc(250, 500, 900, 900, PI, TWO_PI);

  	fill(255, 0, 102);
  	arc(250, 500, 850, 850, PI, TWO_PI);

	fill(255, 128, 0);
  	arc(250, 500, 800, 800, PI, TWO_PI);

  	fill(255, 162, 0);
  	arc(250, 500, 700, 700, PI, TWO_PI);

  	//sun
  	fill(255, 255, 0);
  	arc(250, 500, 500, 500, PI, TWO_PI);

  	//ocean
  	fill(0, 204, 204);
  	rect(0, 340, 500, 300);

  	fill(0, 128, 255);
  	rect(0, 350, 500, 300);

  	fill(0, 0, 102);
  	rect(0, 370, 500, 300);

  	//ground
  	fill(0);
  	rect(0, 400, 500, 300);

  	//trees
  	fill(0);
  	rect(400, 340, 10, 60);

  	fill(0);
  	rect(450, 340, 10, 60);

  	fill(0);
  	triangle(405, 250, 380, 360, 430, 360); 

  	fill(0);
  	triangle(455, 250, 420, 360, 490, 360); 



}