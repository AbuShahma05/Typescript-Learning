"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.TaskStatus = exports.Priority = void 0;
var Priority;
(function (Priority) {
  Priority["Low"] = "LOW";
  Priority["Medium"] = "MEDIUM";
  Priority["High"] = "HIGH";
  Priority["Urgent"] = "URGENT";
})(Priority || (exports.Priority = Priority = {}));
var TaskStatus;
(function (TaskStatus) {
  TaskStatus["Pending"] = "PENDING";
  TaskStatus["InProgress"] = "IN_PROGRESS";
  TaskStatus["Completed"] = "COMPLETED";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var Category;
(function (Category) {
  Category["Work"] = "WORK";
  Category["Personal"] = "PERSONAL";
  Category["Shopping"] = "SHOPPING";
  Category["Health"] = "HEALTH";
  Category["Other"] = "OTHER";
})(Category || (exports.Category = Category = {}));
