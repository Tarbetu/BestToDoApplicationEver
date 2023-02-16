<script setup lang="ts">
const props = defineProps({
  to: { type: String, required: true },
});
</script>
<template>
  <RouterLink :to="props.to" class="p-2 hover:bg-stone-800"
    ><slot></slot
  ></RouterLink>
</template>
