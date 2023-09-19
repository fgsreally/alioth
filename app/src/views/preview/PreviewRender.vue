<script setup lang="ts">
import { getWidget } from 'alioth-vue'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'
import { DocModel } from '@/models/doc'
const { activePage } = $(useV(DocModel))
</script>

<template>
  <section min-w="80vw" min-h="80vh" l-flex border-1 border-solid border-font-t>
    <RenderBlock v-if="!!activePage" :node="activePage" type="render" :value="getWidget('root')!" />
  </section>
</template>
