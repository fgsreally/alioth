import type { NodeAttrs } from 'alioth-vue'
import { Init, emitter } from 'phecda-vue'
import { BaseDocModel, Controller, interval, observeDoc } from 'alioth-vue'
import { applyUpdate, encodeStateAsUpdate } from 'yjs'
export class DocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  containerAttrs: any

  @Init
  init() {
    this.doc.bind(markRaw(new Controller()))
    observeDoc(this.doc)
    window.addEventListener('message', (e) => {
      const { id, delta } = e.data
      applyUpdate(this.doc.controller.ydoc, delta, 'alioth')
      this.activeId = id
    }, false)
    this.doc.controller.ydoc.on('update', (_, origin) => {
      window.parent.postMessage({
        delta: encodeStateAsUpdate(this.doc.controller.ydoc),
      }, '*')
    })
  }
}
