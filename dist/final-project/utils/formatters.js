"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.formatTask = formatTask;
exports.getPrioritySymbol = getPrioritySymbol;
exports.getStatusSymbol = getStatusSymbol;
const enums_1 = require("../models/enums");
function formatDate(date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}
function formatTask(task) {
  let lines = [];
  lines.push(`ID: ${task.id}`);
  lines.push(`Title: ${task.title}`);
  lines.push(`Description: ${task.description}`);
  lines.push(`Priority: ${task.priority}`);
  lines.push(`Status: ${task.status}`);
  lines.push(`Category: ${task.category}`);
  lines.push(`Created: ${formatDate(task.createdAt)}`);
  if (task.completedAt) {
    lines.push(`Completed: ${formatDate(task.completedAt)}`);
  }
  return lines.join("\n");
}
function getPrioritySymbol(priority) {
  switch (priority) {
    case enums_1.Priority.Low:
      return "⚪";
    case enums_1.Priority.Medium:
      return "🟡";
    case enums_1.Priority.High:
      return "🟠";
    case enums_1.Priority.Urgent:
      return "🔴";
  }
}
function getStatusSymbol(status) {
  switch (status) {
    case enums_1.TaskStatus.Pending:
      return "⏳";
    case enums_1.TaskStatus.InProgress:
      return "🔄";
    case enums_1.TaskStatus.Completed:
      return "✅";
  }
}
