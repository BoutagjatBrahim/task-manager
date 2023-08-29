import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list.service';
import { Task, TaskState } from '../model/task.model';
import { ByStatusTaskList } from '../model/by-status-task-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ByStatusTaskListService extends CRUDTaskListService implements ByStatusTaskList {
  override getTasksByStatus(status: TaskState): Task[] {
    return this.getTasks().filter(task => task.etat === status);
  }
}
