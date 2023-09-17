<script setup lang="ts">
import { getWidget } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'

import { DocModel } from '@/models/doc'
import { useDocumentClick } from '@/composables/click'
const { activeDoc } = $(useV(DocModel))
useDocumentClick(() => {
  activeDoc.cancel()
})
</script>

<template>
  <div class="editor__container">
    <RenderBlock :node="activeDoc.root" type="edit" :value="getWidget('root')!" />
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
