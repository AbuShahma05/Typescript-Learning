export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  info(message: string): void {
    console.log(`[${this.prefix}] INFO: ${message}`);
  }

  error(message: string): void {
    console.log(`[${this.prefix}] ERROR: ${message}`);
  }

  warning(message: string): void {
    console.log(`[${this.prefix}] WARNING: ${message}`);
  }
}