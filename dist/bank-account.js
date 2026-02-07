"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
  constructor(accountNumber, owner, initialBalance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  }
  getBalance() {
    return this.balance;
  }
}
exports.BankAccount = BankAccount;
