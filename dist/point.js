"use strict";
function calculateDistance(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
let pointA = { x: 0, y: 0 };
let pointB = { x: 3, y: 4 };
let distance = calculateDistance(pointA, pointB);
console.log("Distance:", distance);
