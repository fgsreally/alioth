<script setup lang="ts">
import { inject } from 'vue'

defineProps<{ msg: number }>()

console.log(inject('alioth'))
</script>

<template>
  <div style="width:100%;height: 100%;background-color: red;">
    <slot />
    {{ msg }}
  </div>
</template>

<style scoped>

</style>
