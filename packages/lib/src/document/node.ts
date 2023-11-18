import { nanoid } from 'nanoid'
import { clone, set } from 'lodash-es'
import type { VirtualDocument } from './document'
// import type { HistoryController } from './history'

export class VirtualNode<A extends Record<string, any>> {
  id = nanoid()
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  timeout = 800
  doc: VirtualDocument<A>
  attrs: A
  level: number
  constructor(initAttrs?: A,
  ) {
    this.attrs = initAttrs || {} as any
  }

  get cloneChilds() {
    return clone(this.children)
  }

  get index() {
    return this.parent?.children.findIndex(node => node.id === this.id)
  }

  bind(doc: VirtualDocument<A>) {
    this.doc = doc
    if (this.doc.controller)
      this.doc.controller.create(this.id, this.attrs)
  }

  setAttributes(values: Record<keyof A, A[keyof A]>) {
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
    this.doc.emit('set', { node: this, path, value })
    set(this.attrs, path, value)
  }

  // 在父block的children中的位置

  public insert(node: VirtualNode<A>, index?: number) {
    if ((!index) && index !== 0)
      index = this.children.length

    this._insert(node, index)

    if (this.doc?.controller)
      this.doc.controller.insert(this.id, node.id, index)
  }

  _insert(node: VirtualNode<A>, index: number) {
    node.parent = this

    node.level = this.level + 1

    this.children.splice(index, 0, node)
    this.doc.emit('insert', { parent: this, child: node, index })
  }

  public remove(index: number) {
    const node = this._remove(index)

    if (this.doc?.controller && node)
      this.doc.controller.delete(this.id, node.id, index)
  }

  _removeNode(node: VirtualNode<any>) {
    this.children.splice(this.children.findIndex(item => item.id === node.id), 1)
  }

  _remove(index: number) {
    const removeBlock = this.children.splice(index, 1)[0]
    const { doc } = this
    function traverse(node: VirtualNode<any>) {
      if (!node)
        return
      node.level = undefined as any

      doc.blockMap.delete(node.id)
      node.parent = null
      node.children.forEach(traverse)
      doc.emit('remove', { node })
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

  findByAttrs(filter: (params: A) => boolean | void): VirtualNode<A>[] {
    const blocks = [] as VirtualNode<A>[]
    for (const VirtualNode of this.children) {
      if (filter(VirtualNode.attrs))
        blocks.push(VirtualNode)
      blocks.push(...VirtualNode.findByAttrs(filter))
    }
    return blocks
  }
}
