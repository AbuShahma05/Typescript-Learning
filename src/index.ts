import { UserService } from "./services/user-service";

let userService = new UserService();

userService.createUser("alice", "alice@example.com");
userService.createUser("bob", "bob@example.com");
userService.createUser("x", "invalid"); // Too short username
userService.createUser("charlie", "bad-email"); // Invalid email

console.log("---");
console.log("All users:");
userService.getAllUsers().forEach((user) => {
  console.log(`- ${user.username} (${user.email})`);
});
