"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction;
(function (Direction) {
  Direction[(Direction["North"] = 0)] = "North";
  Direction[(Direction["East"] = 1)] = "East";
  Direction[(Direction["South"] = 2)] = "South";
  Direction[(Direction["West"] = 3)] = "West";
})(Direction || (exports.Direction = Direction = {}));
function move(direction) {
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
