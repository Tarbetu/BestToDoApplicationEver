<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { addTodo } from "../todos";

const todoName = ref("");
const isDone = ref(false);
const createTodo = () => {
  addTodo(todoName.value, isDone.value);
  router.push("/");
};
</script>

<template>
  <div class="flex flex-col content-center p-4 m-10">
    <div class="flex justify-center text-xl">
      <label for="todoInput" class="px-2">Todo Content</label>
      <input v-model="todoName" type="text" id="todoInput" />
    </div>
    <div class="flex justify-center text-xl">
      <label for="isDoneInput" class="px-2">Is done?</label>
      <input v-model="isDone" type="checkbox" id="isDone" />
    </div>
    <button
      @click="createTodo"
      class="bg-black hover:bg-slate-800 text-white mx-10"
    >
      Add this
    </button>
  </div>
</template>
