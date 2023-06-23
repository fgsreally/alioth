<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(1)
console.log(count.value, 5)
</script>

<template>
  <div style="width: 100px;height: 100px;background-color: red;">
    {{ count }}xxzz
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;

}
</style>
