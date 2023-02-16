import actions from "@/actions";

const Action = new actions();

class Todo {
  constructor(
    readonly id: number,
    public name: String,
    public isDone: boolean
  ) {}

  setName(name: string) {
    this.name = name;
  }

  setDone(check?: boolean) {
    if (check) {
      this.isDone = check;
    } else {
      this.isDone = !this.isDone;
    }
  }

  destroy() {
    Action.destroyTodo(this.name);
    console.log("Şey :d");
  }
}

export default Todo;
