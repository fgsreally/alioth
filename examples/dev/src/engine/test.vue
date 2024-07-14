<script setup lang="ts">
import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.css'
import { inject, onMounted } from 'vue'
onMounted(() => {
  GridStack.init()
})
console.log(inject('alioth'))
</script>

<template>
  <div class="grid-stack">
    <slot />
  </div>
</template>

<style scoped>
.grid-stack {
  min-width: 600px;
  min-height: 300px;
}
</style>
