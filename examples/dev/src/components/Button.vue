<script setup lang="ts" generic="T extends string">
defineProps<{ onSetName: (name: T) => void }>()
</script>

<template>
  <button @click="onSetName">
    111
  </button>
</template>

<style scoped></style>
