import { markRaw } from 'vue'
import { Doc } from 'yjs'
import { Controller, observeDoc } from '../document'
import type { NodeAttrs, VirtualDocument } from '../document'
import { BaseDocModel } from './baseDocModel'

export abstract class BridgeDocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  protected ydoc = new Doc()
  protected yarr = this.ydoc.getArray<string>('documents')
  constructor() {
    super()
  }

  abstract bridgeDoc(doc: VirtualDocument<any>): void

  abstract bridge(): void

  add() {
    const doc = this._add()
    this.yarr.push([doc.id])
    return doc
  }

  protected _add() {
    super.add()
    // 保持响应式
    const doc = this.docs[this.docs.length - 1]

    const c = new Controller()
    doc.bind(markRaw(c))

    this.bridgeDoc(doc)
    return doc
  }
}
