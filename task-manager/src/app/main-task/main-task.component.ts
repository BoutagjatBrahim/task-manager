import { Component } from '@angular/core';
import { Task, TaskState } from '../model/task.model';
import { TaskList } from '../model/task-list.model';
@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent {
  taskList: TaskList | undefined;

  constructor() {
    const tasks: Task[] = [
      new Task('Faire les courses', 'Acheter des fruits et du lait', TaskState.EnCours),
      new Task('Préparer le dîner', 'Cuisiner un repas délicieux', TaskState.AFaire),
      new Task('Lire un livre', 'Terminer le chapitre 3', TaskState.Termine)
    ];
    this.taskList = new TaskList(tasks);
  }
}
