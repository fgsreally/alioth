<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { createFormData, useV } from 'phecda-vue'

import { DragState } from '@/models/drag'

import { watch } from 'vue'
import { DocState } from '@/models/doc'

const { type } = defineProps<{ type: 'props' | 'events' }>()
const { activeNode } = $(useV(DocState))
const { add, del } = useV(DragState)
let args = $ref<{ data: any; config: any }>({} as any)

watch(() => activeNode, (n, o) => {
  if (!n)
    return
  const params = getWidget(n.key)!.meta[type]
  const { data, config } = createFormData(params, n.attrs.propsData)
  for (const i in config) {
    config[i]._mount = ({ el }: any) => {
      add(el, (v: any) => {
        n.setAttribute(`propsData.${i}`, v)
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
    :data="args.data" :config="args.config"
    :on-update="(key:string, v:any) => activeNode?.setAttribute(`propsData.${key}`, v)"
  />
</template>

<style scoped>
:deep(.el-scrollbar__wrap) {
  padding: 10px 0;
}
</style>
