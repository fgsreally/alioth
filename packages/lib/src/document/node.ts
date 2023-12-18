import { nanoid } from 'nanoid'
import { clone, cloneDeep } from 'lodash-es'
import { EventEmitter } from './emitter'
// import type { HistoryController } from './history'

export class VirtualNode<A extends Record<string, any> = any> {
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  attrs: A
  isRoot = false

  protected eventEmitter: EventEmitter
  protected oldAttrs: A

  constructor(initAttrs?: A, public id = nanoid(),
  ) {
    this.attrs = initAttrs || {} as any

    this.oldAttrs = cloneDeep(this.attrs)
  }

  get cloneChilds() {
    return clone(this.children)
  }

  get index() {
    return this.parent?.children.findIndex(node => node.id === this.id)
  }

  get emitter(): EventEmitter {
    console.log(this.attrs, this.eventEmitter)
    return this.eventEmitter || this.parent?.emitter
  }

  root(isRoot = true) {
    this.isRoot = isRoot
    this.eventEmitter = new EventEmitter()
  }

  toJSON(): any {
    return {
      id: this.id,
      attrs: this.attrs,
      children: this.children.map(item => item.toJSON()),
    }
  }

  load(data: NodeData) {
    this.attrs = data.attrs
    this.oldAttrs = cloneDeep(this.attrs)
    this.id = data.id
    data.children.forEach((d) => {
      const node = new VirtualNode()
      node.parent = this
      this.children.push(node)
      node.load(d)
    })
  }

  /**
        * 外部调用
        */
  public set<K extends keyof A>(key: K, value: A[K]) {
    if (this.attrs[key] === value)
      return

    this.emitter.emit('set', {
      node: this,
      key,
      value,
      oldValue: this.oldAttrs[key],
    })

    this._set(key, value)
  }

  _set<K extends keyof A>(key: K, value: A[K]) {
    this.oldAttrs[key] = cloneDeep(value)

    this.attrs[key] = value
  }

  // 在父block的children中的位置

  public insert(node: VirtualNode<A>, index?: number) {
    this._insert(node, index)
    if (!this.parent && !this.isRoot)
      return

    this.emitter.emit('insert', {
      node,
      parent: this,
      index,
    })
  }

  _insert(node: VirtualNode<A>, index?: number) {
    if ((!index) && index !== 0)
      index = this.children.length
    node.parent = this

    this.children.splice(index, 0, node)
  }

  public remove(node: VirtualNode<A>) {
    const index = this.children.findIndex(item => item.id === node.id)

    if (index >= 0) {
      this.emitter.emit('remove', {
        node,
        parent: this,
        index,
      })
      this._remove(index)
    }
  }

  _remove(index: number) {
    const removeBlock = this.children.splice(index, 1)[0]

    return removeBlock
  }

  // 从子block中寻找
  findById(id: string): VirtualNode<A> | void {
    if (id === this.id)
      return this

    for (const n of this.children) {
      const node = n.findById(id)
      if (node)
        return node
    }
  }

  // public swap(to: number) {
  //   if (to < 0)
  //     throw new Error('param "to" should gte 0')
  //   const index = this.index!
  //   if (index === to)
  //     return

  //   this.emitter.emit('swap', {
  //     parent: this.parent,
  //     from: index,
  //     to,
  //     node: this,
  //   })
  //   this._swap(index, to)
  // }

  _swap(from: number, to: number) {
    const children = this.parent!.children
    children.splice(from, 1)
    children.splice(to, 0, this)
  }

  clone() {
    const cloneNode = new VirtualNode(cloneDeep(this.attrs), this.id)
    cloneNode.children = this.children.map((item) => {
      const child = item.clone()
      child.parent = cloneNode
      return child
    })
    return cloneNode
  }

  // copy() {
  //   const cloneNode = new VirtualNode(cloneDeep(this.attrs))
  //   cloneNode.children = this.children.map((item) => {
  //     const child = item.copy()
  //     child.parent = cloneNode
  //     return child
  //   })
  //   return cloneNode
  // }
}

export interface NodeData {
  attrs: any
  id: string
  children: NodeData[]
}
