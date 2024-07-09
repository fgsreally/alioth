<script setup lang="ts">
import { AliothRenderer, Scope, internal } from 'alioth-vue'
import { useR, useV } from 'phecda-vue'

import { DocModel } from '@/models/doc'

import { SelectionModel } from '@/models/selection'
const { activePage, activeId } = $(useV(DocModel))
const doc = useR(DocModel)
const { selectNode } = $(useV(SelectionModel))

const scope = new Scope()
</script>

<template>
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
