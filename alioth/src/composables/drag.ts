import type { VirtualNode } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { DragState } from 'alioth-lib/model'
import { DocState } from '@/models/doc'

const { activeDoc } = useV(DocState)

export function useDragBoundary() {
  const { add } = useV(DragState)
  const doms = reactive<{ [key: string]: { ref: HTMLElement } }>({})

  onMounted(() => {
    for (const i in doms) {
      add(doms[i].ref, (v: any) => {
        (activeDoc.value.activeBlock as VirtualNode<any>).attrs.propsData[i] = v
      })
    }
    // console.log(doms)
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
    add(dom.value, cb)
  })
  onBeforeUnmount(() => {
    del(dom.value)
  })
  return dom
}
