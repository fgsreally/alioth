<script setup lang="ts">
import { getWidget } from 'alioth-vue'
import { emitter, useV } from 'phecda-vue'
import { applyUpdate, encodeStateAsUpdate } from 'yjs'
import { RenderBlock } from '@/components/base/renderBlock'

import { DocModel } from '@/models/doc'
import { useDocumentClick } from '@/composables/click'
import { useDragSingle } from '@/composables/drag'
import type { AliothAttrs } from '@/engine/types'
import { createIndex } from '@/utils/handleIndex'
const { activePage, doc, activeId } = $(useV(DocModel))
useDocumentClick(() => {
  doc.cancel()
})

function load(e: any) {
  const i = e.target.contentWindow
  doc.controller.ydoc.on('update', (delta, origin) => {
    i.postMessage({
      id: activeId,
      delta: encodeStateAsUpdate(doc.controller.ydoc),
    }, '*')
  })
  window.addEventListener('message', (e) => {
    const { delta } = e.data
    applyUpdate(doc.controller.ydoc, delta, 'alioth')
  })
}
</script>

<template>
  <div flex justify-center items-center w-full h-full>
    <RenderBlock v-if="!!activePage" :node="activePage" type="edit" :value="getWidget('root')!" />
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
