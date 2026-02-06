class Employee {
  readonly employeeId: string;
  name: string;
  private salary: number;

  constructor(id: string, name: string, salary: number) {
    this.employeeId = id;
    this.name = name;
    this.salary = salary;
  }

  raiseSalary(percentage: number): void {
    this.salary += this.salary * (percentage / 100);
    console.log(`Salary raised by ${percentage}%`);
  }

  getSalary(): number {
    return this.salary;
  }
}

let emp = new Employee("EMP-001", "Alice", 50000);

console.log("Employee ID:", emp.employeeId);
console.log("Name:", emp.name);
console.log("Salary:", emp.getSalary());

emp.raiseSalary(10);
console.log("New Salary:", emp.getSalary());

// emp.employeeId = "EMP-999"; // ERROR - readonly!