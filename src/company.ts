class Employee {
  protected name: string;
  protected id: string;
  protected salary: number;

  constructor(name: string, id: string, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  getDetails(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, id: string, salary: number, teamSize: number) {
    super(name, id, salary);
    this.teamSize = teamSize;
  }

  getDetails(): void {
    super.getDetails();
    console.log(`Role: Manager, Team Size: ${this.teamSize}`);
  }

  getBonus(): number {
    return this.salary * 0.15;
  }
}

class Developer extends Employee {
  private programmingLanguage: string;

  constructor(name: string, id: string, salary: number, language: string) {
    super(name, id, salary);
    this.programmingLanguage = language;
  }

  getDetails(): void {
    super.getDetails();
    console.log(`Role: Developer, Language: ${this.programmingLanguage}`);
  }

  getBonus(): number {
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
