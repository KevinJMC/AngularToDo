import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public todoList: Todo[] = [];

  constructor() { }

  publishToDoList() {
    return this.todoList;
  }

  addTodoToList(todo: Todo) {
    if (this.verifyToDo(todo)) {
      this.todoList.push(todo);
    }
    return this.todoList;
  }

  removeToDoFromList(todoId: number) {
    this.todoList = this.todoList.filter(listItem => todoId !== listItem.id);
  }

  completeToDo(todo: Todo) {
    todo.completed = true;
  }

  private verifyToDo(todo: Todo): boolean {
    return todo && todo.text && todo.text.length > 0 && typeof todo.id == 'number';
  }

}
