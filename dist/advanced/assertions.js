"use strict";
let userInput = "Hello, TypeScript!";
// TypeScript doesn't know what type userInput is
// We can tell TypeScript we know it's a string
let strLength = userInput.length;
console.log("String length:", strLength);
// Alternative syntax (same thing)
let strUpper = userInput.toUpperCase();
console.log("Uppercase:", strUpper);
// Real-world example: working with DOM
function getElementValue(id) {
  let element = document.getElementById(id);
  // TypeScript knows element might be null
  // And doesn't know it's an input element
  if (element) {
    return element.value;
  }
  return "";
}
// Note: This won't run in Node.js (no DOM)
// Just showing the pattern
console.log("Type assertions demonstrated");
