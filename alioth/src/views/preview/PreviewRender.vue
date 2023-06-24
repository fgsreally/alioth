<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/renderBlock'
import { DocState } from '@/models/doc'
const { container } = $(useV(DocState))
</script>

<template>
  <section w="80vw" h="80vh">
    <div style="background-color: red;" relative w="fit">
      <RenderBlock
        v-for="(item) in container.children" :key="item.id" :node="item" type="render"
        :value="getWidget(item.attrs.key)"
      />
    </div>
  </section>
</template>
