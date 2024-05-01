<script setup lang="ts">
import { AliothRenderer, Scope, internal } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'
const { activePage } = $(useV(DocModel))

const scope = new Scope(internal.stateStore.get('editor'))
</script>

<template>
  <section w="100vw" h="100vh" l-flex border-1 border-solid border-font-t>
    <AliothRenderer :node="activePage" mode="runtime" :scope="scope" />
  </section>
</template>
