import schemas from "./schemas";
import axios from "axios";
import { print } from "graphql";

interface IResponse {
  name: String;
  isDone: Boolean;
}

export default class {
  readonly Settings: {
    url: string;
    method: string;
    headers: { "content-type": string };
  };
  constructor() {
    const Endpoint = "http://0.0.0.0:3131";
    this.Settings = {
      url: Endpoint,
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    };
  }

  async getTodo(name: String): Promise<IResponse> {
    return await axios({
      data: {
        query: print(schemas.getTodoSchema),
        variables: { name },
      },
      ...this.Settings,
    });
  }

  async allTodos(): Promise<Array<IResponse>> {
    return await axios({
      data: {
        query: print(schemas.allTodosSchema),
      },
      ...this.Settings,
    });
  }

  async createTodo(name: String, isDone: Boolean): Promise<IResponse> {
    return await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name, isDone },
      },
      ...this.Settings,
    });
  }

  async updateTodo(
    name: String,
    newName?: String,
    isDone?: Boolean
  ): Promise<IResponse> {
    return await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name, isDone },
      },
      ...this.Settings,
    });
  }

  async destroyTodo(name: String): Promise<String> {
    return await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name },
      },
      ...this.Settings,
    });
  }
}
