import { reactive } from "vue";
import Todo from "./todo";

const state = reactive({
  id: 0,
  todos: [] as Array<Todo>,
});

function findTodo(todoId: number): Todo | undefined {
  return state.todos.find((todo) => todo.id == todoId);
}

function addTodo(todoName: string, isChecked: boolean) {
  state.todos.push(new Todo(state.id++, todoName, isChecked));
}

function editTodoName(todoId: number, newTodoName: string) {
  const todo = findTodo(todoId);
  if (todo) {
    todo.setName(newTodoName);
  }
}

function toggleTodoStatus(id: number, isDone?: boolean) {
  findTodo(id)?.setDone(isDone);
}

function destroyTodo(todoId: number) {
  const todo = findTodo(todoId);
  todo?.destroy();
  state.todos = state.todos.filter((i) => todo != i);
}

export { state, addTodo, editTodoName, toggleTodoStatus, destroyTodo };
