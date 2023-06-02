<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocState } from '@/models/doc'

import { toPx } from '@/utils/style'
const { activeDoc } = useV(DocState)

const offsetComputed = computed(() => {
  return {
    left: `${activeDoc.value.activeBlock?.attrs.left.value.toFixed(0)}${
      activeDoc.value.activeBlock?.attrs.left.size
    }`,
    top: `${activeDoc.value.activeBlock?.attrs.top.value.toFixed(0)}${
      activeDoc.value.activeBlock?.attrs.top.size
    }`,
  }
})
</script>

<template>
  <div>
    <div
      v-if="activeDoc.activeBlock"
      class="offset-controller top"
      :style="{
        width: '0',
        height: `${toPx(activeDoc.activeBlock, 'top')}px`,
      }"
    >
      <i>{{ offsetComputed.top }}</i>
    </div>
    <div
      v-if="activeDoc.activeBlock"
      class="offset-controller left"
      :style="{
        height: '0',
        width: `${toPx(activeDoc.activeBlock, 'left')}px`,
      }"
    >
      <i>{{ offsetComputed.left }}</i>
    </div>
  </div>
</template>

<style lang="scss">
.offset-controller {
  & > i {
    color: #8ec5fc;
    position: relative;
  }

  &.top > i {
    left: 25px;
  }
  &.left > i {
    top: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-100%, -100%);
  // border-style: solid;
  // border-color: #8ec5fc;
  border-bottom: 3px solid #8ec5fc;
  border-right: 3px solid #8ec5fc;
}
</style>
