import { Component } from '@angular/core'
import { ToDoService } from 'src/app/service/to-do-service.service'
import { Task } from 'src/app/models/task.model'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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

  sortListAlphabetically(): void {
    this.toDoService.sortListAlphabetically()
  }

  sortByTime(): void {
    this.toDoService.sortByTime()
  }
}
