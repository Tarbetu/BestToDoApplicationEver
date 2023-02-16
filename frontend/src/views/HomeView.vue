<script setup lang="ts">
import { state } from "../todos";
import TodoCard from "../components/TodoCard.vue";
</script>

<template>
  <main>
    <ul v-for="todo in state.todos" :key="todo.id">
      <TodoCard :id="todo.id" :name="todo.name" :isDone="todo.isDone" />
    </ul>
  </main>
</template>
