function setup() {
	createCanvas(500, 500);
	background(0);
	noStroke();

	fill(255);
  	arc(250, 150, 100, 100, PI, TWO_PI);

	//head
	fill(255);
	ellipse(250, 150, 65, 65);

	//eyes
	fill(0);
	ellipse(240, 150, 10, 10);
	fill(0);
	ellipse(260, 150, 10, 10);

	//mouth
	fill(0);
	ellipse(250, 165, 20, 10);

	//body
	fill(255);
	rect(245, 182, 10, 150);

	//arms
	fill(255);
	rect(255, 220, 100, 10);
	fill(255);
	rect(145, 220, 100, 10);
	fill(255);
	rect(145, 220, 10, 50);
	fill(255);
	rect(345, 180, 10, 50);

	//hands
	fill(255);
	rect(345, 180, 30, 10);
	fill(255);
	rect(125, 265, 30, 10);

	//legs
	fill(255);
	rect(255, 322, 100, 10);
	fill(255);
	rect(145, 322, 100, 10);
	fill(255);
	rect(345, 322, 10, 100);
	fill(255);
	rect(145, 322, 10, 100);

	//feet
	fill(255);
	rect(345, 420, 30, 10);
	fill(255);
	rect(125, 420, 30, 10);

}