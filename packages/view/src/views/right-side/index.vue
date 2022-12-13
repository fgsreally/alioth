<script setup lang="ts">
import { instance } from '@/engine/init'
</script>

<template>
  <DragWrapper :x="10" :y="10" title="断点" :is-active="instance.clickBlock">
    <SizeControl />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="样式" :is-active="instance.clickBlock">
    <UnoClass />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="组件数据" :is-active="instance.clickBlock">
    <Props />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="页面数据" :is-active="instance.clickBlock">
    <State />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="插槽" :is-active="instance.clickBlock">
    <VSlot />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="指令绑定" :is-active="instance.clickBlock">
    <VState />
  </DragWrapper>
  <DragWrapper :x="10" :y="10" title="事件绑定" :is-active="instance.clickBlock">
    <Property />
  </DragWrapper>
</template>
