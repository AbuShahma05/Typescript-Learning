class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Some generic animal sound");
  }

  describe(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }

  fetch(): void {
    console.log(`${this.name} is fetching the ball!`);
  }
}

class Cat extends Animal {
  indoor: boolean;

  constructor(name: string, age: number, indoor: boolean) {
    super(name, age);
    this.indoor = indoor;
  }

  makeSound(): void {
    console.log("Meow!");
  }

  scratch(): void {
    console.log(`${this.name} is scratching the furniture!`);
  }
}

let dog = new Dog("Max", 3, "Golden Retriever");
let cat = new Cat("Whiskers", 2, true);

dog.describe(); // Inherited from Animal
dog.makeSound(); // Overridden in Dog
dog.fetch(); // Unique to Dog

console.log("---");

cat.describe(); // Inherited from Animal
cat.makeSound(); // Overridden in Cat
cat.scratch(); // Unique to Cat
