"use strict";
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
    console.log(`Pushed: ${item}`);
  }
  pop() {
    if (this.items.length === 0) {
      console.log("Stack is empty!");
      return undefined;
    }
    let item = this.items.pop();
    console.log(`Popped: ${item}`);
    return item;
  }
  peek() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
let numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Top item:", numberStack.peek());
numberStack.pop();
numberStack.pop();
console.log("Size:", numberStack.size());
console.log("---");
let stringStack = new Stack();
stringStack.push("first");
stringStack.push("second");
stringStack.push("third");
console.log("Top item:", stringStack.peek());
stringStack.pop();
