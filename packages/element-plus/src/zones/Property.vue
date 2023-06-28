<script setup lang="ts">
import { getWidget } from 'alioth-lib'
import { createFormData, useV } from 'phecda-vue'

import { DragState } from 'alioth-lib/model'

import { watch } from 'vue'
const { activeNode } = useV(window.__PHECDA__.doc)
const { add, del } = useV(DragState)
let args = $ref<{ data: any; config: any }>({} as any)

watch(() => activeNode.value, (n, o) => {
  if (!n)
    return
  const { meta: { props } } = getWidget(n.key)!
  const { data, config } = createFormData(props, n.attrs.propsData)
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
  <el-scrollbar max-height="300px" style="width: 500px;">
    <pane-form
      :data="args.data" :config="args.config"
      :on-update="(key:string, v:any) => activeNode?.setAttribute(`propsData.${key}`, v)"
    />
  </el-scrollbar>
</template>

<style scoped>
:deep(.el-scrollbar__wrap) {
  padding: 10px 0;
}
</style>
