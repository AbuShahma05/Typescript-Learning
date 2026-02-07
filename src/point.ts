type Point = {
  x: number;
  y: number;
};

function calculateDistance(p1: Point, p2: Point): number {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

let pointA: Point = { x: 0, y: 0 };
let pointB: Point = { x: 3, y: 4 };

let distance = calculateDistance(pointA, pointB);
console.log("Distance:", distance);
