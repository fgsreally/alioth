/* eslint-disable no-case-declarations */
// import { Doc, UndoManager, Array as YArray, Map as YMap } from 'yjs'

import { nanoid } from 'nanoid'
import { cloneDeep } from 'lodash-es'
import type { VirtualNode } from './node'

// export class Controller<MapType = any> {
//   ydoc = new Doc()
//   manager: UndoManager
//   map: YMap<MapType>
//   // origin = 'a-c'// alioth-controller
//   constructor(public options: ConstructorParameters<typeof UndoManager>[1] = {}) {
//     this.map = this.ydoc.getMap('nodes')
//     this.manager = new UndoManager(this.map, this.options)
//   }

//   toJSON() {
//     return this.map.toJSON()
//   }

//   undo() {
//     this.manager.undo()
//   }

//   redo() {
//     this.manager.redo()
//   }

//   create(id: string, data: any) {
//     this.ydoc.transact(() => {
//       const map = traverse({ ...data, id, _is_node: true })
//       // new YMap(Object.entries({ ...data, id, children: new YArray(), _is_node: true }))
//       map.set('children', new YArray())
//       this.map.set(id, map as any)
//     })
//   }

//   insert(parent: string, child: string, index: number) {
//     const arr = (this.map.get(parent) as any).get('children')
//     arr.insert(index, [child])
//   }

//   delete(parent: string, child: string, index: number) {
//     const arr = (this.map.get(parent) as any).get('children') as YArray<string>

//     arr.delete(index, 1)
//     this.map.delete(child)
//   }

//   set(id: string, path: string, value: any) {
//     const map = this.map.get(id) as any
//     const paths = path.split('.')
//     let structure = map
//     const key = paths.pop()

//     paths.forEach((p) => {
//       structure = structure.get(p)
//     })

//     structure.set(key, traverse(value))
//   }
// }

// function traverse(value: any): any {
//   if (Array.isArray(value))
//     return YArray.from(value.map(traverse))

//   if (typeof value === 'object') {
//     const obj = {} as any
//     for (const i in value)
//       obj[i] = traverse(value[i])

//     return new YMap(Object.entries(obj))
//   }
//   return value
// }

interface Options {
  length: number
}
export class Controller {
  options: Options
  undoStack: NodeEvent[] = []
  redoStack: NodeEvent[] = []
  constructor(protected node: VirtualNode<any>, options: Options) {
    function traverseNode(node: VirtualNode<any>): NodeRecord {
      return {
        nodeId: node.id,
        attrs: cloneDeep(node.attrs),
        children: node.children.map(n => traverseNode(n)),
      }
    }

    node.emitter.on('insert', ({ node, parent, index }: any) => {
      this.addEvent({
        ...traverseNode(node),
        parent: parent.id,
        type: 'insert',
        index,
        eventId: nanoid(),
      })
    })

    node.emitter.on('remove', ({ node, parent, index }: any) => {
      this.addEvent({
        ...traverseNode(node),
        parent: parent.id,
        type: 'remove',
        index,
        eventId: nanoid(),
      })
    })

    node.emitter.on('set', ({ node, path, value, oldValue }: any) => {
      this.addEvent({
        path,
        value: cloneDeep(value),
        type: 'set',
        oldValue: cloneDeep(oldValue),
        nodeId: node.id,
        eventId: nanoid(),
      })
    })
  }

  addEvent(event: NodeEvent) {
    if (this.undoStack.length >= this.options.length)
      this.undoStack.shift()

    this.undoStack.push(event)
  }

  undo() {
    const event = this.undoStack.pop()
    if (event) {

    }
  }

  handleEvent(event: NodeEvent) {
    switch (event.type) {
      case 'insert':

        const parentNode = this.node.findById(event.parent)!
        parentNode._remove(parentNode.findById(event.nodeId)!.index!)
        return {
          type: 'remove',
          eventId: event.eventId,
          parent: event.parent,
          nodeId: event.nodeId,
          children: event.children,
          attrs: cloneDeep(event.attrs),
          index: event.index,
        }
      case 'remove':

        return {
          type: 'insert',
          eventId: event.eventId,
          parent: event.parent,
          nodeId: event.nodeId,
          children: event.children,
          attrs: cloneDeep(event.attrs),
          index: event.index,
        }
    }
  }
}

interface BaseEvent {
  nodeId: string
  eventId: string
}

interface NodeRecord {
  attrs: any
  nodeId: string
  children: NodeRecord[]
}

export interface InsertEvent extends BaseEvent {
  type: 'insert'
  index: number
  attrs: any
  children: NodeRecord[]
  parent: string
}

export interface RemoveEvent extends BaseEvent {
  type: 'remove'
  attrs: any
  index: number

  children: NodeRecord[]

  parent: string
}

export interface SetEvent extends BaseEvent {
  type: 'set'
  path: string
  oldValue: any
  value: any

}

export type NodeEvent = SetEvent | InsertEvent | RemoveEvent
