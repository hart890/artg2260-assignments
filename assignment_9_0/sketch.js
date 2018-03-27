var song;

var navy;
var purple;
var cyan;
var yellow;

var c = [];


function preload() {
	song = loadSound("Real Love Baby.mp3");
	//img = loadImage("misty.jpg");
}

function setup() {
	canvas = createCanvas(600, 400);
	amp = new p5.Amplitude();
	// song.play();		
	// song.setVolume(0.3);	

	canvas.mouseClicked(function() {
		if(song.isPlaying()){
			song.stop();
		}
		else {
			song.play();
			song.setVolume(0.3);

		}
	});

	x = random(0, width);
	y = random(0, height);


}


function draw() {
	background(255, 204, 255);

	navy = color(0, 0, 204);
	purple = color(102, 0, 204);
	cyan = color(51, 255, 255);
	yellow = color(255, 255, 51);

	c = [navy, purple, cyan, yellow];

	var level = amp.getLevel();
	var size = map(level, 0, 1, 0, 200);
	//image(img, size, size);

	for(var i = 0; i < 100; i++) {

		for(var j = 0; j < 4; j++) {
			noStroke();
			fill(c[j]);
		}

		//fill(c.random());
		ellipse(x, y, size, size);

		//resets
		x = random(0, width);
		y = random(0, height);

	}
}


