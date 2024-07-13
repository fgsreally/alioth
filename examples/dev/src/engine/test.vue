<script setup lang="ts">
import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.css'
import { onMounted } from 'vue'
onMounted(() => {
  GridStack.init()
})
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
