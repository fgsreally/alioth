<script setup lang="ts">
import { getComponent } from '@alioth/engine'
import { PreviewBlock } from '@/components/Render'
import { instance } from '@/engine/init'
</script>

<template>
  <section class="pure-render__box">
    <PreviewBlock
      v-for="item in instance.data.blocks"
      :key="item.uuid"
      :value="getComponent(item.key) as any"
      :block="item"
      type="render"
    />
  </section>
</template>
