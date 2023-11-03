<script setup lang="ts">
import draggable from 'vuedraggable-es'
import { ref } from 'vue'

const props = defineProps<{ height: number; width: number; a_node: Object }>()

const drag = ref(false)

const dom = ref<HTMLElement>(null as any)
</script>

<template>
  <section
    ref="dom" :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,
    }"
  >
    <slot />
  </section>
</template>
