<script setup lang="ts">
defineProps<{ msg: number }>()
</script>

<template>
  <div style="width: 100px;height: 100px;background-color: red;">
    {{ msg }}xxzza
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;

}
</style>
