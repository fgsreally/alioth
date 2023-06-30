<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <el-button v-bind="$attrs">
    {{ text }}
  </el-button>
</template>

<style scoped>

</style>
