"use strict";
function displayUser(user) {
  console.log("Username:", user.username);
  console.log("Email:", user.email);
  console.log("Age:", user.age);
  console.log("---");
}
let user1 = {
  username: "alice123",
  email: "alice@example.com",
  age: 28,
};
let user2 = {
  username: "bob456",
  email: "bob@example.com",
  age: 32,
};
displayUser(user1);
displayUser(user2);
