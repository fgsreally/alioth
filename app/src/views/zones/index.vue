<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'

import { ZoneModel } from '@/models/zone'
const { activePage, doc } = useV(DocModel)
const route = useRoute()
const { zone } = useV(ZoneModel)
</script>

<template>
  <Teleport to="body">
    <DragHelper

      v-for="(item, i) in zone('float')"
      v-show="!item.props.hidden"
      :key="i" :transition="item.props.transition" :x="item.props.x" :y="item.props.y"
      class="al-zone"
      :label="item.props.label"
      :is-active="item.props.isActive"
      :fix="item.props.fix || false" @click.stop
    >
      <component :is="item.component" @mousedown.stop />
    </DragHelper>
  </Teleport>
</template>
