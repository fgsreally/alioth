<script setup lang="ts">
defineProps<{ msg: number }>()
</script>

<template>
  <div style="width:100%;height: 100%;background-color: red;">
    <slot />
    {{ msg }}
  </div>
</template>

<style scoped>

</style>
