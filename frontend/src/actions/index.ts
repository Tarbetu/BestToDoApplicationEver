import schemas from "./schemas";
import axios from "axios";
import { print } from "graphql";

interface IResponse {
  name: String;
  isDone: boolean;
}

export default class {
  private readonly Settings: {
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
    const response = await axios<IResponse>({
      data: {
        query: print(schemas.getTodoSchema),
        variables: { name },
      },
      ...this.Settings,
    });
    return response.data;
  }

  async allTodos(): Promise<Array<IResponse>> {
    const response = await axios({
      data: {
        query: print(schemas.allTodosSchema),
      },
      ...this.Settings,
    });
    return response.data;
  }

  async createTodo(name: String, isDone: Boolean): Promise<IResponse> {
    const response = await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name, isDone },
      },
      ...this.Settings,
    });
    return response.data;
  }

  async updateTodo(
{ name, newName, isDone }: { name: String; newName?: String; isDone?: Boolean; }  ): Promise<IResponse> {
    const response = await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name, isDone },
      },
      ...this.Settings,
    });
    return response.data;
  }

  async destroyTodo(name: String): Promise<String> {
    const response = await axios({
      data: {
        query: print(schemas.allTodosSchema),
        variables: { name },
      },
      ...this.Settings,
    });
    return response.data;
  }
}
