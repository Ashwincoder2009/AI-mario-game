function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotposes);
}

function draw() {
game();
}
function modelLoaded(){
console.log("Model Loaded !");
}

function gotposes(result){
if(result.length>0){
console.log(result);
NoseX=result[0].pose.nose.x;
NoseY=result[0].pose.nose.y;
}
}



