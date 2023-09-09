<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { PreviewBlock } from '@/components/Render'
import { instance } from '@/engine/init'
</script>

<template>
  <section class="pure-render__box">
    <PreviewBlock
      v-for="item in instance.root.children"
      :key="item.uuid"
      :value="(getWidget as any)(item.key)"
      :block="item"
      type="render"
    />
  </section>
</template>
