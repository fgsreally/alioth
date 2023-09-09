<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'

import { ConfigModel } from '@/models/config'
const { activeDoc } = useV(DocModel)
const route = useRoute()
const { zones, componentMap } = useV(ConfigModel)
</script>

<template>
  <Teleport to="body">
    <DragHelper
      v-for="(item, i) in zones" :key="i" :transition="item.transition" :x="item.x" :y="item.y"
      class="a-zone"
      :label="item.label" :is-active="item.isActive({ instance: activeDoc, route })" :fix="item.fix || false"
    >
      <component :is="(componentMap as any)[item.component]" v-bind="item.props" />
    </DragHelper>
  </Teleport>
</template>
