import { nanoid } from 'nanoid'
import type { DebouncedFunc } from 'lodash-es'

import type { VirtualDocument } from './document'
// import type { HistoryController } from './history'

export interface NodeAttrs {
  [key: string]: any
}
export class VirtualNode<A extends NodeAttrs> {
  // attributes: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]> = Object.create({})
  id = nanoid()
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  timeout = 800
  doc: VirtualDocument<A>
  attrs: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]>

  private attrsRecordMap = new Map<string | number, any>()
  private attrsRecordSet = new Set<string | number>()
  // 储存所有创建的block
  private timeRecord: Record<string | number, DebouncedFunc<any>> = {}
  constructor(initAttrs?: A,
  ) {
    this.attrs = initAttrs || {}
  }

  bindDoc(doc: VirtualDocument<A>) {
    this.doc = doc
    if (this.doc.controller)
      this.doc.controller.create(this.id, this.attrs)
  }

  setAttributes(values: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]>) {
    for (const key in values)
      this.setAttribute(key, values[key])
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
  public setAttribute(key: keyof NodeAttrs, value: NodeAttrs[keyof NodeAttrs]) {
    if (this.attrs[key] === value)
      return
    // if (!isByChannel) {
    //   if (!this.timeRecord[key]) {
    //     this.timeRecord[key] = debounce((value: any) => {
    //       this.HC.emitter.emit(ALIOTH_EVENT.PROPERTY_CHANGE, { id: this.id, key, value: cloneDeep(value) })
    //       this.attrsRecordSet.add(key)
    //       this._setAttribute(key, value)
    //       this.attrsRecordMap.delete(key)
    //       this.attrsRecordSet.delete(key)
    //     }, this.timeout)
    //   }
    //   if (!this.attrsRecordMap.has(key))
    //     this.attrsRecordMap.set(key, cloneDeep(get(this.attrs, key)))

    //   this.timeRecord[key](value)
    // }

    this._setAttribute(key, value)
    if (this.doc?.controller)
      this.doc.controller.setAttr(this.id, key as string, value)
  }

  /**
        * 仅被HC调用
        */
  _setAttribute(key: keyof NodeAttrs, value: NodeAttrs[keyof NodeAttrs]) {
    this.attrs[key] = value
    // const isDuring = !this.attrsRecordSet.has(key) && !category

    // if (isDuring) {
    //   set(this.attrs, key, value)
    // }
    // else {
    //   this.HC.recordStart({ type: 'property', timestamp: Date.now(), node: this, key, value: !category ? this.attrsRecordMap.get(key) : get(this.attrs, key) })

    //   if (category)
    //     set(this.attrs, key, value)

    //   this.HC.recordEnd(category || 'undo')
    // }
  }

  // 在父block的children中的位置
  get index() {
    return this.parent?.children.findIndex(v => v.id === this.id)
  }

  // // 插入，默认插在最后
  // public insert(VirtualNode: VirtualNode<A>, index = -1) {
  //   this.HC.emitter.emit(ALIOTH_EVENT.APPEND_NODE, { id: this.id, VirtualNode: VirtualNode.id, index })
  //   this._insert(VirtualNode, index)
  // }

  // _insert(VirtualNode: VirtualNode<A>, index: number, category: 'redo' | 'undo' = 'undo') {
  //   this.HC.recordStart({ type: 'insert', timestamp: Date.now(), parent: this, index })
  //   if (VirtualNode.parent)
  //     VirtualNode.parent._remove(VirtualNode.index!)
  //   VirtualNode.parent = this
  //   // VirtualNode<A>.BlockMap.set(VirtualNode.id, VirtualNode)
  //   if (index < 0)
  //     this.children.push(VirtualNode)
  //   else this.children.splice(index, 0, VirtualNode)

  //   this.update()
  //   this.HC.recordEnd(category)
  // }

  public insert(node: VirtualNode<A>, index?: number) {
    if ((!index) && index !== 0)
      index = this.children.length

    this._insert(node, index)
    if (this.doc?.controller)
      this.doc.controller.insert(this.id, node.id, index)
  }

  _insert(node: VirtualNode<A>, index: number) {
    //  if (node.parent)
    //   node.parent._remove(node.index!)
    node.parent = this
    // VirtualNode<A>.BlockMap.set(VirtualNode.id, VirtualNode)
    this.children.splice(index, 0, node)
  }

  public remove(index: number) {
    // this.HC.emitter.emit(ALIOTH_EVENT.REMOVE_NODE, { id: this.id, index })
    const node = this._remove(index)

    if (this.doc?.controller)
      this.doc.controller.delete(this.id, node.id, index)
  }

  _remove(index: number) {
    const removeBlock = this.children.splice(index, 1)[0]

    removeBlock.parent = null

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
