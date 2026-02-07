interface Person {
  name: string;
  age: number;
}

let alice: Person = {
  name: "Alice",
  age: 25,
};

let bob: Person = {
  name: "Bob",
  age: 30,
};

console.log(alice.name, "is", alice.age, "years old");
console.log(bob.name, "is", bob.age, "years old");
