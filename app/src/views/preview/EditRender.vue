<script setup lang="ts">
import { BaseCodeModel, Internal } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

const { selectedPage } = $(useV(SelectionModel))
const { insert, createNode, findAllChildrens } = $(useV(DocModel))
const { generateComponent, generateCode } = $(useV(BaseCodeModel))

const { store } = $(useV(Internal))
onMounted(() => {
  document.addEventListener('keydown', async (e) => {
    if (e.shiftKey) {
      console.log('go')

      console.log(await generateComponent(selectedPage))
    }
  })
})
setTimeout(() => {
  insert(createNode({ key: 'test', msg: '11' }), selectedPage)
  insert(createNode({ key: 'btn', click: '{{changeLabel}}' }), selectedPage)
}, 5000)
</script>

<template>
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!selectedPage" class="al-window">
      <IframeCanvas>
        <AliothRenderer :node="selectedPage" renderer="development" environment="edit" />
      </IframeCanvas>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
