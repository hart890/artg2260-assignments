var song;

function preload() {
	song = loadSound("Real Love Baby.mp3");
	img = loadImage("misty.psd");
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
}


function draw() {
	background(255, 204, 255);

	fill(0);
	noStroke();
	var level = amp.getLevel();
	var size = map(level, 0, 1, 0, 200);
	image(img, size, size);
	//ellipse(width/2, height/2, size, size);
}
