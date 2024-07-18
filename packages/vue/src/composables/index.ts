import { BaseDocModel, BaseSelectionModel } from 'alioth-lib'
import { cloneDeep } from 'lodash-es'
import { useR, useV } from 'phecda-vue'
import { WatchStopHandle, computed, onBeforeUnmount, watch } from 'vue'

export function useNodeAttr<Attr = any>(attr: string) {
  const doc = useR(BaseDocModel)
  const { selectedNode } = useV(BaseSelectionModel)
  let watcher: WatchStopHandle
  watch(selectedNode, (n) => {
    if (n) {
      watcher?.()

      watcher = watch(selectedNode.value!.attrs[attr], (v) => {
        doc.set(selectedNode.value!, attr, cloneDeep(v))
      })
    }
  }, { deep: true })
  onBeforeUnmount(() => {
    watcher?.()
  })

  return computed<Attr>(() => selectedNode.value && selectedNode.value!.attrs[attr])
}
