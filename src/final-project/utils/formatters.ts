import { Task } from "../models/task";
import { Priority, TaskStatus } from "../models/enums";

export function formatDate(date: Date): string {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

export function formatTask(task: Task): string {
  let lines: string[] = [];

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

export function getPrioritySymbol(priority: Priority): string {
  switch (priority) {
    case Priority.Low:
      return "⚪";
    case Priority.Medium:
      return "🟡";
    case Priority.High:
      return "🟠";
    case Priority.Urgent:
      return "🔴";
  }
}

export function getStatusSymbol(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.Pending:
      return "⏳";
    case TaskStatus.InProgress:
      return "🔄";
    case TaskStatus.Completed:
      return "✅";
  }
}
