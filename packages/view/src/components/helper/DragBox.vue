<script setup lang="ts">
import { useDrag } from '@alioth/engine '
import OffsetHelper from './OffsetHelper.vue'
import ActionHelper from './ActionHelper.vue'
import { instance } from '@/engine/init'
import { useContainerStore } from '@/store/container'
import { pxToBlockSize, toPx } from '@/utils/style'
import { emitEvent } from '@/utils/emitter'
const { block } = defineProps<{ block: Object }>()
const moveBlocks = ['tl', 'tr', 'bl', 'br']
const visible = ref(false)
const isActive = computed(
  () => (block as any).uuid === instance.clickBlock?.uuid,
)
const sizeComputed = computed(() => {
  return {
    w: `${instance.clickBlock?.w.value.toFixed(0)}${
      instance.clickBlock?.w.size
    }`,
    h: `${instance.clickBlock?.h.value.toFixed(0)}${
      instance.clickBlock?.h.size
    }`,
  }
})
async function startMove(e: MouseEvent) {
  const x = e.clientX
  const y = e.clientY

  const initX = toPx(instance.clickBlock, 'left')
  const initY = toPx(instance.clickBlock, 'top')

  emitEvent('dragstart')
  useDrag({
    move: (e) => {
      pxToBlockSize(instance.clickBlock, 'left', initX + e.clientX - x)
      pxToBlockSize(instance.clickBlock, 'top', initY + e.clientY - y)
    },
    up: (e) => {
      if (Math.abs(e.clientX - x) > 5 || Math.abs(e.clientY - y) > 5)
        emitEvent('dragend')
    },
  })
}
function transform(evt: MouseEvent, item: string) {
  emitEvent('transform-start')
  const x = evt.clientX
  const y = evt.clientY
  const w = toPx(instance.clickBlock, 'w')
  const h = toPx(instance.clickBlock, 'h')
  const initX = toPx(instance.clickBlock, 'left')
  const initY = toPx(instance.clickBlock, 'top')
  useDrag({
    move: (e) => {
      const offsetY = e.clientY - y
      const offsetX = e.clientX - x
      if (item.includes('t')) {
        pxToBlockSize(instance.clickBlock, 'top', initY + offsetY)

        pxToBlockSize(instance.clickBlock, 'h', h - offsetY)
      }
      if (item.includes('l')) {
        pxToBlockSize(instance.clickBlock, 'left', initX + offsetX)

        pxToBlockSize(instance.clickBlock, 'w', w - offsetX)
      }
      if (item.includes('r'))
        pxToBlockSize(instance.clickBlock, 'w', w + offsetX)

      if (item.includes('b'))
        pxToBlockSize(instance.clickBlock, 'h', h + offsetY)
    },
    up: (e) => {
      emitEvent('transform-end')
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

      <i v-show="isActive" class="w size-controller">{{ sizeComputed.w }}</i>
      <i v-show="isActive" class="h size-controller">{{ sizeComputed.h }}</i>

      <div
        v-for="(item, i) in moveBlocks"
        v-show="isActive"
        :key="i"
        :class="`${item} moveblock`"
        @mousedown.stop="(e) => transform(e, item)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dragBox {
  user-select: none;  z-index:10;

  & > .moveblock {
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    border-radius: 50%;
  }
  & > .tl {
    top: -8px;
    left: -8px;
  }
  & > .tr {
    top: -8px;
    left: calc(100% - 8px);
  }
  & > .bl {
    top: calc(100% - 10px);
    left: -8px;
  }
  & > .br {
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
