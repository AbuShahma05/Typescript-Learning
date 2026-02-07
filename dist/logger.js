"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
  constructor(prefix) {
    this.prefix = prefix;
  }
  info(message) {
    console.log(`[${this.prefix}] INFO: ${message}`);
  }
  error(message) {
    console.log(`[${this.prefix}] ERROR: ${message}`);
  }
  warning(message) {
    console.log(`[${this.prefix}] WARNING: ${message}`);
  }
}
exports.Logger = Logger;
