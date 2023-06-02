<script setup lang="ts">
const { config } = defineProps<{ config: Object }>()
const data = reactive({})
</script>

<template>
  <div class="w-10 h-10">
    <PaneForm :config="config || {}" :data="data" />
  </div>
</template>

<style scoped>

</style>
