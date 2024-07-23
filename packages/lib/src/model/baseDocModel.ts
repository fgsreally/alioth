import { Global, Init, Tag } from 'phecda-core'
import { Controller, VirtualDocument } from '../core'

@Global
@Tag('doc')
export class BaseDocModel<NodeAttrs extends Record<string, any> = any> extends VirtualDocument<NodeAttrs> {
  activeId: string
  controller: Controller

  constructor() {
    super()
  }

  @Init
  init() {
    this.controller = new Controller(this)
  }

  get pages() {
    return this.findChildren(this.root)
  }

  addPage() {
    const newNode = this.createNode({ key: 'page' } as any)

    this.insert(newNode, this.root)
    return newNode
  }

  removePage(id: string) {
    this.remove(this.findById(id)!)
  }

  findPage(id: string) {
    return this.pages.find(item => item.id === id)!
  }
}
