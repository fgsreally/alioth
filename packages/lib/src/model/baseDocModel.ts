import { Global, Init, Tag } from 'phecda-core'
import type { NodeData } from '../document'
import { Controller, VirtualNode } from '../document'

@Global
@Tag('doc')
export class BaseDocModel<T extends Record<string, any>> {
  activeId: string
  root: VirtualNode<T>
  controller: Controller
  selectNode: VirtualNode<T> | undefined
  hoverNode: VirtualNode<T> | undefined
  activePage: VirtualNode<T> | undefined

  constructor() {
    this.root = new VirtualNode({} as any, '0')
    this.root.root()
    this.controller = new Controller(this.root)
    // this.activePage = this.addPage()
  }

  @Init
  private _init() {
    window.$alioth_node_event = ({ event, cb }: any) => {
      this.root.emitter.on(event, cb)
    }
  }

  get pages() {
    return this.root.children
  }

  select(node: VirtualNode<T>) {
    this.selectNode = node
  }

  hover(node: VirtualNode<T>) {
    this.hoverNode = node
  }

  switchPage(id: string) {
    this.activePage = this.root.children.find(item => item.id === id)!
  }

  addPage() {
    const newNode = new VirtualNode({ key: 'page' } as any)

    this.root.insert(newNode)
    return newNode
  }

  removePage(id: string) {
    const { children } = this.root

    this.root.remove(children.find(item => item.id === id)!)
  }

  findPage(id: string) {
    return this.root.children.find(item => item.id === id)
  }

  load(data: NodeData) {
    this.root.load(data)
  }

  toJSON() {
    return this.root.toJSON()
  }
}
