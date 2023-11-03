<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  width: number
  height: number
  fontSize: number
  backgroundColor: string
  gridColor: string
  gridNum: number
  gridGap: number
  margin: number
  radius: number
  isContainer: boolean
  isFull: boolean
  isGrid: boolean
  wLimit: [number, number]
  hLimit: [number, number]
}>()

const dom = ref<HTMLElement>(null as any)
</script>

<template>
  <div ref="dom" class="editor__canvas ">
    <slot />
  </div>
</template>

<style scoped>
.editor__canvas {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: relative;

  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
  position: relative;
  z-index: 0;
  background-color: var(--bkColor);
}

.editor__canvas.gridHelper {
  background-image: -webkit-linear-gradient(top,
      transparent 9px,
      rgb(0, 0, 5, 0.153) 10px),
    -webkit-linear-gradient(left, transparent 9px, rgba(0, 0, 5, 0.153) 10px);
  background-size: 10px 10px;
}

.editor__canvas.gridHelper::before {
  content: "";
  border-radius: calc(var(--radius) * 1px);
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 calc(var(--margin) * 1px);
  position: absolute;
  z-index: 1;
  opacity: 0.5;
  pointer-events: none;
  background: -webkit-linear-gradient(left,
      transparent calc(var(--gridGap) * 1px - 1px),
      var(--gridColor) calc(var(--gridGap) * 1px),
      var(--gridColor) calc((var(--gridLen) - var(--gridGap)) * 1px),
      transparent calc((var(--gridLen) - var(--gridGap)) * 1px + 1px));
  background-size: calc(var(--gridLen) * 1px);
}
</style>
