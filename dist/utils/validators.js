"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isValidUsername = isValidUsername;
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
function isValidUsername(username) {
  return username.length >= 3 && username.length <= 20;
}
