import { Component, Input, OnInit } from '@angular/core'
import { Task } from '../../models/task.model'
import { ToDoService } from '../../service/to-do-service.service'

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() listItem: Task

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    console.log(this.listItem)
  }

  toggleCompleteTask(task: Task): void {
    this.toDoService.toggleTaskCompletion(task)
  }

  deleteTodo(task: Task): void {
    this.toDoService.removeToDoFromList(task)
    event.preventDefault()
  }
}
