"use strict";
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`${this.year} ${this.brand} ${this.model}`);
  }
}
let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Honda", "Civic", 2023);
car1.displayInfo();
car2.displayInfo();
