import { debounce } from 'lodash-es'
import { reactive, watch } from 'vue'
import { ALIOTH_EVENT } from '../common'
import type { NodeAttrs } from './node'
import { VirtualNode } from './node'
import { HistoryController } from './history'

interface BridgeEvent {
  [ALIOTH_EVENT.CREATE_BLOCK]: { id: string; key: string; value: NodeAttrs }
  [ALIOTH_EVENT.APPEND_NODE]: { id: string; VirtualNode: string; index: number }
  [ALIOTH_EVENT.PROPERTY_CHANGE]: { id: string; key: string; value: any }
  [ALIOTH_EVENT.REMOVE_NODE]: { id: string; index: number }

}
export class VirtualDocument<A extends NodeAttrs> {
  data: { root: VirtualNode<A>; activeNode?: VirtualNode<A>; hoverNode?: VirtualNode<A> }
  blockMap: Map<string, VirtualNode<A>> = new Map()
  HC = new HistoryController()
  constructor(key = 'template', initAttrs?: A) {
    const VirtualNode = this.createNode(key, initAttrs)
    this.data = reactive({ root: VirtualNode }) as any
  }

  // 从所有block中找
  findById(id: string) {
    return this.blockMap.get(id)
  }

  // 回收不在document中的block，垃圾回收
  clean() {
    this.blockMap.forEach((v, k, m) => {
      if (!v.parent)
        m.delete(k)
    })
  }

  createNode(key: string, initAttrs?: NodeAttrs, id?: string) {
    const node = new VirtualNode<A>(key, initAttrs)
    node.HC = this.HC
    node.doc = this

    id && (node.id = id)
    this.blockMap.set(node.id, node)

    this.HC.emitter.emit(ALIOTH_EVENT.CREATE_BLOCK, { id: node.id, key, value: initAttrs })
    return node
  }

  redo() {
    this.HC.redo()
  }

  undo() {
    this.HC.undo()
  }

  on<N extends keyof BridgeEvent>(event: N, fn: (arg: BridgeEvent[N]) => void) {
    this.HC.emitter.on(event, fn)
  }

  emit<N extends keyof BridgeEvent>(event: N, arg: BridgeEvent[N]) {
    const { key, value, id, index, VirtualNode } = arg as any
    switch (event) {
      case ALIOTH_EVENT.CREATE_BLOCK:
        this.createNode(key, value, id)
        break
      case ALIOTH_EVENT.APPEND_NODE:
        this.findById(id)!._insert(this.findById(VirtualNode)!, index)
        break

      case ALIOTH_EVENT.REMOVE_NODE:
        this.findById(id)!._remove(index)
        break
      case ALIOTH_EVENT.PROPERTY_CHANGE:
        this.findById(id)!._setAttribute(key, value)
        break
    }
  }

  get root() {
    return this.data.root as VirtualNode<A>
  }

  get activeNode() {
    return this.data.activeNode
  }

  get hover() {
    return this.data.hoverNode
  }

  select(node: VirtualNode<A>, type: 'activeNode' | 'hoverNode' = 'activeNode') {
    return this.data[type] = node
  }

  cancel(type: 'activeNode' | 'hoverNode' = 'activeNode') {
    return this.data[type] = undefined
  }

  load(data: any) {
    const HC = this.HC
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    function traverse(data: any) {
      const node = new VirtualNode(data.key)

      node.HC = HC
      node.doc = that
      node.id = data.id
      node.attributes = data.attributes
      data.children.forEach((item: any, i: number) => {
        const child = traverse(item)
        child.parent = node
        node.children[i] = child
      })
      return node
    }
    this.HC.clear()
    this.data.root = traverse(data)
    return this
  }

  snapshot() {
    this.HC.clear()
    return JSON.stringify(this.data.root)
  }

  bind(property: keyof VirtualNode<A>, timeout = 500) {
    const update = debounce((value: any) => {
      this.activeNode!.setAttribute(property, value)
    }, timeout)
    watch(() => this.activeNode!.attributes[property], (n: any) => update(n))
    return this.activeNode!.attributes[property]
  }

  unmount() {
    this.HC.emitter.removeAllListeners()
  }
}
