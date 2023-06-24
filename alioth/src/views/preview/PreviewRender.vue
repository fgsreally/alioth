<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/renderBlock'
import { DocState } from '@/models/doc'
const { container } = $(useV(DocState))
</script>

<template>
  <section w="80%" h="80%">
    <RenderBlock
      v-for="(item) in container.children" :key="item.id" :node="item" type="render"
      :value="getWidget(item.attrs.key)"
    />
  </section>
</template>
