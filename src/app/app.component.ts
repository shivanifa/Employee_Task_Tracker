import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 task = {
    employeeName: '',
    title: '',
    priority: '',
    dueDate: ''
  };

  tasks: any[] = [];

  addTask() {
    const today = new Date().toISOString().split('T')[0];
    if (this.task.dueDate < today) {
      alert('Due Date cannot be in the past!');
      return;
    }

    this.tasks.push({ ...this.task });
    this.task = {
      employeeName: '',
      title: '',
      priority: '',
      dueDate: ''
    };
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Low': return 'low-priority';
      case 'Medium': return 'medium-priority';
      case 'High': return 'high-priority';
      default: return '';
    }
  }

  getFontSize(priority: string): string {
    switch (priority) {
      case 'Low': return '14px';
      case 'Medium': return '16px';
      case 'High': return '18px';
      default: return '14px';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
