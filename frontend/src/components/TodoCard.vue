<script setup lang="ts">
import { reactive } from "vue";
import { editTodoName, toggleTodoStatus, destroyTodo } from "@/todos";
const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  isDone: { type: Boolean, required: true },
});
const state = reactive({
  editingName: false,
  newName: props.name,
});
function inputMode() {
  state.editingName = true;
}
function updateName() {
  editTodoName(props.id, state.newName);
  state.editingName = false;
}

function updateTodo() {
  toggleTodoStatus(props.id);
}

function destroyIt() {
  destroyTodo(props.id);
}
</script>

<template>
  <div class="flex flex-col m-4 p-6 bg-stone-700 text-stone-100 rounded-xl">
    <input
      class="text-2xl text-stone-300 bg-black p-2 rounded"
      v-if="state.editingName"
      v-model="state.newName"
      type="text"
    />
    <button class="bg-green-600" v-if="state.editingName" @click="updateName">
      Update name
    </button>
    <p class="text-2xl text-stone-300" v-else @click="inputMode">
      {{ props.name }}
    </p>
    <div class="flex justify-between">
      <p class="p-2" @click="updateTodo">
        {{ props.isDone ? "Done" : "Not Done" }}
      </p>
      <button class="bg-red-800 rounded p-2" @click="destroyIt">
        Destroy!
      </button>
    </div>
  </div>
</template>
