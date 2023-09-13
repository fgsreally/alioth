import type { VirtualNode } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { DragModel } from '@/models/drag'
import { DocModel } from '@/models/doc'

export function useDragBoundary() {
  const { add } = useV(DragModel)
  const { activeDoc } = useV(DocModel)

  const doms = reactive<{ [key: string]: { ref: HTMLElement } }>({})

  onMounted(() => {
    for (const i in doms) {
      add(doms[i].ref, (v: any) => {
        (activeDoc.value.activeBlock as VirtualNode<any>).attrs.propsData[i] = v
      })
    }
  })

  // onBeforeUnmount(() => {
  //   for (const i in doms)
  //     del(doms[i].ref)
  // })
  return doms
}

export function useDragSingle(cb: Function) {
  const dom = ref<HTMLElement>(null as any)
  const { add, del } = useV(DragModel)

  onMounted(() => {
    add(dom.value, cb)
  })
  onBeforeUnmount(() => {
    del(dom.value)
  })
  return dom
}
