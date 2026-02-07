import { TaskService } from "./services/task-service";
import { DisplayService } from "./services/display-service";
import { Priority, TaskStatus, Category } from "./models/enums";

export class TaskManagerApp {
  private taskService: TaskService;
  private displayService: DisplayService;

  constructor() {
    this.taskService = new TaskService();
    this.displayService = new DisplayService();
  }

  run(): void {
    console.log("\n🎯 Welcome to Task Manager!");
    console.log("============================\n");

    this.demonstrateApp();
  }

  private demonstrateApp(): void {
    // Create some tasks
    console.log("📝 Creating tasks...\n");

    this.taskService.createTask(
      "Complete TypeScript tutorial",
      "Finish learning all TypeScript fundamentals",
      Priority.High,
      Category.Work,
    );

    this.taskService.createTask(
      "Buy groceries",
      "Milk, eggs, bread, vegetables",
      Priority.Medium,
      Category.Shopping,
    );

    this.taskService.createTask(
      "Fix bug in production",
      "Critical bug affecting users",
      Priority.Urgent,
      Category.Work,
    );

    this.taskService.createTask(
      "Morning exercise",
      "30 minutes cardio",
      Priority.Low,
      Category.Health,
    );

    this.taskService.createTask(
      "Prepare presentation",
      "Slides for Monday meeting",
      Priority.High,
      Category.Work,
    );

    // Display all tasks
    let allTasks = this.taskService.getAllTasks();
    this.displayService.displayTaskList(allTasks, "All Tasks");

    // Update some tasks
    console.log("🔄 Updating task statuses...\n");
    this.taskService.updateTaskStatus(1, TaskStatus.InProgress);
    this.taskService.updateTaskStatus(3, TaskStatus.Completed);
    this.taskService.updateTaskStatus(4, TaskStatus.Completed);

    // Display tasks by status
    let pendingTasks = this.taskService.getTasksByStatus(TaskStatus.Pending);
    this.displayService.displayTaskList(pendingTasks, "Pending Tasks");

    let completedTasks = this.taskService.getTasksByStatus(
      TaskStatus.Completed,
    );
    this.displayService.displayTaskList(completedTasks, "Completed Tasks");

    // Display tasks by priority
    let urgentTasks = this.taskService.getTasksByPriority(Priority.Urgent);
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
