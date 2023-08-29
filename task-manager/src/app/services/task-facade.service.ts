import { Injectable } from '@angular/core';
import { ByStatusTaskListService } from './by-status-task-list.service';
import { CRUDTaskListService } from './crudtask-list.service';
import { Task, TaskState } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private crudTaskService: CRUDTaskListService,
    private byStatusTaskService: ByStatusTaskListService
  ) {}

  getAllTasks(): Task[] {
    return this.crudTaskService.getTasks();
  }

  createTask(task: Task): void {
    this.crudTaskService.createTask(task);
  }

  updateTask(task: Task): void {
    this.crudTaskService.updateTask(task);
  }

  deleteTask(task: Task): void {
    this.crudTaskService.deleteTask(task);
  }

  getTasksByStatus(status: TaskState): Task[] {
    return this.byStatusTaskService.getTasksByStatus(status);
  }
}
