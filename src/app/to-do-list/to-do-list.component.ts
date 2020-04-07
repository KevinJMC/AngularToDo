import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/to-do-service.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todo: Todo;
  toDoList: Todo[] = [];

  constructor(public toDoService: ToDoService)  { }

  // could be async if they are unknown at runtime
  ngOnInit(): void {
    this.toDoList = this.toDoService.todoList;
  }

  addTodo($event) {
    this.toDoService.addTodoToList($event.value);
  }

  deleteTodo(event) {
    const todoText = event.textContent;
    this.toDoService.removeToDoFromList(this.todo.id);
    event.preventDefault();
  }


}
