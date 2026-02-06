export interface Repository<T> {
  getById(id: number): T | undefined;
  getAll(): T[];
  add(item: T): void;
  delete(id: number): void;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserRepository implements Repository<User> {
  private users: User[] = [];

  getById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAll(): User[] {
    return this.users;
  }

  add(user: User): void {
    this.users.push(user);
    console.log(`Added user: ${user.name}`);
  }

  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    console.log(`Deleted user with ID: ${id}`);
  }
}
