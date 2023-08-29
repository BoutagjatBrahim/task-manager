import { Task } from "./task.model";

export interface CRUDTaskList {
  getTasks(): Task[];
  createTask(task: Task): void;
  updateTask(task: Task): void;
  deleteTask(task: Task): void;
}
