import { reactive } from "vue";
import Todo from "./todo";
import actions from "@/actions";
const Action = new actions();

const state = reactive({
  todos: [] as Array<Todo>,
});

Action.allTodos().then((val) => {
  const todos = val.map((todo) => new Todo(todo.name, todo.isDone));
  state.todos = todos;
});

function findTodo(todoName: String): Todo | undefined {
  return state.todos.find((todo: Todo) => todo.name == todoName);
}

function addTodo(todoName: string, isChecked: boolean) {
  const todo = new Todo(todoName, isChecked);
  todo.submitOnDB;
  state.todos.push(todo);
}

function editTodoName(name: String, newTodoName: string) {
  const todo = findTodo(name);
  if (todo) {
    todo.setName(newTodoName);
  }
}

function toggleTodoStatus(name: String, isDone?: boolean) {
  findTodo(name)?.setDone(isDone);
}

function destroyTodo(todoName: String) {
  const todo = findTodo(todoName);
  todo?.destroy();
  state.todos = state.todos.filter((i) => todo != i);
}

export { state, addTodo, editTodoName, toggleTodoStatus, destroyTodo };
