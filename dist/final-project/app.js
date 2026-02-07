"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManagerApp = void 0;
const task_service_1 = require("./services/task-service");
const display_service_1 = require("./services/display-service");
const enums_1 = require("./models/enums");
class TaskManagerApp {
  constructor() {
    this.taskService = new task_service_1.TaskService();
    this.displayService = new display_service_1.DisplayService();
  }
  run() {
    console.log("\n🎯 Welcome to Task Manager!");
    console.log("============================\n");
    this.demonstrateApp();
  }
  demonstrateApp() {
    // Create some tasks
    console.log("📝 Creating tasks...\n");
    this.taskService.createTask(
      "Complete TypeScript tutorial",
      "Finish learning all TypeScript fundamentals",
      enums_1.Priority.High,
      enums_1.Category.Work,
    );
    this.taskService.createTask(
      "Buy groceries",
      "Milk, eggs, bread, vegetables",
      enums_1.Priority.Medium,
      enums_1.Category.Shopping,
    );
    this.taskService.createTask(
      "Fix bug in production",
      "Critical bug affecting users",
      enums_1.Priority.Urgent,
      enums_1.Category.Work,
    );
    this.taskService.createTask(
      "Morning exercise",
      "30 minutes cardio",
      enums_1.Priority.Low,
      enums_1.Category.Health,
    );
    this.taskService.createTask(
      "Prepare presentation",
      "Slides for Monday meeting",
      enums_1.Priority.High,
      enums_1.Category.Work,
    );
    // Display all tasks
    let allTasks = this.taskService.getAllTasks();
    this.displayService.displayTaskList(allTasks, "All Tasks");
    // Update some tasks
    console.log("🔄 Updating task statuses...\n");
    this.taskService.updateTaskStatus(1, enums_1.TaskStatus.InProgress);
    this.taskService.updateTaskStatus(3, enums_1.TaskStatus.Completed);
    this.taskService.updateTaskStatus(4, enums_1.TaskStatus.Completed);
    // Display tasks by status
    let pendingTasks = this.taskService.getTasksByStatus(
      enums_1.TaskStatus.Pending,
    );
    this.displayService.displayTaskList(pendingTasks, "Pending Tasks");
    let completedTasks = this.taskService.getTasksByStatus(
      enums_1.TaskStatus.Completed,
    );
    this.displayService.displayTaskList(completedTasks, "Completed Tasks");
    // Display tasks by priority
    let urgentTasks = this.taskService.getTasksByPriority(
      enums_1.Priority.Urgent,
    );
    this.displayService.displayTaskList(urgentTasks, "Urgent Tasks");
    // Display a specific task
    let task = this.taskService.getTaskById(1);
    if (task) {
      this.displayService.displayTask(task);
    }
    // Display statistics
    let stats = this.taskService.getStats();
    this.displayService.displayStats(stats);
    // Delete a task
    console.log("🗑️  Deleting task...\n");
    this.taskService.deleteTask(2);
    // Show updated stats
    let updatedStats = this.taskService.getStats();
    this.displayService.displayStats(updatedStats);
    console.log("✨ Task Manager demonstration complete!\n");
  }
}
exports.TaskManagerApp = TaskManagerApp;
