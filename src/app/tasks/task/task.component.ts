import { Component, inject, Input } from '@angular/core';

import { Task } from './task.model';
import { CardComponent } from "../../Shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'Mo-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  private tasksService = inject(TasksService)

  onCompletedTask(){
    this.tasksService.removeTask(this.task.id)
  }
  
}
