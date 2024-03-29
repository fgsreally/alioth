import { Global, Tag } from 'phecda-core'

const dragenter = (e: DragEvent) => {
  (e.dataTransfer as any).dropEffect = 'move'
}
const dragover = (e: DragEvent) => {
  e.preventDefault()
}
const dragleave = (e: DragEvent) => {
  (e.dataTransfer as any).dropEffect = 'none'
}
@Global
@Tag('drag')
export class BaseDragModel {
  moduleMap: Map<HTMLElement, Function> = new Map()
  data: Record<string, any> = {}
  listenController: AbortController
  add(el: HTMLElement, cb: Function) {
    this.moduleMap.set(el, cb)
  }

  del(el: HTMLElement) {
    this.moduleMap.delete(el)
  }

  execCb(el: HTMLElement, data: any, e: DragEvent) {
    this.moduleMap.get(el)?.(data, e)
  }

  dragStart(data: any) {
    this.listenController = new AbortController()
    const { signal } = this.listenController
    for (const [el] of this.moduleMap) {
      el.addEventListener('dragenter', dragenter, { signal })
      el.addEventListener('dragover', dragover, { signal })
      el.addEventListener('dragleave', dragleave, { signal })
      el.addEventListener('drop', (e) => {
        this.execCb(el, data, e)
      }, { signal })
    }
  }

  dragEnd() {
    this.listenController.abort()
    this.listenController = undefined as any
  }
}
