<script setup lang="ts">
import { getWidget } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'
import { DocModel } from '@/models/doc'
const { activePage } = $(useV(DocModel))
</script>

<template>
  <section w="100vw" h="100vh" l-flex border-1 border-solid border-font-t>
    <RenderBlock :node="activePage" type="render" :value="getWidget('root')!" />
  </section>
</template>
