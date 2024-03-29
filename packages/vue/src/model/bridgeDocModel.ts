import { Doc } from 'yjs'
import { Controller } from 'alioth-lib/src/document'
import type { NodeAttrs, VirtualDocument } from 'alioth-lib/src/document'
import { BaseDocModel } from 'alioth-lib/src/model/baseDocModel'

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

  protected _add(id?: string) {
    super.add(id)
    // 保持响应式
    const doc = this.docs[this.docs.length - 1]
    const c = new Controller()
    doc.bind(c)
    this.bridgeDoc(doc)
    return doc
  }
}
