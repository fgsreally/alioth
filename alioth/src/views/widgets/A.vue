<script setup lang="ts">
const props = defineProps<{ value: string }>()
</script>

<template>
  <button class="btn">
    button
  </button>
  <div class="w-10 bg-blue-300 h-10">
    {{ props.value }}
    <slot name="home">
      home
    </slot>
    <slot />
  </div>
</template>

<style>
.test1 {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
