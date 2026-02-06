export class SecureAccount {
  private accountNumber: string;
  private balance: number;
  public owner: string;

  constructor(accountNumber: string, owner: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited $${amount}`);
  }

  public getBalance(): number {
    return this.balance;
  }
}
