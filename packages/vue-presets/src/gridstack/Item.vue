<script setup lang="ts">
import { type Ref, inject, onMounted, shallowRef } from 'vue'
import type { RendererContext } from 'alioth-vue'
import type { GridStack } from 'gridstack'
const el = shallowRef()
const gridstack = inject('gridstack') as Ref<GridStack>
const { node } = inject('alioth') as RendererContext
onMounted(() => {
  if (gridstack.value)
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
