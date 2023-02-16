<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderContent.vue";
import NavbarButton from "./components/NavbarButton.vue";
</script>

<template>
  <header class="bg-stone-800 text-stone-100">
    <div>
      <Header />

      <nav class="bg-black text-stone-100 flex justify-center">
        <NavbarButton to="/">List Todos</NavbarButton>
        <NavbarButton to="/new">Add Todos</NavbarButton>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
