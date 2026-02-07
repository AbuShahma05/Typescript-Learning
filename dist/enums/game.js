"use strict";
var GameState;
(function (GameState) {
  GameState[(GameState["MainMenu"] = 0)] = "MainMenu";
  GameState[(GameState["Playing"] = 1)] = "Playing";
  GameState[(GameState["Paused"] = 2)] = "Paused";
  GameState[(GameState["GameOver"] = 3)] = "GameOver";
})(GameState || (GameState = {}));
var PlayerAction;
(function (PlayerAction) {
  PlayerAction["MoveUp"] = "MOVE_UP";
  PlayerAction["MoveDown"] = "MOVE_DOWN";
  PlayerAction["Jump"] = "JUMP";
  PlayerAction["Attack"] = "ATTACK";
})(PlayerAction || (PlayerAction = {}));
class Game {
  constructor() {
    this.state = GameState.MainMenu;
    this.score = 0;
  }
  start() {
    this.state = GameState.Playing;
    this.score = 0;
    console.log("Game started!");
  }
  pause() {
    if (this.state === GameState.Playing) {
      this.state = GameState.Paused;
      console.log("Game paused");
    }
  }
  resume() {
    if (this.state === GameState.Paused) {
      this.state = GameState.Playing;
      console.log("Game resumed");
    }
  }
  handleAction(action) {
    if (this.state !== GameState.Playing) {
      console.log("Cannot perform action - game not active");
      return;
    }
    switch (action) {
      case PlayerAction.MoveUp:
        console.log("Player moved up");
        break;
      case PlayerAction.Jump:
        console.log("Player jumped");
        this.score += 10;
        break;
      case PlayerAction.Attack:
        console.log("Player attacked");
        this.score += 50;
        break;
    }
  }
  getScore() {
    return this.score;
  }
}
let game = new Game();
game.start();
game.handleAction(PlayerAction.Jump);
game.handleAction(PlayerAction.Attack);
game.pause();
game.handleAction(PlayerAction.Jump); // Won't work - game paused
game.resume();
game.handleAction(PlayerAction.MoveUp);
console.log("Final score:", game.getScore());
