<script setup lang="ts">
import { AliothRenderer, Scope, internal } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

import { DocModel } from '@/models/doc'

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

const scope = new Scope(internal.stateStore.get('editor'))
</script>

<template>
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!activePage" class="al-window">
      <!-- <IframeCanvas>
      </IframeCanvas> -->
      <AliothRenderer :node="activePage" mode="editor" :scope="scope" />
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
