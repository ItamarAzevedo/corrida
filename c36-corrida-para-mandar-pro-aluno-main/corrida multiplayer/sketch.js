var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1,car2,carimg1,carimg2;
var track;
var cars = [];
var fuels,powerCoins;
var fuelsImg,powerCoinsImg;
var obstacles,obstaclesImg1,obstaclesImg2;
var lifeimg;
var blastimg

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  carimg1=loadImage("./assets/car1.png")
  carimg2=loadImage("./assets/car2.png")
  track=loadImage("./assets/track.jpg")
  fuelsImg=loadImage("./assets/fuel.png")
  powerCoinsImg=loadImage("./assets/goldCoin.png")
  obstaclesImg1=loadImage("./assets/obstacle1.png")
  obstaclesImg2=loadImage("./assets/obstacle2.png")
  lifeimg=loadImage("./assets/life.png")
  blastimg=loadImage("./assets/blast.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
    game.play()
  }

  if (gameState===2) {
    game.showLeaderBoard()
    game.end()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
