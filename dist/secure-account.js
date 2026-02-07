"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureAccount = void 0;
class SecureAccount {
  constructor(accountNumber, owner, initialBalance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}`);
  }
  getBalance() {
    return this.balance;
  }
}
exports.SecureAccount = SecureAccount;
