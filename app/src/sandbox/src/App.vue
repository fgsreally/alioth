<script setup lang="ts">
import { getWidget } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { DocModel } from './models/doc'
import { RenderBlock } from '@/components/base/renderBlock'
import Zones from '@/views/zones/index.vue'
import { useDocumentClick } from '@/composables/click'
const { activePage, doc } = $(useV(DocModel))
useDocumentClick(() => {
  doc.cancel()
})
</script>

<template>
  <div class="editor__container">
    <RenderBlock v-if="!!activePage" :node="activePage" type="edit" :value="getWidget('root')!" />
  </div>
  <Zones />
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
