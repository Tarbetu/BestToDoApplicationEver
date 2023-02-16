import actions from "@/actions";

const Action = new actions();

class Todo {
  constructor(
    public name: String,
    public isDone: boolean
  ) {
  }

  submitOnDB() {
    Action.createTodo(this.name, this.isDone);
  }

  setName(name: string) {
    Action.updateTodo({ name: this.name, newName: name });
    this.name = name;
  }

  setDone(check?: boolean) {
    check = check || !this.isDone;
    Action.updateTodo({ name: this.name, isDone: check });
    this.isDone = check;
  }

  destroy() {
    Action.destroyTodo(this.name);
  }
}

export default Todo;
