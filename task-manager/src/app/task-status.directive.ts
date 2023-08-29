import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TaskState } from './model/task.model';

@Directive({
  selector: '[appTaskStatus]'
})

export class TaskStatusDirective implements OnInit {
  @Input('appTaskStatus') taskState: TaskState | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.applyColor();
  }

  private applyColor(): void {
    let color: string;

    switch (this.taskState) {
      case TaskState.EnCours:
        color = 'blue';
        break;
      case TaskState.AFaire:
        color = 'red';
        break;
      case TaskState.Termine:
        color = 'green';
        break;
      default:
        color = 'black';
    }

    this.el.nativeElement.style.color = color;
  }
}
