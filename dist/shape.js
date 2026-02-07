"use strict";
class Shape {
  describe() {
    console.log(`This shape has an area of ${this.getArea()}`);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
circle.describe();
rectangle.describe();
// let shape = new Shape(); // ERROR: Cannot create instance of abstract class
