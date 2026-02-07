import { Task, TaskStats } from "../models/task";
import { Priority, TaskStatus, Category } from "../models/enums";
import { isValidTitle, isValidDescription } from "../utils/validators";

export class TaskService {
  private tasks: Task[] = [];
  private nextId: number = 1;

  createTask(
    title: string,
    description: string,
    priority: Priority,
    category: Category,
  ): Task | null {
    if (!isValidTitle(title)) {
      console.log("Error: Title must be between 3 and 100 characters");
      return null;
    }

    if (!isValidDescription(description)) {
      console.log("Error: Description must be less than 500 characters");
      return null;
    }

    let task: Task = {
      id: this.nextId++,
      title: title.trim(),
      description: description.trim(),
      priority: priority,
      status: TaskStatus.Pending,
      category: category,
      createdAt: new Date(),
    };

    this.tasks.push(task);
    console.log(`Task created successfully! ID: ${task.id}`);
    return task;
  }

  getAllTasks(): Task[] {
    return [...this.tasks]; // Return a copy
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter((task) => task.status === status);
  }

  getTasksByPriority(priority: Priority): Task[] {
    return this.tasks.filter((task) => task.priority === priority);
  }

  getTasksByCategory(category: Category): Task[] {
    return this.tasks.filter((task) => task.category === category);
  }

  updateTaskStatus(id: number, status: TaskStatus): boolean {
    let task = this.getTaskById(id);

    if (!task) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }

    task.status = status;

    if (status === TaskStatus.Completed) {
      task.completedAt = new Date();
    }

    console.log(`Task ${id} status updated to ${status}`);
    return true;
  }

  updateTaskPriority(id: number, priority: Priority): boolean {
    let task = this.getTaskById(id);

    if (!task) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }

    task.priority = priority;
    console.log(`Task ${id} priority updated to ${priority}`);
    return true;
  }

  deleteTask(id: number): boolean {
    let index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      console.log(`Task with ID ${id} not found`);
      return false;
    }

    this.tasks.splice(index, 1);
    console.log(`Task ${id} deleted successfully`);
    return true;
  }

  getStats(): TaskStats {
    let stats: TaskStats = {
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
      if (task.status === TaskStatus.Pending) stats.pending++;
      if (task.status === TaskStatus.InProgress) stats.inProgress++;
      if (task.status === TaskStatus.Completed) stats.completed++;

      // Count by priority
      if (task.priority === Priority.Low) stats.byPriority.low++;
      if (task.priority === Priority.Medium) stats.byPriority.medium++;
      if (task.priority === Priority.High) stats.byPriority.high++;
      if (task.priority === Priority.Urgent) stats.byPriority.urgent++;
    }

    return stats;
  }
}
