import { nanoid } from 'nanoid'
import EventEmitter from 'eventemitter3'
import { cloneDeep } from '../utils'
import { VirtualNode } from './node'
export type DocData = { id: string; attrs: any; index: number; parentId: string }[]

export class VirtualDocument<A extends Record<string, any> = any> extends EventEmitter {
  nodeSet = new Set<VirtualNode<A>>()
  root = new VirtualNode({} as A, 'root')
  currentEventId: string | undefined
  seed = 0

  constructor() {
    super()
  }

  createNode(attrs: A) {
    const node = new VirtualNode<A>(attrs)
    node.doc = this
    return node
  }

  protected createEventId() {
    return this.currentEventId || nanoid()
  }

  get nodes() {
    return [...this.nodeSet]
  }

  setSeed(seed: number) {
    if (seed > 0.1)
      throw new Error('seed should less than 0.1')

    this.seed = seed
  }

  load(data: DocData) {
    this.emit('load', data)

    data.forEach(({ id, attrs, index, parentId }) => {
      const node = new VirtualNode(attrs, id)
      node.index = index
      node.parentId = parentId
      node.doc = this
      this.nodeSet.add(node)
    })
  }

  store(): any {
    return this.nodes.map(item => item.toJSON())
  }

  flat(node: VirtualNode<A>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    const traverse = (node: VirtualNode<any>, arr: VirtualNode<A>[] = []) => {
      arr.push(node)

      that.findChildrens(node).map(n => traverse(n, arr))
      return arr
    }

    return traverse(node)
  }

  findById(id: string) {
    if (id === 'root')
      return this.root
    return this.nodes.find(item => item.id === id)
  }

  findChildrens(node: VirtualNode<A>) {
    return this.nodes.filter(item => item.parentId === node.id).sort((n1, n2) => n1.index - n2.index)
  }

  findAllChildrens(node: VirtualNode<A>) {
    const nodes = new Set<VirtualNode>()
    const traverse = (node: VirtualNode<A>) => {
      this.findChildrens(node).forEach((node) => {
        nodes.add(node)
        traverse(node)
      })
    }
    traverse(node)
    return [...nodes]
  }

  findParent(node: VirtualNode<A>) {
    return this.nodes.find(item => item.id === node.parentId)
  }

  findBrothers(node: VirtualNode<A>) {
    return this.nodes.filter(n => node.parent === n.parent)
  }

  index(node: VirtualNode<A>) {
    return this.findBrothers(node).findIndex(item => item.id === node.id)!
  }

  insert(node: VirtualNode<A>, parent: VirtualNode<A>, index = 0) {
    const childs = this.findChildrens(parent)
    const index1 = childs[index - 1]?.index || 0
    const index2 = childs[index]?.index || 1
    const { parentId: lastParentId, index: lastIndex } = node
    node.parentId = parent.id
    node.index = (index2 + index1) / 2 + this.seed

    if (!this.findById(node.id)) {
      this.nodeSet.add(node)

      this.emit('insert', {
        node,
        index: node.index,
      })
    }
    else {
      this.emit('swap', {
        node,
        lastParentId,
        lastIndex,

      })
    }
  }

  remove(node: VirtualNode<A>) {
    this.emit('remove', {
      node,

    })
    this.nodeSet.delete(node)
    this.removeChilds(node)
  }

  protected removeChilds(node: VirtualNode<A>) {
    this.nodes.forEach((n) => {
      if (n.parentId === node.id) {
        this.nodeSet.delete(n)
        this.removeChilds(n)
      }
    })
  }

  public set<K extends keyof A>(node: VirtualNode<A>, key: K, value: A[K]) {
    this.emit('set', {
      node,
      key,
      value,
      oldValue: node.oldAttrs[key], // work for v-model
    })

    this._set(node, key, value)
  }

  _set<K extends keyof A>(node: VirtualNode<A>, key: K, value: A[K]) {
    node.oldAttrs[key] = cloneDeep(value)
    node.attrs[key] = value
  }

  cloneNode(node: VirtualNode<A>) {
    return new VirtualNode(cloneDeep(node.attrs))
  }
}
