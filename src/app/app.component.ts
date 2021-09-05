import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: any;
  tasks: any[];

  constructor() {
    this.tasks = [];
    this.newTask = '';
  }

  addItem(event: any) {
    this.tasks.push(this.newTask);
    event.preventDefault();
    console.log(this.tasks);
  }

  onKey(event: any) {
    this.newTask = event.target.value;
    console.log(this.newTask);
  }
  
  deleteTask(event:any) {
    console.log(event);
    let index = this.tasks.findIndex(event.target.value);
    this.tasks.splice(index, 1);
  }

}

