var database, canvas;
var game, form, player;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4;
var cars;

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  console.log(database); 

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
