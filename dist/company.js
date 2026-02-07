"use strict";
class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  getDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }
  getSalary() {
    return this.salary;
  }
}
class Manager extends Employee {
  constructor(name, id, salary, teamSize) {
    super(name, id, salary);
    this.teamSize = teamSize;
  }
  getDetails() {
    super.getDetails();
    console.log(`Role: Manager, Team Size: ${this.teamSize}`);
  }
  getBonus() {
    return this.salary * 0.15;
  }
}
class Developer extends Employee {
  constructor(name, id, salary, language) {
    super(name, id, salary);
    this.programmingLanguage = language;
  }
  getDetails() {
    super.getDetails();
    console.log(`Role: Developer, Language: ${this.programmingLanguage}`);
  }
  getBonus() {
    return this.salary * 0.1;
  }
}
let manager = new Manager("Alice", "M001", 80000, 5);
let developer = new Developer("Bob", "D001", 60000, "TypeScript");
manager.getDetails();
console.log(`Salary: $${manager.getSalary()}`);
console.log(`Bonus: $${manager.getBonus()}`);
console.log("---");
developer.getDetails();
console.log(`Salary: $${developer.getSalary()}`);
console.log(`Bonus: $${developer.getBonus()}`);
