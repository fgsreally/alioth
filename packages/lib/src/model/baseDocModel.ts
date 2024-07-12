import { Global, Tag } from 'phecda-core'
import { Controller, VirtualDocument } from '../core'

@Global
@Tag('doc')
export class BaseDocModel<T extends Record<string, any> = any> extends VirtualDocument<T> {
  activeId: string
  controller: Controller

  constructor() {
    super()

    this.controller = new Controller(this)
  }

  get pages() {
    return this.findChildrens(this.root)
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
