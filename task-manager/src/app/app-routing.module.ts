import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { MainTaskComponent } from './main-task/main-task.component';

const routes: Routes = [
  { path: 'tasks', loadChildren: () => import('src/app/tasks/tasks.module').then(m => m.TasksModule) },
  {path: '', redirectTo: '/displays', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
