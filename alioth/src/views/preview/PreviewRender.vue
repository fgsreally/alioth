<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { RenderBlock } from '@/components/renderBlock'
import { DocState } from '@/models/doc'
import {useV} from 'phecda-vue'
const {container}=useV(DocState)
// watch(
//   () => route.params,
//   (n: any) => {
//     try {
//       const { state, instance: value } = pageState.find(
//         route.params.pageRoute as string,
//       ) as any

//       for (const i in state)
//         setState(i, state[i])
//       instance.load(value)
//     }
//     catch (e) {
//       console.warn(e)
//     }
//   },
//   { immediate: true },
// )
</script>

<template>
  <section class="pure-render__box">
    <RenderBlock
        v-for="(item) in container.children" :key="item.id" :node="item" type="render"
        :value="getWidget(item.attrs.key)"
      />
  </section>
</template>

<style lang="scss">
.pure-render__box{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
