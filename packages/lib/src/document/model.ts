import { interval } from '../interval'
import { VirtualDocument } from './document'
import type { NodeAttrs } from './node'

export class DocumentModel<T extends NodeAttrs> {
  activeId = '0'
  id = 0
  docs: { doc: VirtualDocument<T>; id: string; title: string }[] = []

  constructor() {
    interval.setState('$doc', this)
  }

  get activeDoc() {
    return this.find(this.activeId)!.doc!
  }

  get title() {
    return this.find(this.activeId)!.title
  }

  get container() {
    return this.activeDoc.root
  }

  get isActive() {
    return !!this.find(this.activeId)
  }

  get activeNode() {
    return this.find(this.activeId)!.doc?.activeNode
  }

  active(id: string) {
    if (this.activeId === id)
      return
    if (this.docs.some(item => item.id === id))
      this.activeId = id
  }

  find(id: string) {
    return this.docs.find(item => item.id === id)
  }

  load(data: any) {
    data = typeof data === 'string' ? JSON.parse(data) : data

    this.docs = data.map(({ id, title, data }: any) => {
      const doc = new VirtualDocument()
      doc.load(data)
      return {
        id, title, doc,

      }
    })
    return this.docs
  }
}
