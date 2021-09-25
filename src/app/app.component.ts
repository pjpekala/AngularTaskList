import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: any;
  tasks: string[];

  constructor() {
    this.tasks = [];
    this.newTask = '';
  }

  addItem(event: any) {
    this.tasks.push(this.newTask);
    event.preventDefault();
  }

  onKey(event: any) {
    this.newTask = event.target.value;
  }
  
  deleteTask(event:any) {
    event.target.parentNode.remove();
  }

}

