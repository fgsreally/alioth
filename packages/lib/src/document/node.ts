import { nanoid } from 'nanoid'
import { clone, get, set } from 'lodash-es'
import { emitter } from './emitter'
// import type { HistoryController } from './history'

export class VirtualNode<A extends Record<string, any>> {
  id = nanoid()
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  attrs: A
  emitter = emitter
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
    const oldValue = get(this.attrs, path)
    if (get(this.attrs, path) === value)
      return

    this.emitter.emit('set', {
      node: this,
      path,
      value,
      oldValue,
    })

    this._set(path, value)
  }

  /**
        * 仅被HC调用
        */
  _set(path: string, value: any) {
    set(this.attrs, path, value)
  }

  // 在父block的children中的位置

  public insert(node: VirtualNode<A>, index?: number) {
    if ((!index) && index !== 0)
      index = this.children.length

    this._insert(node, index)

    this.emitter.emit('insert', {
      node,
      parent: this,
      index,
    })
  }

  _insert(node: VirtualNode<A>, index: number) {
    node.parent = this

    this.children.splice(index, 0, node)
  }

  public remove(index: number) {
    const node = this._remove(index)

    if (node) {
      this.emitter.emit('remove', {
        node,
        parent: this,
        index,
      })
    }
  }

  _remove(index: number) {
    const removeBlock = this.children.splice(index, 1)[0]

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
}
