"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const enums_1 = require("../models/enums");
const validators_1 = require("../utils/validators");
class TaskService {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  createTask(title, description, priority, category) {
    if (!(0, validators_1.isValidTitle)(title)) {
      console.log("Error: Title must be between 3 and 100 characters");
      return null;
    }
    if (!(0, validators_1.isValidDescription)(description)) {
      console.log("Error: Description must be less than 500 characters");
      return null;
    }
    let task = {
      id: this.nextId++,
      title: title.trim(),
      description: description.trim(),
      priority: priority,
      status: enums_1.TaskStatus.Pending,
      category: category,
      createdAt: new Date(),
    };
    this.tasks.push(task);
    console.log(`Task created successfully! ID: ${task.id}`);
    return task;
  }
  getAllTasks() {
    return [...this.tasks]; // Return a copy
  }
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }
  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }
  getTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }
  getTasksByCategory(category) {
    return this.tasks.filter((task) => task.category === category);
  }
  updateTaskStatus(id, status) {
    let task = this.getTaskById(id);
    if (!task) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }
    task.status = status;
    if (status === enums_1.TaskStatus.Completed) {
      task.completedAt = new Date();
    }
    console.log(`Task ${id} status updated to ${status}`);
    return true;
  }
  updateTaskPriority(id, priority) {
    let task = this.getTaskById(id);
    if (!task) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }
    task.priority = priority;
    console.log(`Task ${id} priority updated to ${priority}`);
    return true;
  }
  deleteTask(id) {
    let index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }
    this.tasks.splice(index, 1);
    console.log(`Task ${id} deleted successfully`);
    return true;
  }
  getStats() {
    let stats = {
      total: this.tasks.length,
      pending: 0,
      inProgress: 0,
      completed: 0,
      byPriority: {
        low: 0,
        medium: 0,
        high: 0,
        urgent: 0,
      },
    };
    for (let task of this.tasks) {
      // Count by status
      if (task.status === enums_1.TaskStatus.Pending) stats.pending++;
      if (task.status === enums_1.TaskStatus.InProgress) stats.inProgress++;
      if (task.status === enums_1.TaskStatus.Completed) stats.completed++;
      // Count by priority
      if (task.priority === enums_1.Priority.Low) stats.byPriority.low++;
      if (task.priority === enums_1.Priority.Medium) stats.byPriority.medium++;
      if (task.priority === enums_1.Priority.High) stats.byPriority.high++;
      if (task.priority === enums_1.Priority.Urgent) stats.byPriority.urgent++;
    }
    return stats;
  }
}
exports.TaskService = TaskService;
