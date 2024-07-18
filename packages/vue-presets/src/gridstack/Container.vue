<script setup lang="ts">
import { GridStack } from 'gridstack'
import { inject, onMounted, provide, shallowRef } from 'vue'
const gridstack = shallowRef()

provide('gridstack', gridstack)
const { environment } = inject('alioth')
onMounted(() => {
  gridstack.value = GridStack.init({
    disableDrag: environment === 'production',
    disableResize: environment === 'production',
  }).on()
})
</script>

<template>
  <div class="grid-stack">
    <slot />
  </div>
</template>

<style scoped></style>
