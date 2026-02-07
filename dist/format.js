"use strict";
function formatValue(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(3.14159)); // "3.14"
