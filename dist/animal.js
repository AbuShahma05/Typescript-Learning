"use strict";
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  makeSound() {
    console.log("Some generic animal sound");
  }
  describe() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  makeSound() {
    console.log("Woof! Woof!");
  }
  fetch() {
    console.log(`${this.name} is fetching the ball!`);
  }
}
class Cat extends Animal {
  constructor(name, age, indoor) {
    super(name, age);
    this.indoor = indoor;
  }
  makeSound() {
    console.log("Meow!");
  }
  scratch() {
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
