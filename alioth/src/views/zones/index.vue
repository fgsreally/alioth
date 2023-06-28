<script setup lang="ts">
import { useV } from 'phecda-vue'
import { componentMap } from './index'
import { DocState } from '@/models/doc'

import { ConfigState } from '@/models/config'
const { activeDoc } = useV(DocState)
const route = useRoute()
const { zones } = useV(ConfigState)
</script>

<template>
  <DragHelper
    v-for="(item, i) in zones" :key="i" :transition="item.transition" :x="item.x" :y="item.y"
    class="a-zone"
    :label="item.label" :is-active="item.isActive({ instance: activeDoc, route })" :fix="item.fix || false"
  >
    <component :is="(componentMap as any)[item.component]" v-bind="item.props" />
  </DragHelper>
</template>
