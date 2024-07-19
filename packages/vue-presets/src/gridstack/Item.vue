<script setup lang="ts">
import { inject, onMounted, provide, shallowRef } from 'vue'

const el = shallowRef()
const gridstack = inject('gridstack')
const { node } = inject('alioth')
onMounted(() => {
  if (gridstack)
    gridstack.value.makeWidget(el.value)
})
</script>

<template>
  <div ref="el" class="grid-stack-item" v-bind="$attrs">
    <div class="grid-stack-item-content">
      <slot />
    </div>
  </div>
</template>
