"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayService = void 0;
const formatters_1 = require("../utils/formatters");
class DisplayService {
  displayTask(task) {
    console.log("\n" + "=".repeat(50));
    console.log((0, formatters_1.formatTask)(task));
    console.log("=".repeat(50) + "\n");
  }
  displayTaskList(tasks, title = "Tasks") {
    console.log("\n" + "=".repeat(50));
    console.log(`📋 ${title} (${tasks.length})`);
    console.log("=".repeat(50));
    if (tasks.length === 0) {
      console.log("No tasks found.");
    } else {
      for (let task of tasks) {
        let priority = (0, formatters_1.getPrioritySymbol)(task.priority);
        let status = (0, formatters_1.getStatusSymbol)(task.status);
        console.log(
          `${priority} ${status} [${task.id}] ${task.title} (${task.category})`,
        );
      }
    }
    console.log("=".repeat(50) + "\n");
  }
  displayStats(stats) {
    console.log("\n" + "=".repeat(50));
    console.log("📊 Task Statistics");
    console.log("=".repeat(50));
    console.log(`Total Tasks: ${stats.total}`);
    console.log(`⏳ Pending: ${stats.pending}`);
    console.log(`🔄 In Progress: ${stats.inProgress}`);
    console.log(`✅ Completed: ${stats.completed}`);
    console.log("\nBy Priority:");
    console.log(`  ⚪ Low: ${stats.byPriority.low}`);
    console.log(`  🟡 Medium: ${stats.byPriority.medium}`);
    console.log(`  🟠 High: ${stats.byPriority.high}`);
    console.log(`  🔴 Urgent: ${stats.byPriority.urgent}`);
    console.log("=".repeat(50) + "\n");
  }
}
exports.DisplayService = DisplayService;
