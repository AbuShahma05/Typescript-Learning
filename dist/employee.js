"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
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
exports.Employee = Employee;
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
exports.Manager = Manager;
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
exports.Developer = Developer;
