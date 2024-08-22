import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  getTasks(): string[] {
    if (this.isLocalStorageAvailable()) {
      const tasks = localStorage.getItem(this.storageKey);
      return tasks ? JSON.parse(tasks) : [];
    } else {
      return [];
    }
  }

  addTask(task: string): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }
  

  deleteTask(index: number): void {
    if (this.isLocalStorageAvailable()) {
      const tasks = this.getTasks();
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }

  private saveTasks(tasks: string[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }
}
