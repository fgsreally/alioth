import { omit } from 'lodash-es'
import type { Transaction, YEvent } from 'yjs'
import { UndoManager, Map as YMap } from 'yjs'
import { VirtualNode } from './node'
import type { Controller } from './controller'
import { Emitter } from './emitter'
export class VirtualDocument<A extends Record<string, any>> extends Emitter {
  blockMap: Map<string, VirtualNode<A>> = new Map()
  controller: Controller
  root: VirtualNode<A>

  data = {} as Record<string, any>

  constructor(initAttrs?: A) {
    super()
    this.root = this.createNode(initAttrs, 'root')
    this.root.level = 0
  }

  get activeNode() {
    return this.get(this.root.attrs.id)
  }

  // 从所有block中找
  get(id: string) {
    return this.blockMap.get(id)
  }

  // bind(controller: Controller) {
  //   this.controller = controller
  //   this.root.bind(this)
  // }

  // 回收不在document中的block，垃圾回收
  clean() {
    this.blockMap.forEach((v, k, m) => {
      if (!v.parent)
        m.delete(k)
    })
  }

  createNode(initAttrs?: A, id?: string) {
    const node = new VirtualNode<A>(initAttrs)

    id && (node.id = id)

    // node.bind(this)
    if (id === 'root')
      this.root = node
    this.blockMap.set(node.id, node)

    this.emit('create', { node })
    return node
  }

  _createNode(initAttrs?: A, id?: string) {
    if (id && this.blockMap.has(id))
      return this.blockMap.get(id)
    const node = new VirtualNode<A>(initAttrs)

    id && (node.id = id)

    node.doc = this

    if (id === 'root')
      this.root = node
    this.blockMap.set(node.id, node)
    this.emit('create', { node })

    return node
  }

  removeNode(node: VirtualNode<A>) {
    if (node.parent) {
      node.parent.remove(node.index!)

      this.blockMap.delete(node.id)
    }
  }

  _removeNode(node: VirtualNode<A>) {
    if (node.parent) {
      node.parent._remove(node.index!)
      this.blockMap.delete(node.id)
    }
    else {
      this.blockMap.delete(node.id)
    }
  }

  load(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this

    function traverse(data: any) {
      const node = that.createNode(data.attrs, data.id)

      data.children.forEach((item: any, i: number) => {
        const child = traverse(item)
        node.insert(child, i)
        // child.parent = node
        // node.children[i] = child
      })
      return node
    }
    if (this.controller) {
      this.controller.ydoc.transact(() => {
        this.root = traverse(data)
      })
    }
    else {
      this.root = traverse(data)
    }
    return this
  }

  transact(cb: (arg?: Transaction) => void, origin?: string) {
    if (this.controller)
      this.controller.ydoc.transact(cb, origin)
  }
}

export function observeDoc(doc: VirtualDocument<any>) {
  const fn: (arg0: YEvent<any>[], arg1: Transaction) => void = (events, t) => {
    let tasks: (() => void)[] = []

    events.forEach((event) => {
      if ((!t.local) || t.origin instanceof UndoManager) {
        // from remote or undoManager
        if (event.changes.keys.size === 0) {
          event.changes.deleted.forEach((item) => {
            const parent = doc.get(event.path[0] as string)!
            const id = item.content.getContent()[0]
            const node = doc.get(id)!
            if (node)
              parent._removeNode(node)
          })
          event.changes.added.forEach((item: any) => {
            const id = item.content.getContent()[0]
            const node = doc.get(id)!

            if (item.left) {
              const left = doc.get(item.left.content.getContent()[0])!

              left.parent!._insert(node, left.index! + 1)
            }
            else {
              const parent = doc.get(event.path[0] as string)

              parent!._insert(node, 0)
            }
          })
        }
        else {
          event.changes.keys.forEach((item, i) => {
            const obj = event.target.get(i)
            switch (item.action) {
              case 'add':
                if (obj instanceof YMap) {
                  if (obj.has('_is_node')) {
                    const attrs = obj.toJSON()

                    const node = doc._createNode(omit(attrs, ['children']), i)

                    if (attrs.children.length) {
                      tasks.push(() => {
                        attrs.children.forEach((k: string, i: number) => {
                          node!._insert(doc.get(k)!, i)
                        })
                      })
                    }
                  }
                  else {
                    const path = [...event.path.slice(1), i].join('.')
                    doc.get(event.path[0] as string)?._set(path, obj.toJSON())
                  }
                }

                else {
                  const path = [...event.path.slice(1), i].join('.')

                  doc.get(event.path[0] as string)?._set(path, obj)
                }

                break
              case 'delete':
                if (item.oldValue instanceof YMap) {
                  doc._removeNode(doc.get(i)!)
                }
                else {
                  const path = [...event.path.slice(1), i].join('.')
                  doc.get(event.path[0] as string)?._set(path, obj)
                }
                break
              case 'update':
                if (obj instanceof YMap) {
                  if (obj.has('_is_node')) {
                    const attrs = obj.toJSON()

                    if (attrs.children.length) {
                      tasks.push(() => {
                        attrs.children.forEach((k: string, i: number) => {
                          doc.get(attrs.id)!._insert(doc.get(k)!, i)
                        })
                      })
                    }
                  }
                  else {
                    doc.get(event.path[0] as string)?._set([...event.path.slice(1), i].join('.')
                      , obj.toJSON())
                  }
                }
                else {
                  doc.get(event.path[0] as string)?._set([...event.path.slice(1), i].join('.')
                    , obj)
                }
            }
          })
        }
        tasks.forEach(task => task())
        tasks = []
      }
    })
  }
  doc.controller.map.observeDeep(fn)
  return () => {
    doc.controller.map.unobserveDeep(fn)
  }
}
