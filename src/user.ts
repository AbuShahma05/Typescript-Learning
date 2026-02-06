interface User {
  username: string;
  email: string;
  age: number;
}

function displayUser(user: User): void {
  console.log("Username:", user.username);
  console.log("Email:", user.email);
  console.log("Age:", user.age);
  console.log("---");
}

let user1: User = {
  username: "alice123",
  email: "alice@example.com",
  age: 28
};

let user2: User = {
  username: "bob456",
  email: "bob@example.com",
  age: 32
};

displayUser(user1);
displayUser(user2);