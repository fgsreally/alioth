<script lang="ts" setup>
import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from '@ark-ui/vue'
import { useV } from 'phecda-vue'
import { internal } from 'alioth-vue'
import Material from './Material.vue'
import { DocModel } from '@/models/doc'
const namespaces = ['default']
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
      <Material :comp-list="internal.getStore('widget').list()" type="text" />
    </TabContent>
  </Tabs>
</template>
