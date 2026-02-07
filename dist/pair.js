"use strict";
function createPair(key, value) {
  return { key: key, value: value };
}
let pair1 = createPair("name", "Alice");
let pair2 = createPair("age", 25);
let pair3 = createPair(1, true);
console.log(pair1);
console.log(pair2);
console.log(pair3);
