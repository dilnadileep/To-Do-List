import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  providers: [TaskService],
  imports: [CommonModule, FormsModule]  // Import CommonModule and FormsModule here
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
