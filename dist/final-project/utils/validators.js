"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTitle = isValidTitle;
exports.isValidDescription = isValidDescription;
exports.isNonEmptyString = isNonEmptyString;
function isValidTitle(title) {
  return title.trim().length >= 3 && title.trim().length <= 100;
}
function isValidDescription(description) {
  return description.trim().length >= 0 && description.trim().length <= 500;
}
function isNonEmptyString(value) {
  return value.trim().length > 0;
}
