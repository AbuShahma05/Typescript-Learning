enum GameState {
  MainMenu,
  Playing,
  Paused,
  GameOver
}

enum PlayerAction {
  MoveUp = "MOVE_UP",
  MoveDown = "MOVE_DOWN",
  Jump = "JUMP",
  Attack = "ATTACK"
}

class Game {
  private state: GameState;
  private score: number;

  constructor() {
    this.state = GameState.MainMenu;
    this.score = 0;
  }

  start(): void {
    this.state = GameState.Playing;
    this.score = 0;
    console.log("Game started!");
  }

  pause(): void {
    if (this.state === GameState.Playing) {
      this.state = GameState.Paused;
      console.log("Game paused");
    }
  }

  resume(): void {
    if (this.state === GameState.Paused) {
      this.state = GameState.Playing;
      console.log("Game resumed");
    }
  }

  handleAction(action: PlayerAction): void {
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

  getScore(): number {
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