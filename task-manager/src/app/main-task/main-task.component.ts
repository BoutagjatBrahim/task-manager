import { Component, OnInit } from '@angular/core';
import { Task, TaskState } from '../model/task.model';
import { TaskList } from '../model/task-list.model';
import { CRUDTaskListService } from '../services/crudtask-list.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  taskList: TaskList | undefined;
  tasks: Task[] = [];
  archivedTasks: Task[] = [];
  constructor(private crudTaskService: CRUDTaskListService) {
    const tasks: Task[] = [
      new Task('Faire les courses', 'Acheter des fruits et du lait', TaskState.EnCours, new Date(2023, 8, 30)),
      new Task('Préparer le dîner', 'Cuisiner un repas délicieux', TaskState.AFaire, new Date(2023, 8, 30)),
      new Task('Lire un livre', 'Terminer le chapitre 3', TaskState.Termine, new Date(2023, 8, 30))
    ];
    this.taskList = new TaskList(tasks);
  }
  ngOnInit(): void {
    this.tasks = this.crudTaskService.getTasks();
    this.archivedTasks = this.crudTaskService.getTasksByStatus(TaskState.Termine); // Remplit les tâches terminées
  }
  }

