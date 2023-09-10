<script setup lang="ts">
import { useDrag } from 'alioth-lib'
import { useV } from 'phecda-vue'
import OffsetHelper from './OffsetHelper.vue'
import ActionHelper from './ActionHelper.vue'
import { DocModel } from '@/models/doc'
// import { pxToBlockSize, toPx } from '@/utils/style'

const { node } = defineProps<{ node: Object }>()

const { activeDoc, activeNode } = $(useV(DocModel))
const isActive = computed(() => node === activeNode)
const moveBlocks = ['tl', 'tr', 'bl', 'br']

// const sizeComputed = computed(() => {
//   return {
//     w: `${activeNode?.attrs.w.value.toFixed(0) || 0}${
//       activeNode?.attrs.w.size || ''
//     }`,
//     h: `${activeNode.value?.attrs.h.value.toFixed(0) || 0}${
//       activeNode.value?.attrs.h.size || ''
//     }`,
//   }
// })
async function startMove(e: MouseEvent) {
  let x: number, y: number

  const initX = activeNode.attrs.left
  const initY = activeNode.attrs.top
  useDrag({
    move: (e) => {
      if (!x || !y) {
        x = e.clientX
        y = e.clientY
      }

      activeNode.setAttribute('left', initX + e.clientX - x)
      activeNode.setAttribute('top', initY + e.clientY - y)
    },
    up: (e) => {
      // if (Math.abs(e.clientX - x) > 5 || Math.abs(e.clientY - y) > 5)
    },
  })
}

function getIframeOffset() {
  return (document.querySelector('.iframebox') as HTMLElement).getBoundingClientRect()
}
function transform(evt: MouseEvent, item: string) {
  const { x: iframeX, y: iframeY } = getIframeOffset()
  const x = evt.clientX + iframeX
  const y = evt.clientY + iframeY
  const w = activeNode.attrs.width
  const h = activeNode.attrs.height
  const initX = activeNode.attrs.left
  const initY = activeNode.attrs.top
  useDrag({
    move: (e) => {
      const offsetY = Math.trunc(e.clientY - y)
      const offsetX = Math.trunc(e.clientX - x)
      if (item.includes('t')) {
        activeNode.setAttribute('top', initY + offsetY)
        activeNode.setAttribute('height', h - offsetY)
      }
      if (item.includes('l')) {
        activeNode.setAttribute('left', initX + offsetX)
        activeNode.setAttribute('width', w - offsetX)
      }
      if (item.includes('r'))
        activeNode.setAttribute('width', w + offsetX)

      if (item.includes('b'))
        activeNode.setAttribute('height', h + offsetY)
    },

  })
}
</script>

<template>
  <div>
    <OffsetHelper v-show="isActive" />
    <ActionHelper v-show="isActive" />
    <div class="dragBox" @mousedown.capture.self.prevent="startMove">
      <slot />

      <i v-if="isActive" class="w size-controller">{{ activeNode.attrs.width }}</i>
      <i v-if="isActive" class="h size-controller">{{ activeNode.attrs.height }}</i>

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