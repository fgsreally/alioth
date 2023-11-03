<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import { computed } from 'vue'

const { a_node } = defineProps<{ a_mode: string; a_node: any }>()

const layout = computed(() => {
  return a_node.children.map(item => item.attrs.layout)
})
</script>

<template>
  <section
    ref="dom"
    class="a-container"

    @mouseup.stop
  >
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="a_mode !== 'render'"
      :is-resizable="a_mode !== 'render'"
      vertical-compact
      prevent-collision
      use-css-transforms
    >
      <slot />
    </GridLayout>
  </section>
</template>

<style>
.a-container {
  min-width: 600px;
  min-height: 300px;
}
</style>
