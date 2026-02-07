export class Employee {
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

export class Manager extends Employee {
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

export class Developer extends Employee {
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
