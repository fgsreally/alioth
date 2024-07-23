import { BaseDocModel, BaseSelectionModel, type VirtualNode, cloneDeep } from 'alioth-lib'

import { useR, useV } from 'phecda-vue'
import { Ref, ref, watch } from 'vue'

export function useNodeAttr<Attr extends Record<string, any> = any>(node: Ref<VirtualNode | undefined>, attr: string) {
  const doc = useR(BaseDocModel)
  const data = ref<Attr>()

  watch(() => node.value, (n) => {
    if (n)
      data.value = cloneDeep(n!.attrs[attr])
  }, { immediate: true })

  watch(() => data.value, (n, o) => {
    if (!!n && n === o)
      doc.set(node.value!, attr, n)
  }, { deep: true })

  watch(() => node.value?.attrs[attr], (n) => {
    if (n) {
      if (n !== data.value)
        data.value = cloneDeep(n)
    }
  }, { deep: true })

  return data
}

export function useSelectedNodeAttr<Attr extends Record<string, any> = any>(attr: string) {
  const { selectedNode } = useV(BaseSelectionModel)

  return useNodeAttr<Attr>(selectedNode, attr)
}
