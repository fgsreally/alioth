<script setup lang="ts">
defineProps<{ msg: number; a_node: Object }>()
</script>

<template>
  <div style="width: 100px;height: 100px;background-color: red;">
    <p style="user-select: none;">
      {{ msg }}{{ a_node.id }}
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;

}
</style>
