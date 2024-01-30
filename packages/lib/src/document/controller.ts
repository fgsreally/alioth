import { nanoid } from 'nanoid'
import { cloneDeep, isEqual } from 'lodash-es'
import EventEmitter from 'eventemitter3'
import { VirtualNode } from './document'
import type { VirtualDocument } from './document'

interface Options {
  length: number
}

export class Controller extends EventEmitter {
  options: Options
  undoStack: NodeEvent[] = []
  redoStack: NodeEvent[] = []

  currentEventId: string | undefined
  constructor(protected doc: VirtualDocument<any>, options: Partial<Options> = {}) {
    super()
    this.options = {
      length: 300,
      ...options,
    }

    doc.on('insert', ({ node }: any) => {
      this.redoStack = []
      this.addEvent({
        records: doc.flat(node).map(({ attrs, id, parent, index }) => {
          return {
            attrs,
            parentId: parent,
            index,
            nodeId: id,
          }
        }),
        type: 'insert',
        eventId: this.currentEventId || nanoid(),
      })
    })

    doc.on('swap', ({ node, lastParentId, lastIndex }: any) => {
      this.redoStack = []
      this.addEvent({
        parentId: node.parent,
        type: 'swap',
        lastParentId,
        index: node.index,
        lastIndex,
        nodeId: node.id,
        eventId: this.currentEventId || nanoid(),
      })
    })

    doc.on('remove', ({ node }: any) => {
      this.redoStack = []
      this.addEvent({
        type: 'remove',
        eventId: this.currentEventId || nanoid(),
        records: doc.flat(node).map(({ attrs, id, parent, index }) => {
          return {
            attrs,
            parentId: parent,
            index,
            nodeId: id,
          }
        }),
      })
    })

    doc.on('set', ({ node, key, value, oldValue }: any) => {
      this.redoStack = []
      this.addEvent({
        key,
        value: cloneDeep(value),
        type: 'set',
        oldValue: cloneDeep(oldValue),
        nodeId: node.id,
        eventId: this.currentEventId || nanoid(),
      })
    })
  }

  invokeBridge(_event: NodeEvent) {

  }

  transact(cb: () => void) {
    this.currentEventId = nanoid()
    cb()
    this.currentEventId = undefined
  }

  addEvent(event: NodeEvent, stack: 'undoStack' | 'redoStack' = 'undoStack') {
    if (this[stack].length >= this.options.length)
      this[stack].shift()

    this.invokeBridge(event)
    this[stack].push(event)
  }

  undo() {
    const event = this.undoStack.pop()

    if (event) {
      const { event: newEvent, isWork } = this.handleUndoEvent(event)

      this.addEvent(newEvent, 'redoStack')

      if (this.undoStack[this.undoStack.length - 1]?.eventId === event.eventId)
        this.undo()

      return isWork
    }

    return false
  }

  redo() {
    const event = this.redoStack.pop()
    if (event) {
      const { event: newEvent, isWork } = this.handleUndoEvent(event)

      this.addEvent(newEvent, 'undoStack')
      if (this.undoStack[this.redoStack.length - 1]?.eventId === event.eventId)
        this.redo()

      return isWork
    }
    return false
  }

  applyEvent(event: NodeEvent) {
    if (!applyEventToNode(this.doc, event))
      this.emit('error', event)
    else this.emit('success', event)
  }

  handleUndoEvent(event: NodeEvent) {
    switch (event.type) {
      case 'insert':
        event = {
          type: 'remove',
          eventId: event.eventId,
          records: event.records,
        }
        break

      case 'remove':
        event = {
          type: 'insert',
          eventId: event.eventId,
          records: event.records,
        }
        break
      case 'swap':
        event = {
          type: 'swap',
          eventId: event.eventId,
          index: event.lastIndex,
          lastIndex: event.index,
          lastParentId: event.parentId,
          parentId: event.lastParentId,
          nodeId: event.nodeId,
        }
        break
      case 'set':
        event = {
          type: 'set',
          eventId: event.eventId,
          nodeId: event.nodeId,
          key: event.key,
          value: event.oldValue,
          oldValue: event.value,

        }
    }

    return {
      isWork: this.applyEvent(event)!,
      event,
    }
  }
}

export function applyEventToNode(doc: VirtualDocument, event: NodeEvent) {
  if (event.type === 'insert') {
    const parentNode = doc.findById(event.records[0].parentId)

    if (!parentNode)
      return false

    event.records.forEach(({ attrs, nodeId, parentId, index }) => {
      const node = new VirtualNode(attrs, nodeId)
      node.parent = parentId
      node.index = index
      doc.nodeSet.add(node)
    })

    return true
  }

  if (event.type === 'remove') {
    const parentNode = doc.findById(event.records[0].parentId)

    if (!parentNode)
      return false
    const newNode = doc.findById(event.records[0].nodeId)
    if (!newNode)
      return false

    event.records.forEach(({ nodeId }) => {
      const node = doc.findById(nodeId)!
      node && doc.nodeSet.delete(node)
    })

    return true
  }
  if (event.type === 'swap') {
    const parentNode = doc.findById(event.parentId)!

    const newNode = doc.findById(event.nodeId)
    if (!newNode || !parentNode)
      return false

    newNode.parent = event.parentId
    newNode.index = event.index

    return true
  }

  if (event.type === 'set') {
    const newNode = doc.findById(event.nodeId)

    if (!newNode)
      return false

    const currentAttr = newNode.attrs[event.key]
    if (!isEqual(currentAttr, event.oldValue))
      event.oldValue = cloneDeep(currentAttr)

    newNode.attrs[event.key] = event.value

    return true
  }

  return false
}

