<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div flex flex-nowrap m-y-2>
    <p min-w-fit color-font-n m-r-4>
      {{ label }}
    </p>
    <div min-w-40>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
