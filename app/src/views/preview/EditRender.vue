<script setup lang="ts">
import { AliothRenderer, Internal, Scope } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

const { selectedPage } = $(useV(SelectionModel))
const { insert, createNode } = $(useV(DocModel))

const { store } = $(useV(Internal))
const scope = new Scope(store('state').data)

setTimeout(() => {
  console.log('add Node')

  insert(createNode({ key: 'test', msg: '11' }), selectedPage)
}, 5000)
</script>

<template>
  {{ scope.data }}
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!selectedPage" class="al-window">
      <IframeCanvas>
        <AliothRenderer :node="selectedPage" renderer="development" :scope="scope" />
      </IframeCanvas>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
