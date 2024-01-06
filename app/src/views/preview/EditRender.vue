<script setup lang="ts">
import { AliothRender } from 'alioth-vue'
import { emitter, useR, useV } from 'phecda-vue'
import { applyUpdate, encodeStateAsUpdate } from 'yjs'

import { DocModel } from '@/models/doc'
import { useDocumentClick } from '@/composables/click'

import { SelectionModel } from '@/models/selection'
const { activePage, activeId } = $(useV(DocModel))
const doc = useR(DocModel)
const { selectNode } = $(useV(SelectionModel))
// useDocumentClick(() => {
//   selectNode = undefined
// })

// function load(e: any) {
//   const i = e.target.contentWindow
//   doc.controller.ydoc.on('update', (delta, origin) => {
//     i.postMessage({
//       id: activeId,
//       delta: encodeStateAsUpdate(doc.controller.ydoc),
//     }, '*')
//   })
//   window.addEventListener('message', (e) => {
//     const { delta } = e.data
//     applyUpdate(doc.controller.ydoc, delta, 'alioth')
//   })
// }
</script>

<template>
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!activePage" class="al-window">
      <!-- <IframeCanvas>
      </IframeCanvas> -->
      <AliothRender :node="activePage" :doc="doc" mode="editor" />
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
