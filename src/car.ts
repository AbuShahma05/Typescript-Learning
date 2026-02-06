class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`${this.year} ${this.brand} ${this.model}`);
  }
}

let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Honda", "Civic", 2023);

car1.displayInfo();
car2.displayInfo();