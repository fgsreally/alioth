import { Global, Init, Tag } from 'phecda-core'
import { VirtualDocument } from '../document'

@Global
@Tag('doc')
export class BaseDocModel<T extends Record<string, any>> {
  activeId: string
  doc = new VirtualDocument<T>()

  @Init
  private _init() {
    window.$alioth_node_event = ({ event, cb }: any) => {
      this.doc.on(event, cb)
    }
  }

  get activePage() {
    return this.doc.activeNode
  }

  get pages() {
    return this.doc.root.children
  }

  switchPage(id: string) {
    this.doc.root.set('id', id)
  }

  addPage(id?: string) {
    const node = this.doc.createNode({ key: 'page' } as any, id)

    this.doc.root.insert(node)
    return node
  }

  removePage(id: string) {
    const { children } = this.doc.root
    const index = children.findIndex(item => item.id === id)
    this.doc.root.remove(index)
  }

  findPage(id: string) {
    return this.doc.root.children.find(item => item.id === id)
  }

  index(id: string) {
    return this.doc.root.children.findIndex(item => id === item.id)
  }

  load(data: any) {
    data = typeof data === 'string' ? JSON.parse(data) : data

    this.doc.load(data)
  }

  toJSON() {
    return this.doc.root
  }
}
