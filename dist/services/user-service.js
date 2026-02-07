"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const validators_1 = require("../utils/validators");
class UserService {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }
  createUser(username, email) {
    if (!(0, validators_1.isValidUsername)(username)) {
      console.log("Invalid username");
      return null;
    }
    if (!(0, validators_1.isValidEmail)(email)) {
      console.log("Invalid email");
      return null;
    }
    let user = {
      id: this.nextId++,
      username: username,
      email: email,
      createdAt: new Date(),
    };
    this.users.push(user);
    console.log(`User created: ${username}`);
    return user;
  }
  getAllUsers() {
    return this.users;
  }
  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}
exports.UserService = UserService;
