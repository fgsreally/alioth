// import { Doc, UndoManager, Array as YArray, Map as YMap } from 'yjs'

import { nanoid } from 'nanoid'
import { cloneDeep, isEqual, set } from 'lodash-es'
import { VirtualNode } from './node'

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

function traverseNode(node: VirtualNode<any>): NodeRecord {
  return {
    nodeId: node.id,
    attrs: cloneDeep(node.attrs),
    children: node.children.map(n => traverseNode(n)),
  }
}

export class Controller {
  options: Options
  undoStack: NodeEvent[] = []
  redoStack: NodeEvent[] = []
  constructor(protected node: VirtualNode<any>, options: Partial<Options> = {}) {
    this.options = {
      length: 300,
      ...options,
    }

    node.emitter.on('insert', ({ node, parent, index }: any) => {
      this.redoStack = []
      this.addEvent({
        ...traverseNode(node),
        parent: parent.id,
        type: 'insert',
        index,
        eventId: nanoid(),
      })
    })

    node.emitter.on('swap', ({ node, from, to, parent }: any) => {
      this.redoStack = []
      this.addEvent({
        parent: parent.id,
        type: 'swap',
        from,
        to,
        nodeId: node.id,
        eventId: nanoid(),
      })
    })

    node.emitter.on('remove', ({ node, parent, index }: any) => {
      this.redoStack = []
      this.addEvent({
        ...traverseNode(node),
        parent: parent.id,
        type: 'remove',
        index,
        eventId: nanoid(),
      })
    })

    node.emitter.on('set', ({ node, path, value, oldValue }: any) => {
      this.redoStack = []
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

  bridge(_event: NodeEvent) {

  }

  addEvent(event: NodeEvent, stack: 'undoStack' | 'redoStack' = 'undoStack') {
    console.log(event)
    if (this[stack].length >= this.options.length)
      this[stack].shift()

    this.bridge(event)
    this[stack].push(event)
  }

  undo() {
    const event = this.undoStack.pop()

    if (event)

      this.addEvent(this.handleUndoEvent(event), 'redoStack')

    return !!event
  }

  redo() {
    const event = this.redoStack.pop()
    if (event)
      this.addEvent(this.handleUndoEvent(event), 'undoStack')
    return !!event
  }

  applyEvent(event: NodeEvent) {
    if (event.type === 'insert') {
      const parentNode = this.node.findById(event.parent)!
      const newNode = new VirtualNode(event.attrs)
      newNode.id = event.nodeId
      parentNode._insert(newNode, event.index)
      event.children.forEach((r) => {
        insertToNode(newNode, r)
      })
      return
    }

    if (event.type === 'remove') {
      const parentNode = this.node.findById(event.parent)!

      parentNode._remove(parentNode.findById(event.nodeId)!.index!)
      return
    }
    if (event.type === 'swap') {
      const node = this.node.findById(event.nodeId)!
      node._swap(node.index!, event.to)
      return
    }

    if (event.type === 'set') {
      const node = this.node.findById(event.nodeId)!
      node._set(event.path, event.value)
    }
  }

  handleUndoEvent(event: NodeEvent): NodeEvent {
    switch (event.type) {
      case 'insert':
        event = {
          type: 'remove',
          eventId: event.eventId,
          parent: event.parent,
          nodeId: event.nodeId,
          children: event.children,
          attrs: cloneDeep(event.attrs),
          index: event.index,
        }
        break

      case 'remove':
        event = {
          type: 'insert',
          eventId: event.eventId,
          parent: event.parent,
          nodeId: event.nodeId,
          children: event.children,
          attrs: cloneDeep(event.attrs),
          index: event.index,
        }
        break
      case 'swap':
        event = {
          type: 'swap',
          eventId: event.eventId,
          from: event.to,
          to: event.from,
          parent: event.parent,
          nodeId: event.nodeId,
        }
        break
      case 'set':
        event = {
          type: 'set',
          eventId: event.eventId,
          nodeId: event.nodeId,
          path: event.path,
          value: event.oldValue,
          oldValue: event.value,

        }
    }

    this.applyEvent(event)
    return event
  }
}

function insertToNode(parent: VirtualNode<any>, record: NodeRecord) {
  const newNode = new VirtualNode(record.attrs)
  newNode.id = record.nodeId
  parent._insert(newNode)
  record.children.forEach(r => insertToNode(newNode, r))
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

export interface SwapEvent extends BaseEvent {
  type: 'swap'
  from: number
  to: number
  parent: string
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

export type NodeEvent = SetEvent | InsertEvent | RemoveEvent | SwapEvent

export function diff(node1: VirtualNode<any>, node2: VirtualNode<any>): NodeEvent[] {
  const events = [] as NodeEvent[]
  const oldNodes1 = [] as VirtualNode[]
  const oldNodes2 = [] as VirtualNode[]
  if (node1.id !== node2.id)
    throw new Error('node1 and node2 should have the same id to diff')

  for (const n of node1.children) {
    const node = node2.children.find(item => item.id === n.id)
    if (!node) {
      events.push({
        ...traverseNode(n),
        parent: node1.id,
        type: 'remove',
        index: n.index,
        eventId: nanoid(),
      } as RemoveEvent)
    }
    else {
      oldNodes1.push(n)
    }
  }

  for (const n of node2.children) {
    const node = node1.children.find(item => item.id === n.id)

    if (!node) {
      events.push({
        ...traverseNode(n),
        parent: node1.id,
        type: 'insert',
        index: n.index,
        eventId: nanoid(),
      } as InsertEvent)
    }
    else {
      oldNodes2.push(n)
    }
  }

  oldNodes1.forEach((n, i) => {
    const index = oldNodes2.findIndex(n2 => n2.id === n.id)!
    if (index !== i) {
      events.push({
        type: 'swap',
        from: i,
        to: index,
        nodeId: n.id,
        eventId: nanoid(),
        parent: node1.id,
      })
    }
    const n2 = oldNodes2[index]
    for (const key in n.attrs) {
      if (!isEqual(n.attrs[key], n2.attrs[key])) {
        events.push({
          nodeId: n.id,
          eventId: nanoid(),
          type: 'set',
          path: key,
          oldValue: n.attrs[key],
          value: n2.attrs[key],
        })
      }
    }
    events.push(...diff(n, n2))
  })

  return events
}
