class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
    console.log(`Pushed: ${item}`);
  }

  pop(): T | undefined {
    if (this.items.length === 0) {
      console.log("Stack is empty!");
      return undefined;
    }
    let item = this.items.pop();
    console.log(`Popped: ${item}`);
    return item;
  }

  peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

let numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Top item:", numberStack.peek());
numberStack.pop();
numberStack.pop();
console.log("Size:", numberStack.size());

console.log("---");

let stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
stringStack.push("third");
console.log("Top item:", stringStack.peek());
stringStack.pop();
