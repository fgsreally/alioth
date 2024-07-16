<script setup lang="ts">
import { Internal, Scope } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

const { selectedPage } = $(useV(SelectionModel))
const { insert, createNode, findAllChildrens } = $(useV(DocModel))
const { generateCode } = $(useV(ConnectModel))

const { store } = $(useV(Internal))
const scope = new Scope(store('state').data)
onMounted(() => {
  document.addEventListener('keydown', async (e) => {
    if (e.shiftKey) {
      console.log('go')
      console.log(await generateCode([selectedPage, ...findAllChildrens(selectedPage)]))
    }
  })
})
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
        <AliothRenderer :node="selectedPage" renderer="development" :scope="scope" environment="edit" />
      </IframeCanvas>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
