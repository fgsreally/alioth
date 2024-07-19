<script setup lang="ts">
const { test } = defineProps<{ test: any }>()
</script>

<template>
  <div style="width:100%;height: 100%;background-color: red;">
    <slot />
    {{ test.a }}
    {{ test.b }}
  </div>
</template>

<style scoped></style>
