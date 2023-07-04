import type { VirtualNode } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { DragState } from '@/models/drag'
import { DocState } from '@/models/doc'


export function useDragBoundary() {
  const { add } = useV(DragState)
  const { activeDoc } = useV(DocState)

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
  const { add, del } = useV(DragState)

  onMounted(() => {
    console.log(dom.value)
    add(dom.value, cb)
  })
  onBeforeUnmount(() => {
    del(dom.value)
  })
  return dom
}
