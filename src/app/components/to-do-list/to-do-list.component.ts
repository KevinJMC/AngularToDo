import { Component, Input } from '@angular/core'
import { ToDoService } from '../../service/to-do-service.service'
import { Task } from '../../models/task.model'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input() toDoList: Task[]
  listItem: Task

  constructor(private toDoService: ToDoService) {}
}
