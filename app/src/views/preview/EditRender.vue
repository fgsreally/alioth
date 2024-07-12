<script setup lang="ts">
import { AliothRenderer, Internal, Scope } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

const { activePage } = $(useV(SelectionModel))
const { store } = $(useV(Internal))
const scope = new Scope(store('state').data)
watch(() => scope, () => {
  console.log('update')
})

setTimeout(() => {
  store('state').set('a', 2)
}, 1000)
</script>

<template>
  {{ scope.data }}
  <div flex justify-center items-center w-full h-full>
    <section v-if="!!activePage" class="al-window">
      <!-- <IframeCanvas>
      </IframeCanvas> -->
      <AliothRenderer :node="activePage" renderer="development" :scope="scope" />
    </section>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
