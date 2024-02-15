<script setup lang="ts">
defineProps<{ text: number }>()
</script>

<template>
  <div style="width: 100px;height: 100px;background-color: red;">
    <p style="user-select: none;">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;

}
</style>
