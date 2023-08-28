import { Task } from './task.model'; // Importez la classe Task depuis le fichier task.model.ts

export class TaskList {
  tasks: Task[];

  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }
}
