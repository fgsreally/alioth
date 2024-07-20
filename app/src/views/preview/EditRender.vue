<script setup lang="ts">
import { AliothRenderer, BaseCodeModel, Internal } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

const { selectedPage } = $(useV(SelectionModel))
const { insert, createNode, findAllChildrens } = $(useV(DocModel))
const { generateComponent, generateCode } = $(useV(BaseCodeModel))

const { store } = $(useV(Internal))

setTimeout(() => {
  insert(createNode({ key: 'test', msg: '11', test: { a: 'a', b: 'b' } }), selectedPage)

  // insert(createNode({ key: 'btn', click: '{{changeLabel}}' }), selectedPage)
}, 5000)
</script>

<template>
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!selectedPage" class="al-window">
      <!-- <IframeCanvas>
      </IframeCanvas> -->
      <AliothRenderer :node="selectedPage" renderer="development" environment="edit" />
    </section>
  </div>
</template>
