<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { Engine, getComponent } from '@alioth/engine'
import { RenderBlock } from '@/components/Render'
import { setState } from '@/engine/filter'
import { usePageState } from '@/store/page'
import type { BlockType } from '@/engine/init'

const route = useRoute()
const pageState = usePageState()

// const { curState, curInstance } = defineProps<{
//   curState?: Object;
//   curInstance?: Object;
// }>();

const instance = new Engine<BlockType, { blocks: BlockType[] }>({ blocks: [] })

watch(
  () => route.params,
  (n: any) => {
    const { state, instance: value } = pageState.find(
      route.params.pageRoute as string,
    ) as any
    setState(state)
    instance.load(value)
  },
  { immediate: true },
)
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
    <RenderBlock :data="instance.data.blocks" type="render" />
  </section>
</template>
