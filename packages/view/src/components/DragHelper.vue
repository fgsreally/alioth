<template>
  <div ref="el" :style="style" style="position: fixed;z-index: 10;">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useDraggable } from "@vueuse/core";

const { x, y } = defineProps<{ x: number; y: number }>();
const el = ref<HTMLElement | null>(null);

const { style } = useDraggable(el, {
  initialValue: { x, y },
});
</script>

