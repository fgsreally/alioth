<script setup lang="ts">
import { BaseDocModel, BaseSelectionModel, VirtualNode, cloneDeep } from 'alioth-vue'
import { type Ref, computed, ref, watch } from 'vue'
import { useR, useV } from 'phecda-vue'
function useNodeAttr<Attr = any>(node: Ref<VirtualNode | undefined>, attr: string) {
  const doc = useR(BaseDocModel)
  const data = ref<Attr>(node.value && cloneDeep(node.value.attrs[attr]))

  watch(() => node.value, (v) => {
    if (v)
      data.value = cloneDeep(v!.attrs[attr])
  })

  watch(() => data.value, (n, o) => {
    if (!!n && n === o) {
      console.log('update value')
      doc.set(node.value!, attr, n)
    }
    if (!!n && n !== o)
      console.log('update node')
  }, { deep: true })

  watch(() => node.value?.attrs[attr], (n) => {
    if (n) {
      if (n !== data.value)
        data.value = cloneDeep(n)
    }
  }, { deep: true })

  return data
}

const { selectedNode } = useV(BaseSelectionModel)

const data = useNodeAttr(selectedNode, 'test')
</script>

<template>
  <div v-if="selectedNode">
    <input v-model="data.a">
    <input v-model="data.b">
  </div>
</template>

<style scoped></style>
