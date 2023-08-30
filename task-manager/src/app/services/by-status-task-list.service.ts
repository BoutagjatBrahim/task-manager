import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list.service';
import { Task, TaskState } from '../model/task.model';
import { ByStatusTaskList } from '../model/by-status-task-list.interface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ByStatusTaskListService extends CRUDTaskListService implements ByStatusTaskList {
  getTasksByStatus(status: TaskState): Observable<Task[]> {
    const allTasks = this.getTasks();
    const tasksByStatus = allTasks.filter(task => task.etat === status);
    return of(tasksByStatus);
  }
}