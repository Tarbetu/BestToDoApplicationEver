import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
dotenv.config();

import TodoModel from "./todo";
const app = express();
const Todo = new TodoModel();

const schemaContent = `${fs.readFileSync("src/graphql/todo.graphql", "utf8")}\n
   ${fs.readFileSync("src/graphql/mutation.graphql", "utf8")}\n
   ${fs.readFileSync("src/graphql/query.graphql", "utf8")}`;

const schema = buildSchema(schemaContent);
const root = {
  getTodo: async ({ name }: { name: String }) => {
    const todo = await Todo.find(name);
    if (todo) {
      return {
        isDone: todo.isDone,
        name: todo.name,
      };
    } else {
      return null;
    }
  },
  allTodos: async () =>
    (await Todo.all()).map((todo) => {
      return {
        isDone: todo.isDone,
        name: todo.name,
      };
    }),
  createTodo: async ({
    input,
  }: {
    input: { name: String; isDone: Boolean };
  }) => {
    const todo = Todo.new(input);
    if (await todo.save()) {
      return {
        name: todo.name,
        isDone: todo.isDone,
      };
    } else {
      return null;
    }
  },
  updateTodo: async ({
    input,
  }: {
    input: {
      name: String;
      newName?: String;
      isDone?: boolean;
    };
  }) => {
    const todo = await Todo.find(input.name);
    if (todo == null) {
      return null;
    }

    input.newName && (todo.name = input.newName);
    input.isDone != undefined && (todo.isDone = input.isDone);

    if (await todo.save()) {
      return {
        name: todo.name,
        isDone: todo.isDone,
      };
    } else {
      return null;
    }
  },
  destroyTodo: async ({ name }: { name: String }) => {
    const result = await Todo.destroy(name);
    if (result.deletedCount >= 1) {
      return "ok";
    } else {
      return "err";
    }
  },
};

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(Number(process.env["PORT"]!));
