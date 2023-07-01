<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <el-button>
    {{ text }}
  </el-button>
</template>

<style scoped>

</style>
