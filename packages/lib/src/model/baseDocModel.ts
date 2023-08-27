import { interval } from '../interval'
import { VirtualDocument } from '../document'
import type { NodeAttrs } from '../document'

export abstract class BaseDocModel<T extends NodeAttrs> {
  abstract containerAttrs: NodeAttrs
  activeId: string
  docs: VirtualDocument<T>[] = []

  constructor() {
    interval.setState('$doc', this)
  }

  get activeDoc() {
    return this.find(this.activeId) as unknown as VirtualDocument<T>
  }

  get container() {
    return this.activeDoc?.root
  }

  get isActive() {
    return !!this.find(this.activeId)
  }

  get activeNode() {
    return this.find(this.activeId)?.activeNode
  }

  active(id: string) {
    if (this.activeId === id)
      return
    if (this.docs.some(item => item.id === id))
      this.activeId = id
  }

  add(id?: string) {
    const doc = new VirtualDocument(this.containerAttrs, id)

    this.docs.push(doc)
    return doc
  }

  remove(id: string) {
    if (this.docs.length > 1) {
      const index = this.docs.findIndex(item => item.id === id)

      this.docs.splice(index, 1)
      this.activeId = this.docs[(index > 0) ? index - 1 : index].id
    }
  }

  find(id: string) {
    return this.docs.find(item => item.id === id)
  }

  index(id: string) {
    return this.docs.findIndex(item => id === item.id)
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
