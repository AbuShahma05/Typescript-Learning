import { Task, TaskStats } from "../models/task";
import {
  formatTask,
  getPrioritySymbol,
  getStatusSymbol,
} from "../utils/formatters";

export class DisplayService {
  displayTask(task: Task): void {
    console.log("\n" + "=".repeat(50));
    console.log(formatTask(task));
    console.log("=".repeat(50) + "\n");
  }

  displayTaskList(tasks: Task[], title: string = "Tasks"): void {
    console.log("\n" + "=".repeat(50));
    console.log(`📋 ${title} (${tasks.length})`);
    console.log("=".repeat(50));

    if (tasks.length === 0) {
      console.log("No tasks found.");
    } else {
      for (let task of tasks) {
        let priority = getPrioritySymbol(task.priority);
        let status = getStatusSymbol(task.status);
        console.log(
          `${priority} ${status} [${task.id}] ${task.title} (${task.category})`,
        );
      }
    }

    console.log("=".repeat(50) + "\n");
  }

  displayStats(stats: TaskStats): void {
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
