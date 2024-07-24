import { BaseDocModel, BaseSelectionModel, type VirtualNode, cloneDeep, createDeepProxy, get, set } from 'alioth-lib'

import { useR, useV } from 'phecda-vue'
import { Ref, ref, watch } from 'vue'

function useNodeAttrs<Attr extends Record<string, any> = any>(node: Ref<VirtualNode | undefined>) {
  const doc = useR(BaseDocModel)
  const data = ref<Attr>()

  watch(() => node.value, (n) => {
    if (n) {
      data.value = createDeepProxy(node.value!.attrs, {
        get(_target, _prop, _, fullPath) {
          fullPath = fullPath.filter(item => !item.startsWith('__v_'))

          return get(node.value!.attrs, fullPath)
        },
        set(_target, prop, value, _receiver, fullPath) {
          fullPath = fullPath.filter(item => !item.startsWith('__v_'))
          const attr = fullPath[0]
          const copyObj = { ...node.value!.attrs[attr] }
          const objPath = fullPath.slice(1, -1)

          if (objPath.length === 0) {
            copyObj[prop] = value
          }
          else {
            const cloneValue = cloneDeep(get(copyObj, objPath))
            cloneValue[prop] = value
            set(copyObj, objPath, cloneValue)
          }

          doc.set(node.value!, attr, copyObj)
          return true
        },

      })
    }
  }, { immediate: true })

  return data
}

export function useSelectedNodeAttrs<Attr extends Record<string, any> = any>() {
  const { selectedNode } = useV(BaseSelectionModel)

  return useNodeAttrs<Attr>(selectedNode)
}
