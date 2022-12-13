<script setup lang="ts">
import { toPx } from '@/utils/style'
import { instance } from '@/engine/init'

const offsetComputed = computed(() => {
  return {
    left: `${instance.clickBlock?.left.value.toFixed(0)}${
      instance.clickBlock?.left.size
    }`,
    top: `${instance.clickBlock?.top.value.toFixed(0)}${
      instance.clickBlock?.top.size
    }`,
  }
})
</script>

<template>
  <div>
    <div
      v-if="instance.clickBlock"
      class="offset-controller top"
      :style="{
        width: '0',
        height: `${toPx(instance.clickBlock, 'top')}px`,
      }"
    >
      <i>{{ offsetComputed.top }}</i>
    </div>
    <div
      v-if="instance.clickBlock"
      class="offset-controller left"
      :style="{
        height: '0',
        width: `${toPx(instance.clickBlock, 'left')}px`,
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
