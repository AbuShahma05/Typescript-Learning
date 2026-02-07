"use strict";
class Box {
  constructor(content) {
    this.content = content;
  }
  getContent() {
    return this.content;
  }
  setContent(content) {
    this.content = content;
  }
}
let numberBox = new Box(42);
let stringBox = new Box("Hello");
let booleanBox = new Box(true);
console.log("Number box:", numberBox.getContent());
console.log("String box:", stringBox.getContent());
console.log("Boolean box:", booleanBox.getContent());
numberBox.setContent(100);
console.log("Updated number box:", numberBox.getContent());
// numberBox.setContent("wrong"); // ERROR: string not assignable to number
