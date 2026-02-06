export enum Direction {
  North,
  East,
  South,
  West
}

function move(direction: Direction): void {
  switch (direction) {
    case Direction.North:
      console.log("Moving North");
      break;
    case Direction.East:
      console.log("Moving East");
      break;
    case Direction.South:
      console.log("Moving South");
      break;
    case Direction.West:
      console.log("Moving West");
      break;
  }
}

move(Direction.North);
move(Direction.East);

console.log("Direction.North value:", Direction.North);
console.log("Direction.South value:", Direction.South);