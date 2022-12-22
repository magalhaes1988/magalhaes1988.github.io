import { TaskList } from './../../../../modules/home/model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck{

  public taskList: Array<TaskList>;

  constructor() {

    this.taskList = JSON.parse(localStorage.getItem("list") || '[]');

  }


  ngOnInit(): void {

  }

  ngDoCheck(): void {

    this.setLocalStorage();

  }



  public deleteItemTaskList(item: number) {
    this.taskList.splice(item, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja deletar tudo?")
    if (confirm)
    {
      this.taskList = [];
    }

  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false})
  }

  public validationInput(task: string, index: number) {
    if (!task.length) {
      const confirm = window.confirm("Task esta vazia, deseja Deletar?")

      if (confirm) {
        this.deleteItemTaskList(index);
      }

    }
  }

  public setLocalStorage() {
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
