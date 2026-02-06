function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

let sum = add(10, 5);
let difference = subtract(10, 5);
let product = multiply(10, 5);

console.log("10 + 5 =", sum);
console.log("10 - 5 =", difference);
console.log("10 × 5 =", product);