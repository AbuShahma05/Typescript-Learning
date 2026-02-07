class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

let numberBox = new Box<number>(42);
let stringBox = new Box<string>("Hello");
let booleanBox = new Box<boolean>(true);

console.log("Number box:", numberBox.getContent());
console.log("String box:", stringBox.getContent());
console.log("Boolean box:", booleanBox.getContent());

numberBox.setContent(100);
console.log("Updated number box:", numberBox.getContent());

// numberBox.setContent("wrong"); // ERROR: string not assignable to number
