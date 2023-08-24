import { debounce, omit } from 'lodash-es'
import { watch } from 'vue'
import type { Transaction, YEvent } from 'yjs'
import { Map as YMap } from 'yjs'
import { emitter } from 'phecda-vue'
import type { NodeAttrs } from './node'
import { VirtualNode } from './node'
import type { Controller } from './controller'
export class VirtualDocument<A extends NodeAttrs> {
  data: { root: VirtualNode<A>; activeNode?: VirtualNode<A>; hoverNode?: VirtualNode<A> }
  blockMap: Map<string, VirtualNode<A>> = new Map()
  controller: Controller
  root: VirtualNode<A>
  activeNode?: VirtualNode<A>
  hoverNode?: VirtualNode<A>
  emitter = emitter
  constructor(initAttrs?: A) {
    this.root = this.createNode(initAttrs, 'root')
  }

  get container() {
    return this.root
  }

  bindController(controller: Controller) {
    this.controller = controller
    this.root.bindDoc(this)
  }

  // 从所有block中找
  get(id: string) {
    return this.blockMap.get(id)
  }

  // 回收不在document中的block，垃圾回收
  clean() {
    this.blockMap.forEach((v, k, m) => {
      if (!v.parent)
        m.delete(k)
    })
  }

  transact(cb: () => void) {
    this.controller?.ydoc.transact(cb)
  }

  createNode(initAttrs?: A, id?: string) {
    const node = new VirtualNode<A>(initAttrs)

    id && (node.id = id)

    node.bindDoc(this)

    this.blockMap.set(node.id, node)

    return node
  }

  _createNode(initAttrs?: A, id?: string) {
    const node = new VirtualNode<A>(initAttrs)

    id && (node.id = id)

    node.doc = this

    this.blockMap.set(node.id, node)

    return node
  }

  removeNode(node: VirtualNode<NodeAttrs>) {
    if (node.parent) {
      node.parent.remove(node.index!)
      this.blockMap.delete(node.id)
    }
  }

  _removeNode(node: VirtualNode<NodeAttrs>) {
    if (node.parent) {
      node.parent._remove(node.index!)
      this.blockMap.delete(node.id)
    }
    else {
      this.blockMap.delete(node.id)
    }
  }

  select(node: VirtualNode<A>, type: 'activeNode' | 'hoverNode' = 'activeNode') {
    return this[type] = node
  }

  cancel(type: 'activeNode' | 'hoverNode' = 'activeNode') {
    return this[type] = undefined
  }

  load(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    function traverse(data: any) {
      const node = new VirtualNode(data.key)

      node.bindDoc(that)

      node.id = data.id
      node.attrs = data.attrs
      data.children.forEach((item: any, i: number) => {
        const child = traverse(item)
        child.parent = node
        node.children[i] = child
      })
      return node
    }
    this.root = traverse(data)
    return this
  }

  bind(property: keyof VirtualNode<A>, timeout = 500) {
    const update = debounce((value: any) => {
      this.activeNode!.setAttribute(property, value)
    }, timeout)
    watch(() => this.activeNode!.attrs[property], (n: any) => update(n))
    return this.activeNode!.attrs[property]
  }
}

export function observe(doc: VirtualDocument<any>) {
  const fn: (arg0: YEvent<any>[], arg1: Transaction) => void = (events, t) => {
    events.forEach((event) => {
      if ((!t.local) || t.origin) { // from remote or undoManager
        if (event.changes.keys.size === 0) {
          event.changes.added.forEach((item: any) => {
            const id = item.content.getContent()[0]
            const node = doc.get(id)!
            if (item.left) {
              const left = doc.get(item.left.content.getContent()[0])!
              left.parent!._insert(node, left.index!)
            }
            else {
              const parent = doc.get(item.parent.parent.get('id'))
              parent!._insert(node, 0)
            }
          })
          // only work when undo

          event.changes.deleted.forEach((item) => {
            const id = item.content.getContent()[0]
            const node = doc.get(id)!
            node && node.parent?._remove(node.index!)
          })
        }
        else {
          event.changes.keys.forEach((item, i) => {
            const obj = event.target.get(i)

            switch (item.action) {
              case 'add':
                if (obj instanceof YMap)
                  doc._createNode(omit(event.target.get(i).toJSON(), ['children']), i)

                else doc.get(event.path[0] as string)?._setAttribute(i, obj)
                break
              case 'delete':
                if (item.oldValue instanceof YMap)
                  doc._removeNode(doc.get(i)!)
                else

                  doc.get(event.path[0] as string)?._setAttribute(i, obj)

                break
              case 'update':

                doc.get(event.path[0] as string)?._setAttribute(i, obj)
            }
          })
        }
      }
      else {
        // @ts-expect-error need phecda events type w
        doc?.emitter.emit('alioth:node-action', event)
      }
    })
  }
  doc.controller.map.observeDeep(fn)
  return () => {
    doc.controller.map.unobserveDeep(fn)
  }
}
