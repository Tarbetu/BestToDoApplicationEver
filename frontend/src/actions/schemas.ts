import gql from "graphql-tag";

export default {
  allTodosSchema: gql`
    query {
      allTodos {
        name
        isDone
      }
    }
  `,
  getTodoSchema: gql`
    query ($name: String!) {
      getTodo(name: $name) {
        name
        isDone
      }
    }
  `,
  createTodoSchema: gql`
    mutation ($input: { name: String!, isDone: Boolean! }) {
      createTodo(input: $input) {
        name
        isDone
      }
    }
  `,
  updateTodoSchema: gql`
    mutation ($input: { name: String!, newName: String, isDone: Boolean }) {
      updateTodo(input: $input) {
        name
        isDone
      }
    }
  `,
  destroyTodoSchema: gql`
    mutation ($name: String!) {
      destroyTodo(name: $name)
    }
  `,
};
