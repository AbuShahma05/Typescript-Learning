abstract class Shape {
  abstract getArea(): number;

  describe(): void {
    console.log(`This shape has an area of ${this.getArea()}`);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

circle.describe();
rectangle.describe();

// let shape = new Shape(); // ERROR: Cannot create instance of abstract class