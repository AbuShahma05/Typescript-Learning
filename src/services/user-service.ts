import { User } from "../models/user";
import { isValidEmail, isValidUsername } from "../utils/validators";

export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  createUser(username: string, email: string): User | null {
    if (!isValidUsername(username)) {
      console.log("Invalid username");
      return null;
    }

    if (!isValidEmail(email)) {
      console.log("Invalid email");
      return null;
    }

    let user: User = {
      id: this.nextId++,
      username: username,
      email: email,
      createdAt: new Date(),
    };

    this.users.push(user);
    console.log(`User created: ${username}`);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
