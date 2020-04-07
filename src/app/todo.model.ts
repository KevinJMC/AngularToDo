export class Todo {
  private _text: string;
  private _id: number;
  private _completed: boolean;

  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get completed(): boolean {
    return this._completed;
  }
  public set completed(value: boolean) {
    this._completed = value;
  }

  constructor(text: string) {
    this.text = text;
    this.id = new Date().valueOf();
    this.completed = false;
  }
}
