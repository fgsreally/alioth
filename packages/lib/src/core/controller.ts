import { nanoid } from 'nanoid'
import { cloneDeep, isEqual } from 'lodash-es'
import EventEmitter from 'eventemitter3'
import { VirtualNode } from './node'
import type { DocData, VirtualDocument } from './document'

interface Options {
  length: number
}

export class Controller extends EventEmitter {
  options: Options
  undoStack: NodeEvent[] = []
  redoStack: NodeEvent[] = []

  currentEventId: string | undefined
  constructor(public doc: VirtualDocument<any>, options: Partial<Options> = {}) {
    super()
    this.options = {
      length: 300,
      // debounce: 300,
      ...options,
    }

    doc.on('insert', ({ node }: any) => {
      this.redoStack = []
      this.addEvent({
        records: doc.flat(node).map(({ attrs, id, parentId, index }) => {
          return {
            attrs,
            parentId,
            index,
            nodeId: id,
          }
        }),
        type: 'insert',
        eventId: this.currentEventId || nanoid(),
        mode: -1,

      })
    })

    doc.on('swap', ({ node, lastParentId, lastIndex }: any) => {
      this.redoStack = []
      this.addEvent({
        parentId: node.parentId,
        type: 'swap',
        lastParentId,
        index: node.index,
        lastIndex,
        nodeId: node.id,
        eventId: this.currentEventId || nanoid(),
        mode: -1,

      })
    })

    doc.on('load', (data: DocData) => {
      this.redoStack = []
      this.addEvent({
        data,
        type: 'load',
        eventId: this.currentEventId || nanoid(),
        mode: -1,
      })
    })

    doc.on('remove', ({ node }: any) => {
      this.redoStack = []
      this.addEvent({
        mode: -1,

        type: 'remove',
        eventId: this.currentEventId || nanoid(),
        records: doc.flat(node).map(({ attrs, id, parentId, index }) => {
          return {
            attrs,
            parentId,
            index,
            nodeId: id,
          }
        }),
      })
    })

    doc.on('set', ({ node, key, value, oldValue }: any) => {
      this.redoStack = []
      this.addEvent({
        mode: -1,
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

  refresh() {
    this.redoStack = []
    this.undoStack = []
    this.currentEventId = undefined
  }

  transact(cb: () => void) {
    this.currentEventId = nanoid()
    cb()
    this.currentEventId = undefined
  }

  addEvent(event: NodeEvent, stack: 'undoStack' | 'redoStack' = 'undoStack') {
    if (this[stack].length >= this.options.length)
      this[stack].shift()

    this.invokeBridge({ ...event, mode: -event.mode as 1 | -1 })
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
    return applyEventToNode(this.doc, event)
  }

  handleUndoEvent(event: NodeEvent) {
    // switch (event.type) {
    //   case 'insert':
    //     event = {
    //       type: 'remove',
    //       eventId: event.eventId,
    //       records: event.records,
    //     }
    //     break

    //   case 'remove':
    //     event = {
    //       type: 'insert',
    //       eventId: event.eventId,
    //       records: event.records,
    //     }
    //     break
    //   case 'swap':
    //     event = {
    //       type: 'swap',
    //       eventId: event.eventId,
    //       index: event.lastIndex,
    //       lastIndex: event.index,
    //       lastParentId: event.parentId,
    //       parentId: event.lastParentId,
    //       nodeId: event.nodeId,
    //     }
    //     break
    //   case 'set':
    //     event = {
    //       type: 'set',
    //       eventId: event.eventId,
    //       nodeId: event.nodeId,
    //       key: event.key,
    //       value: event.oldValue,
    //       oldValue: event.value,

    //     }
    //     break
    //   case 'load':
    //     event = {
    //       type: 'load',
    //       eventId: event.eventId,
    //       data: event.data,

    //     }
    // }
    const isWork = this.applyEvent(event)!

    this.emit(isWork ? 'success' : 'fail', event)

    return {
      isWork,
      event: {
        ...event,
        mode: -event.mode as 1 | -1,
      },
    }
  }
}

export function applyEventToNode(doc: VirtualDocument, event: NodeEvent) {
  if ((event.type === 'insert' && event.mode === 1) || (event.type === 'remove' && event.mode === -1)) {
    const parentNode = doc.findById(event.records[0].parentId)

    if (!parentNode)
      return false

    event.records.forEach(({ attrs, nodeId, parentId, index }) => {
      const node = new VirtualNode(attrs, nodeId)
      node.parentId = parentId
      node.index = index
      doc.nodeSet.add(node)
    })

    return true
  }

  if ((event.type === 'remove' && event.mode === 1) || (event.type === 'insert' && event.mode === -1)) {
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

    // if (newNode.parentId !== event.lastParentId)
    //   event.lastParentId = newNode.parentId

    // if (newNode.index !== event.lastIndex)
    //   event.lastIndex = newNode.index
    if (event.mode > 0) {
      newNode.parentId = event.parentId
      newNode.index = event.index
    }
    else {
      newNode.parentId = event.lastParentId
      newNode.index = event.lastIndex
    }

    return true
  }

  if (event.type === 'set') {
    const newNode = doc.findById(event.nodeId)

    if (!newNode)
      return false

    newNode.attrs[event.key] = event.mode > 0 ? event.value : event.oldValue

    return true
  }

  if (event.type === 'load') {
    event.data.forEach(({ id, attrs, index, parentId }) => {
      if (event.mode > 0) {
        const node = new VirtualNode(attrs, id)
        node.index = index
        node.parentId = parentId
        node.doc = doc
        doc.nodeSet.add(node)
      }
      else {
        const node = doc.findById(id)
        if (node) {
          doc.nodeSet.delete(node)
          // @ts-expect-error todo
          doc.removeChilds(node)
        }
      }
    })

    return true
  }

  return false
}

interface BaseEvent {
  eventId: string
  mode: -1 | 1
}

interface NodeRecord {
  nodeId: string
  parentId: string
  attrs: any
  index: number
}

export interface LoadEvent extends BaseEvent {
  type: 'load'
  data: DocData
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

export type NodeEvent = SetEvent | InsertEvent | RemoveEvent | SwapEvent | LoadEvent

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
        parentId: n.parentId,
        attrs: n.attrs,
        index: n.index,
      })
    }
    else {
      if (node.index !== n.index || node.parentId !== n.parentId) {
        swapRecords.push({
          nodeId: n.id,
          lastParentId: n.parentId,
          lastIndex: n.index,
          index: node.index,
          parentId: node.parentId,
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
        parentId: n.parentId,
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

    node.parentId = parentId
    node.index = index
  })

  branch2 = branch2.filter(node => removeRecords.find(item => node.id === item.nodeId))

  return { branch: branch1, conflict }
}
