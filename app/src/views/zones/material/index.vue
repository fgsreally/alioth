<script lang="ts" setup>
import { NameSpaceStore } from 'alioth-vue'
import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from '@ark-ui/vue'
import { useV } from 'phecda-vue'
import Material from './Material.vue'
import { DocModel } from '@/models/doc'
const { activeNode } = useV(DocModel)
const namespaces = computed(() => Object.keys(NameSpaceStore).filter(ns => !!ns))
</script>

<template>
  <Tabs :default-value="namespaces[0]">
    <TabList>
      <TabTrigger v-for="(item) in namespaces" :key="item" :value="item" l-btn-n cursor-pointer>
        {{ item }}
      </TabTrigger>
      <TabIndicator class="bg-p h-1" />
    </TabList>
    <TabContent v-for="(item) in namespaces" :key="item" :value="item">
      <Material :comp-list="Array.from(NameSpaceStore[item].widgetMap).map((item: any) => item[1])" type="text" />
    </TabContent>
  </Tabs>
</template>
