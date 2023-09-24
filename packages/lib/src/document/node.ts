import { nanoid } from 'nanoid'
import { set } from 'lodash-es'
import EventEmitter from 'eventemitter3'
import type { VirtualDocument } from './document'
// import type { HistoryController } from './history'

export interface NodeAttrs {
  [key: string]: any
}
export class VirtualNode<A extends NodeAttrs> extends EventEmitter {
  // attributes: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]> = Object.create({})
  id = nanoid()
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  timeout = 800
  doc: VirtualDocument<A>
  attrs: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]>
  constructor(initAttrs?: A,
  ) {
    super()
    this.attrs = initAttrs || {}
  }

  bind(doc: VirtualDocument<A>) {
    this.doc = doc
    if (this.doc.controller)
      this.doc.controller.create(this.id, this.attrs)
  }

  setAttributes(values: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]>) {
    for (const key in values)
      this.set(key, values[key])
  }

  toJSON(): any {
    return {
      id: this.id,
      attrs: this.attrs,
      children: this.children.map(item => item.toJSON()),
    }
  }

  /**
        * 外部调用
        */
  public set(path: string, value: any) {
    // if (this.attrs[key] === value)
    //   return

    this._set(path, value)
    if (this.doc?.controller)
      this.doc.controller.set(this.id, path as string, value)
  }

  /**
        * 仅被HC调用
        */
  _set(path: string, value: any) {
    set(this.attrs, path, value)
    this.emit('setAttr', path)
  }

  // 在父block的children中的位置
  get index() {
    return this.parent?.children.findIndex(v => v.id === this.id)
  }

  public insert(node: VirtualNode<A>, index?: number) {
    if ((!index) && index !== 0)
      index = this.children.length

    this._insert(node, index)
    if (this.doc?.controller)
      this.doc.controller.insert(this.id, node.id, index)
  }

  _insert(node: VirtualNode<A>, index: number) {
    node.parent = this
    this.children.splice(index, 0, node)
    node.emit('insert')
  }

  public remove(index: number) {
    // this.HC.emitter.emit(ALIOTH_EVENT.REMOVE_NODE, { id: this.id, index })
    const node = this._remove(index)

    if (this.doc?.controller)
      this.doc.controller.delete(this.id, node.id, index)
  }

  _remove(index: number) {
    const removeBlock = this.children.splice(index, 1)[0]
    function traverse(node: VirtualNode<any>) {
      node.emit('remove')
      node.removeAllListeners()
      node.parent = null
      node.children.forEach(traverse)
    }
    traverse(removeBlock)
    return removeBlock
  }

  // 从子block中寻找
  findById(id: string): VirtualNode<A> | void {
    for (const VirtualNode of this.children) {
      if (VirtualNode.id === id)
        return VirtualNode
      if (VirtualNode.findById(id))
        return VirtualNode.findById(id)
    }
  }

  // 是否含有某block
  contains(VirtualNode: VirtualNode<A>) {
    return this.id === VirtualNode.id || !!this.findById(VirtualNode.id)
  }

  findByAttrs(filter: (params: NodeAttrs) => boolean | void): VirtualNode<A>[] {
    const blocks = [] as VirtualNode<A>[]
    for (const VirtualNode of this.children) {
      if (filter(VirtualNode.attrs))
        blocks.push(VirtualNode)
      blocks.push(...VirtualNode.findByAttrs(filter))
    }
    return blocks
  }
}
