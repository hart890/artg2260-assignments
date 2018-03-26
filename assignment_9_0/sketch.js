
//analyze()
//input()

//pause()


var song;

function preload() {
	song = loadSound("Real Love Baby.mp3");
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
	background(0);

	fill(255);
	var level = amp.getLevel();
	var size = map(level, 0, 1, 0, 200);
	ellipse(width/2, height/2, size, size);
}

//bubble object?
