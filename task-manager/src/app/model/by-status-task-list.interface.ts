import { Task, TaskState } from "./task.model";

export interface ByStatusTaskList {
  getTasksByStatus(status: TaskState): Task[];
}
