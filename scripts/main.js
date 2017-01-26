function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
}

function setup() {
	createCanvas(gameConfig.screenX,gameConfig.screenY);
	instializeInSetup(mario);
	// playBGMusic();
}

function draw() {
	game()
}






