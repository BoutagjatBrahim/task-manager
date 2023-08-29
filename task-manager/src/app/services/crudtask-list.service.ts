import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list.model';
import { Task, TaskState } from '../model/task.model';
import { CRUDTaskList } from '../model/crud-task-list.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskList  {
  getTasksByStatus(Termine: TaskState): Task[] {
    throw new Error('Method not implemented.');
  }
  private taskList: TaskList;

  constructor() {
    // Initialisez la liste de tâches (vous pouvez également charger à partir d'une API, etc.)
    const initialTasks: Task[] = [
      new Task('Faire les courses', 'Acheter des fruits et du lait', TaskState.EnCours, new Date()),
      new Task('Préparer le dîner', 'Cuisiner un repas délicieux', TaskState.AFaire, new Date()),
      new Task('Lire un livre', 'Terminer le chapitre 3', TaskState.Termine, new Date())
    ];

    this.taskList = new TaskList(initialTasks);
  }

  getTasks(): Task[] {
    return this.taskList.tasks;
  }

  createTask(task: Task): void {
    this.taskList.tasks.push(task);
  }

  updateTask(task: Task): void {
    // Recherchez la tâche par son titre, id ou un autre identifiant unique
    const existingTask = this.taskList.tasks.find(t => t.title === task.title);

    if (existingTask) {
      existingTask.description = task.description;
      existingTask.etat = task.etat;
      existingTask.date = task.date;
    }
  }

  deleteTask(task: Task): void {
    this.taskList.tasks = this.taskList.tasks.filter(t => t.title !== task.title);
  }
}
