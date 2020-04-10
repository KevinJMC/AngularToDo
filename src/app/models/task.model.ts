export class Task {
  text: string
  id: number
  completed: boolean
  createdAt: string

  constructor(text: string) {
    this.text = text
    this.id = new Date().valueOf()
    this.createdAt = new Date().toLocaleString()
    this.completed = false
  }
}
