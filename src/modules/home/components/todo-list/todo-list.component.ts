import { TaskList } from './../../../../modules/home/model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  public taskList: Array<TaskList>;

  constructor() {

    this.taskList = [];

  }


  ngOnInit(): void {

  }

}
