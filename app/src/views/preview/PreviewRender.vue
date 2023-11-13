<script setup lang="ts">
import { AliothRender, getWidget } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'
const { activePage } = $(useV(DocModel))
</script>

<template>
  <section w="100vw" h="100vh" l-flex border-1 border-solid border-font-t>
    <AliothRender :node="activePage" mode="render" />
  </section>
</template>
