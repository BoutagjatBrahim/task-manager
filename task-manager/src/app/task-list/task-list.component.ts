import { Component, Input } from '@angular/core';
import { TaskList } from '../model/task-list.model';
import { Task, TaskState } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() taskList: TaskList | undefined;

 constructor(){
 }
}