interface BaseEvent {
  eventId: string
}

interface NodeRecord {
  nodeId: string
  parentId: string
  attrs: any
  index: number
}

export interface SwapEvent extends BaseEvent {
  type: 'swap'
  nodeId: string

  lastParentId: string
  lastIndex: number
  index: number
  parentId: string
}

export interface InsertEvent extends BaseEvent {
  type: 'insert'
  records: NodeRecord[]

}

export interface RemoveEvent extends BaseEvent {
  type: 'remove'

  records: NodeRecord[]
}

export interface SetEvent extends BaseEvent {
  type: 'set'
  nodeId: string

  key: string
  oldValue: any
  value: any
}

export type NodeEvent = SetEvent | InsertEvent | RemoveEvent | SwapEvent

// export function diff(nodes1: VirtualNode[], nodes2: VirtualNode[]): NodeEvent[] {
//   const events = [] as NodeEvent[]
//   const oldNodes1 = [] as VirtualNode[]
//   const oldNodes2 = [] as VirtualNode[]
//   if (node1.id !== node2.id)
//     throw new Error('node1 and node2 should have the same id to diff')

//   for (const n of node1.children) {
//     const node = node2.children.find(item => item.id === n.id)
//     if (!node) {
//       events.push({
//         ...traverseNode(n),
//         parentId: node1.id,
//         type: 'remove',
//         index: n.index,
//         eventId: nanoid(),
//       } as RemoveEvent)
//     }
//     else {
//       oldNodes1.push(n)
//     }
//   }

//   for (const n of node2.children) {
//     const node = node1.children.find(item => item.id === n.id)

//     if (!node) {
//       events.push({
//         ...traverseNode(n),
//         parentId: node1.id,
//         type: 'insert',
//         index: n.index,
//         eventId: nanoid(),
//       } as InsertEvent)
//     }
//     else {
//       oldNodes2.push(n)
//     }
//   }

//   oldNodes1.forEach((n, i) => {
//     const index = oldNodes2.findIndex(n2 => n2.id === n.id)!
//     if (index !== i) {
//       events.push({
//         type: 'swap',
//         from: i,
//         to: index,
//         nodeId: n.id,
//         eventId: nanoid(),
//         parentId: node1.id,
//       })
//     }
//     const n2 = oldNodes2[index]
//     for (const key in n.attrs) {
//       if (!isEqual(n.attrs[key], n2.attrs[key])) {
//         events.push({
//           nodeId: n.id,
//           eventId: nanoid(),
//           type: 'set',
//           key,
//           oldValue: n.attrs[key],
//           value: n2.attrs[key],
//         })
//       }
//     }
//     events.push(...diff(n, n2))
//   })

//   return events
// }

export function diff(nodes1: VirtualNode[], nodes2: VirtualNode[]) {
  const removeRecords = [] as NodeRecord[]
  const insertRecords = [] as NodeRecord[]
  const swapRecords = [] as {
    nodeId: string
    lastParentId: string
    lastIndex: number
    index: number
    parentId: string
  }[]

  const setRecords = [] as {
    nodeId: string
    key: string
    oldValue: any
    value: any
  }[]

  for (const n of nodes1) {
    const node = nodes2.find(node => node.id === n.id)
    if (!node) {
      removeRecords.push({
        nodeId: n.id,
        parentId: n.parent,
        attrs: n.attrs,
        index: n.index,
      })
    }
    else {
      if (node.index !== n.index || node.parent !== n.parent) {
        swapRecords.push({
          nodeId: n.id,
          lastParentId: n.parent,
          lastIndex: n.index,
          index: node.index,
          parentId: node.parent,
        })
      }

      for (const key in n.attrs) {
        if (!isEqual(n.attrs[key], node.attrs[key])) {
          setRecords.push({
            key,
            nodeId: n.id,
            oldValue: n.attrs[key],
            value: node.attrs[key],
          })
        }
      }
    }
  }
  for (const n of nodes2) {
    const node = nodes1.find(node => node.id === n.id)
    if (!node) {
      insertRecords.push({
        nodeId: n.id,
        parentId: n.parent,
        attrs: n.attrs,
        index: n.index,
      })
    }
  }
  return {
    insertRecords,
    removeRecords,
    swapRecords,
    setRecords,
  }
}

export function merge(base: VirtualNode[], branch1: VirtualNode[], branch2: VirtualNode[]) {
  const {
    insertRecords,
    removeRecords,
    swapRecords,
    setRecords,
  } = diff(base, branch2)
  const conflict = [] as any[]

  const newBranch = cloneDeep(branch1.filter(node => removeRecords.find(item => node.id === item.nodeId)))

  insertRecords.forEach((record) => {
    const { nodeId, parentId } = record
    const newNode = branch2.find(item => item.id === nodeId)!
    const parent = newBranch.find(item => item.id === parentId)

    if (parent)
      newBranch.push(newNode)
    else
      conflict.push(record)
  })
  setRecords.forEach((record) => {
    const { nodeId, key, value, oldValue } = record
    const node = newBranch.find(node => node.id === nodeId)!
    if (isEqual(oldValue, node.attrs[key]))
      node.attrs[key] = value

    else
      conflict.push(record)
  })

  swapRecords.forEach(({ nodeId, parentId, index }) => {
    const node = newBranch.find(node => node.id === nodeId)!

    //     const parent = newBranch.find(item => item.id === parentId)
    // if(!parent){
    //   conf
    // }
    node.parent = parentId
    node.index = index
  })

  branch2 = branch2.filter(node => removeRecords.find(item => node.id === item.nodeId))

  return { branch: branch1, conflict }
}
