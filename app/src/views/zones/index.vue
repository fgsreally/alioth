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
      v-show="!item.props.hidden"
      :key="i" :transition="item.props.transition" :x="item.props.x" :y="item.props.y" class="al-zone"
      :label="item.label"
      :is-active="item.isActive()" :fix="item.props.fix || false" @click.stop
    >
      <component :is="(componentMap as any)[item.component]" v-bind="item.props" @mousedown.stop />
    </DragHelper>
  </Teleport>
</template>
