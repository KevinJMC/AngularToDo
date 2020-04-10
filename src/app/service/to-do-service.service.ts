import { Injectable } from '@angular/core'
import { Task } from '../models/task.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private list: Task[] = []
  private _todoList: BehaviorSubject<Task[]> = new BehaviorSubject(this.list)
  public readonly todoList: Observable<Task[]> = this._todoList.asObservable()

  addTodoToList(todo: Task): void {
    if (this.verifyToDo(todo)) {
      this.list.push(todo)
      this._todoList.next(this.list)
    }
  }

  removeToDoFromList(todo: Task): void {
    this.list = this.list.filter((listItem) => todo.id !== listItem.id)
    this._todoList.next(this.list)
  }

  toggleTaskCompletion(todo: Task): void {
    this.list.forEach((task) => {
      if (task.id === todo.id) {
        task.completed = !task.completed
        return task
      }
    })
    this._todoList.next(this.list)
  }

  sortListAlphabetically(): void {
    this.list = this.list.sort((a, b) => {
      return a.text.localeCompare(b.text)
    })
    this._todoList.next(this.list)
  }

  sortByTime(): void {
    this.list = this.list.sort((a, b) => {
      return a.id - b.id
    })
    this._todoList.next(this.list)
  }

  verifyToDo(todo: Task): boolean {
    return todo.text !== '' && typeof todo.id == 'number'
  }
}
