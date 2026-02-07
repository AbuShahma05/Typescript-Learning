import { Priority, TaskStatus, Category } from "./enums";

export interface Task {
  readonly id: number;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  category: Category;
  createdAt: Date;
  completedAt?: Date;
}

export interface TaskStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
}