<script setup lang="ts">
import { inject, onMounted, provide, shallowRef } from 'vue'
import { type RendererContext } from 'alioth-vue'
import { GridStack } from 'gridstack'
const gridstack = shallowRef()

provide('gridstack', gridstack)
const { environment } = inject('alioth') as RendererContext
onMounted(() => {
  gridstack.value = GridStack.init({
    disableDrag: environment === 'production',
    disableResize: environment === 'production',
  })
})
</script>

<template>
  <div class="grid-stack">
    <slot />
  </div>
</template>

<style scoped></style>
