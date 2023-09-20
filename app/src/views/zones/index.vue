<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'

import { ViewModel } from '@/models/view'
const { activePage, doc } = useV(DocModel)
const route = useRoute()
const { zones, componentMap } = useV(ViewModel)
</script>

<template>
  <Teleport to="body">
    <DragHelper

      v-for="(item, i) in zones"
      v-show="!item.hidden"
      :key="i" :transition="item.transition" :x="item.x" :y="item.y" class="al-zone"
      :label="item.label"
      :is-active="item.isActive({ instance: doc, route })" :fix="item.fix || false" @click.stop
    >
      <component :is="(componentMap as any)[item.component]" v-bind="item.props" @mousedown.stop />
    </DragHelper>
  </Teleport>
</template>
