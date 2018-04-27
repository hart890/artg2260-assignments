var tileSize = 20;

// randomSeed(int);


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	for (var y = 10; y < windowHeight; y += 30){
		for (var x = 10; x < windowWidth; x += 30){
			var r = random(1, 255);
			var g = random(1, 255);
			var b = random(1, 255);

			fill(r, g, b);
			noStroke();
			rect(x, y, tileSize, tileSize);
		}
	}
}