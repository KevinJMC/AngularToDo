import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoService } from './service/to-do-service.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'To Do App';
  todoInput = '';
  toDoList: Todo[] = [];

  constructor(public toDoService: ToDoService)  { }

  // could be async if they are unknown at runtime
  ngOnInit(): void {
    this.toDoList = this.toDoService.todoList;
  }

  submitNewTask(todoInput) {
    const todoText = document.getElementById('todo').attributes[5].nodeValue;
    const todo = new Todo(todoText);
    this.toDoService.addTodoToList(todo);
    this.clearInput();
  }

  clearInput() {
    this.todoInput = '';
  }

  toggleTaskCompletion(todo: Todo) {
    for (const item of this.toDoList) {
      if (todo.id === item.id) {
        todo.completed = !todo.completed;
      }
    }
  }

  deleteTask(todo: Todo) {
    this.toDoService.removeToDoFromList(todo.id);
  }

  sortListAlphabetically() {
    this.toDoList = this.toDoList.sort((a, b) => {
      return a.text.localeCompare(b.text);
    });
  }

  sortByTime() {
    this.toDoList = this.toDoList.sort((a, b) => {
      return a.id - b.id;
    });
  }
}
