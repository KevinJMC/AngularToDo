import { Component, OnInit } from '@angular/core'
import { Task } from 'src/app/models/task.model'
import { Subscription } from 'rxjs'
import { ToDoService } from 'src/app/service/to-do-service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  todoInput = ''
  toDoList: Task[] = []
  todoSubscription: Subscription

  constructor(private toDoService: ToDoService) {
    this.todoSubscription = this.toDoService.todoList.subscribe(
      (next) => {
        this.toDoList = next
      },
      (err) => {
        console.log(err)
      },
    )
  }

  ngOnInit(): void {
    this.todoInput = ''
  }

  submitNewTask(todoInput): void {
    const todo = new Task(todoInput.value)
    this.clearInput(todoInput)
    this.toDoService.addTodoToList(todo)
  }

  clearInput(todoInput): void {
    todoInput.form.reset()
  }

  toggleTaskCompletion(todo: Task): void {
    for (const item of this.toDoList) {
      if (todo.id === item.id) {
        todo.completed = !todo.completed
      }
    }
  }
}
