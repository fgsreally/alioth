<script setup lang="ts">
import { draggable } from 'alioth-vue'
import { emitter, useV } from 'phecda-vue'
// import { pxToBlockSize, toPx } from '@/utils/style'
import { computed } from 'vue'
const { node } = defineProps<{ node: Object }>()

const { selectNode: activeNode } = useV(__PHECDA__.selection)
const isActive = computed(() => node === activeNode.value)
const moveBlocks = ['tl', 'tr', 'bl', 'br']

async function startMove(e: MouseEvent) {
  if (!activeNode.value)
    return
  let x: number, y: number

  const { left: initX, top: initY } = activeNode.value.attrs
  draggable({
    move: (e) => {
      if (!x || !y) {
        x = e.clientX
        y = e.clientY
      }

      activeNode.value!.set('left', initX + e.clientX - x)
      activeNode.value!.set('top', initY + e.clientY - y)
    },
    up: (e) => {
      emitter.emit('alioth:node-action', null)

      // if (Math.abs(e.clientX - x) > 5 || Math.abs(e.clientY - y) > 5)
    },
  })
}

function transform(evt: MouseEvent, item: string) {
  if (!activeNode.value)
    return
  const x = evt.clientX
  const y = evt.clientY
  const w = activeNode.value.attrs.width
  const h = activeNode.value.attrs.height
  const initX = activeNode.value.attrs.left
  const initY = activeNode.value.attrs.top
  draggable({
    move: (e) => {
      const offsetY = Math.trunc(e.clientY - y)
      const offsetX = Math.trunc(e.clientX - x)
      if (item.includes('t')) {
        activeNode.value!.set('top', initY + offsetY)
        activeNode.value!.set('height', h - offsetY)
      }
      if (item.includes('l')) {
        activeNode.value!.set('left', initX + offsetX)
        activeNode.value!.set('width', w - offsetX)
      }
      if (item.includes('r'))
        activeNode.value!.set('width', w + offsetX)

      if (item.includes('b'))
        activeNode.value!.set('height', h + offsetY)
    },
    up(e) {
      emitter.emit('alioth:node-action', null)
    },
  })
}
</script>

<template>
  <div>
    <div class="dragBox" @mousedown="startMove">
      <slot />

      <i v-if="isActive" class="w size-controller">{{ activeNode!.attrs.width }}</i>
      <i v-if="isActive" class="h size-controller">{{ activeNode!.attrs.height }}</i>

      <div
        v-for="(item, i) in moveBlocks" v-show="isActive" :key="i" :class="`${item} moveblock`"
        @mousedown.stop="(e) => transform(e, item)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dragBox {
  user-select: none;
  z-index: 10;
  border: 3px solid white;

  &>.moveblock {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 3px solid white;
    background-color: #8ec5fc;
    // background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    border-radius: 50%;
  }

  &>.tl {
    top: -8px;
    left: -8px;
  }

  &>.tr {
    top: -8px;
    left: calc(100% - 8px);
  }

  &>.bl {
    top: calc(100% - 10px);
    left: -8px;
  }

  &>.br {
    top: calc(100% - 8px);
    left: calc(100% - 8px);
  }
}

.size-controller {
  position: absolute;

  &.w {
    left: calc(50% - 20px);
    top: -20px;
    color: #8ec5fc;
  }

  &.h {
    top: calc(50% - 10px);
    right: -50px;
    color: #8ec5fc;
  }
}
</style>
