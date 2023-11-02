<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import { computed } from 'vue'

const { aNode } = defineProps<{ height: number; width: number; aMode: string; aNode: any }>()

const layout = computed(() => {
  return aNode.children.map(item => item.attrs.layout)
})
</script>

<template>
  <section
    ref="dom"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"

    @mouseup.stop
  >
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="aMode !== 'render'"
      :is-resizable="aMode !== 'render'"
      vertical-compact
      prevent-collision
      use-css-transforms
    >
      <slot />
    </GridLayout>
  </section>
</template>
