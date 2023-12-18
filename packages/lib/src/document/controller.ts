// import { Doc, UndoManager, Array as YArray, Map as YMap } from 'yjs'

import { nanoid } from 'nanoid'
import { cloneDeep, isEqual } from 'lodash-es'
import { VirtualNode } from './node'

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

  currentEventId: string | undefined
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
        eventId: this.currentEventId || nanoid(),
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
        eventId: this.currentEventId || nanoid(),
      })
    })

    node.emitter.on('remove', ({ node, parent, index }: any) => {
      this.redoStack = []
      this.addEvent({
        ...traverseNode(node),
        parent: parent.id,
        type: 'remove',
        index,
        eventId: this.currentEventId || nanoid(),
      })
    })

    node.emitter.on('set', ({ node, key, value, oldValue }: any) => {
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

  bridge(_event: NodeEvent) {

  }

  transact(cb: () => void) {
    this.currentEventId = nanoid()
    cb()
    this.currentEventId = undefined
  }

  addEvent(event: NodeEvent, stack: 'undoStack' | 'redoStack' = 'undoStack') {
    if (this[stack].length >= this.options.length)
      this[stack].shift()

    this.bridge(event)
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
    return applyEventToNode(this.node, event)
  }

  handleUndoEvent(event: NodeEvent) {
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

export function applyEventToNode(node: VirtualNode, event: NodeEvent) {
  if (event.type === 'insert') {
    const parentNode = node.findById(event.parent)
    if (!parentNode)
      return false

    const newNode = new VirtualNode(event.attrs, event.nodeId)
    parentNode._insert(newNode, event.index)
    event.children.forEach((r) => {
      insertToNode(newNode, r)
    })
    return true
  }

  if (event.type === 'remove') {
    const parentNode = node.findById(event.parent)!

    if (!parentNode)
      return false
    const newNode = parentNode.findById(event.nodeId)

    if (!newNode)
      return false
    parentNode._remove(newNode.index!)
    return true
  }
  if (event.type === 'swap') {
    const newNode = node.findById(event.nodeId)
    if (!newNode)
      return false

    newNode._swap(node.index!, event.to)
    return true
  }

  if (event.type === 'set') {
    const newNode = node.findById(event.nodeId)
    if (!newNode)
      return false

    newNode._set(event.key, event.value)

    return true
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
  key: string
  oldValue: any
  value: any
}

export type NodeEvent = SetEvent | InsertEvent | RemoveEvent | SwapEvent

export function diff(node1: VirtualNode, node2: VirtualNode): NodeEvent[] {
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
          key,
          oldValue: n.attrs[key],
          value: n2.attrs[key],
        })
      }
    }
    events.push(...diff(n, n2))
  })

  return events
}

export function merge(commit: VirtualNode, branch1: VirtualNode, branch2: VirtualNode) {
  if (!(commit.id === branch1.id && branch1.id === branch2.id))
    throw new Error('node id must be the same in merging')
  const diffEvents = diff(commit, branch2)
  const conflict = [] as NodeEvent[]

  diffEvents.forEach((e) => {
    if (e.type === 'set') {
      const node = branch1.findById(e.eventId)
      if (node && node.attrs[e.key] !== e.value) {
        conflict.push(e)

        return
      }
    }

    if (!applyEventToNode(branch1, e))
      conflict.push(e)
  })

  return conflict
}
