<script setup lang="ts">
import type { VirtualNode } from 'alioth-vue'
import { getWidget } from 'alioth-vue'
import { createFormData, emitter, useV } from 'phecda-vue'

import { watch } from 'vue'
import { DragModel } from '@/models/drag'
import type { NodeAttrs } from '@/types/node'
import { DocModel } from '@/models/doc'
import { SelectionModel } from '@/models/selection'

const { type } = defineProps<{ type: 'props' | 'events' }>()
const { selectNode } = $(useV(SelectionModel))
const { add, del } = useV(DragModel)
let args = $ref<{ data: any; config: any }>({} as any)
let isShow = $ref(true)

function setProps(node: VirtualNode<NodeAttrs>, key: string, value: any) {
  node.set(key, value)
}

watch(() => selectNode as VirtualNode<NodeAttrs>, async (n, o) => {
  if (!n)
    return
  if (o && n.attrs.key !== o.attrs.key) {
    isShow = false
    await nextTick()
    isShow = true
  }
  const params = getWidget(n.attrs.key)!.meta[type]
  const { data, config } = createFormData(params, n.attrs.propsData)
  for (const i in config) {
    config[i]._mount = ({ el }: any) => {
      add(el, (v: any) => {
        setProps(n, i, v)
        // n.set(`propsData.${i}`, v)
      })
    }
    config[i]._unmount = ({ el }: any) => {
      del(el)
    }
  }
  args = { data, config }
}, { immediate: true })
</script>

<template>
  <pane-form
    v-if="isShow"
    :data="args.data" :config="args.config"
    :on-update="(key:string, v:any) => setProps(selectNode!, key, v)"
  />
</template>

<style scoped>
:deep(.el-scrollbar__wrap) {
  padding: 10px 0;
}
</style>
