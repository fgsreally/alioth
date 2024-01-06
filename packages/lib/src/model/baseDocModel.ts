import { Global, Init, Tag } from 'phecda-core'
import { Controller, VirtualDocument, VirtualNode } from '../document'

@Global
@Tag('doc')
export class BaseDocModel<T extends Record<string, any>> extends VirtualDocument {
  activeId: string
  root: VirtualNode<T>
  controller: Controller
  selectNode: VirtualNode<T> | undefined
  hoverNode: VirtualNode<T> | undefined
  activePage: VirtualNode<T> | undefined

  constructor() {
    super()

    this.controller = new Controller(this)
    // this.activePage = this.addPage()
  }

  @Init
  private _init() {
    window.$alioth_node_event = ({ event, cb }: any) => {
      this.on(event, cb)
    }
  }

  get pages() {
    return this.findChildrens(this.root)
  }

  select(node: VirtualNode<T>) {
    this.selectNode = node
  }

  hover(node: VirtualNode<T>) {
    this.hoverNode = node
  }

  switchPage(id: string) {
    this.activePage = this.pages.find(item => item.id === id)!
  }

  addPage() {
    const newNode = new VirtualNode({ key: 'page' } as any)

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
