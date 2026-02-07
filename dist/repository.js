"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
  constructor() {
    this.users = [];
  }
  getById(id) {
    return this.users.find((user) => user.id === id);
  }
  getAll() {
    return this.users;
  }
  add(user) {
    this.users.push(user);
    console.log(`Added user: ${user.name}`);
  }
  delete(id) {
    this.users = this.users.filter((user) => user.id !== id);
    console.log(`Deleted user with ID: ${id}`);
  }
}
exports.UserRepository = UserRepository;
