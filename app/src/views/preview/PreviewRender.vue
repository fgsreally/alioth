<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'
import { DocModel } from '@/models/doc'
const { container } = $(useV(DocModel))
</script>

<template>
  <section min-w="80vw" min-h="80vh" l-flex border-1 border-solid border-font-t>
    <div
      :style="{
        position: 'relative',
        backgroundColor: container.attrs.backgroundColor,
        width: `${container.attrs.width}px`,
        height: `${container.attrs.height}px`,
      }"
    >
      <RenderBlock
        v-for="(item) in container.children" :key="item.id" :node="item" type="render"
        :value="getWidget(item.attrs.key)!"
      />
    </div>
  </section>
</template>
