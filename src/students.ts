interface Student {
  name: string;
  age: number;
  grade: number;
}

let students: Student[] = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 21, grade: 78 }
];

function displayStudent(student: Student): void {
  console.log(`${student.name} (Age ${student.age}): Grade ${student.grade}`);
}

console.log("Class Roster:");
console.log("-------------");

for (let student of students) {
  displayStudent(student);
}