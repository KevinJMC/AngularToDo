import { Component } from '@angular/core'
import { Task } from 'src/app/models/task.model'
import { Subscription } from 'rxjs'
import { ToDoService } from 'src/app/service/to-do-service.service'
@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.css'],
})
export class TaskListCardComponent {
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

  countUncompleted(todoList: Task[]): number {
    return todoList.filter((todo) => {
      if (!todo.completed == true) return todo
    }).length
  }
}
