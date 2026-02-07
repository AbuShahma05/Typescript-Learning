"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./services/user-service");
let userService = new user_service_1.UserService();
userService.createUser("alice", "alice@example.com");
userService.createUser("bob", "bob@example.com");
userService.createUser("x", "invalid"); // Too short username
userService.createUser("charlie", "bad-email"); // Invalid email
console.log("---");
console.log("All users:");
userService.getAllUsers().forEach((user) => {
  console.log(`- ${user.username} (${user.email})`);
});
