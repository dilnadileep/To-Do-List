// src/app/app.component.ts
import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TodoListComponent] // Import TodoListComponent here
})
export class AppComponent {
  title = 'FirstApp';
}
