// import { describe, expect, it } from 'vitest'
// import { applyUpdate } from 'yjs'
// import { VirtualDocument, observeDoc } from '../src/document/document'
// import { Controller } from '../src/document/controller'

import { describe, expect, it } from 'vitest'
import type { NodeEvent } from '../src/document'
import { Controller, VirtualNode, diff } from '../src/document'
import { Emitter } from '../src/document/emitter'

// describe('controller [yjs]', () => {
//   it('base', () => {
//     const c = new Controller({
//       captureTimeout: 0,
//     })
//     c.create('0', {
//       key: 'root',
//     })
//     c.create('1', {
//       key: 'test',
//     })
//     c.insert('0', '1', 0)
//     c.set('1', 'key', 'fgs')

//     c.undo()
//     expect(c.map.get('1').get('key')).toBe('test')

//     c.undo()
//     expect(c.map.get('0').get('children').length).toBe(0)
//     c.redo()
//     expect(c.map.get('0').get('children').length).toBe(1)
//     c.delete('0', '1', 0)
//     expect(c.map.get('0').get('children').length).toBe(0)

//     c.undo()
//     expect(c.map.get('0').get('children').length).toBe(1)
//   })

//   it('deep', () => {
//     const c = new Controller({
//       captureTimeout: 0,
//     })
//     c.create('0', {
//       key: 'root',
//     })

//     c.set('0', 'a', { b: { c: 3 } })

//     expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
//     expect(c.map.get('0').get('key')).toBe('root')

//     c.undo()
//     expect(c.map.get('0').has('a')).toBe(false)
//     c.redo()
//     expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
//     c.set('0', 'a.b.c', 4)
//     expect(c.map.get('0').get('a').get('b').get('c')).toBe(4)
//     c.undo()
//     expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)

//     c.set('0', 'a', [{ b: { c: 3 } }])
//     expect(c.map.get('0').get('a').get(0).get('b').get('c')).toBe(3)

//     c.undo()
//     expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
//   })
//   it('controller sync', () => {
//     const c = new Controller({
//       captureTimeout: 0,
//     })
//     const c2 = new Controller({
//       captureTimeout: 0,
//     })
//     c.ydoc.on('update', (update) => {
//       applyUpdate(c2.ydoc, update)
//     })

//     c2.ydoc.on('update', (update) => {
//       applyUpdate(c.ydoc, update)
//     })

//     c.create('1', {
//       key: 'test',
//     })

//     expect(c.map.has('1')).toBeTruthy()

//     c.undo()
//     expect(c.map.has('1')).toBeFalsy()
//   })

//   it('undo/redo with controller', () => {
//     const doc = new VirtualDocument()
//     const c = new Controller({
//       captureTimeout: 0,

//     })
//     doc.bind(c)
//     observeDoc(doc)

//     const node = doc.createNode({ name: 'a' })

//     doc.root.insert(node)
//     expect(doc.root.children.length).toBe(1)
//     node.set('name', 'b')

//     c.undo()

//     expect(node.attrs.name).toBe('a')

//     c.undo()
//     expect(doc.root.children.length).toBe(0)
//     c.redo()
//     expect(doc.root.children.length).toBe(1)
//   })
//   it('sync data by yjs', () => {
//     const c = new Controller({
//       captureTimeout: 0,
//     })
//     const c2 = new Controller({
//       captureTimeout: 0,
//     })
//     const doc1 = new VirtualDocument()
//     const doc2 = new VirtualDocument()

//     c.ydoc.on('update', (update) => {
//       applyUpdate(c2.ydoc, update)
//     })

//     c2.ydoc.on('update', (update) => {
//       applyUpdate(c.ydoc, update)
//     })
//     doc1.bind(c)

//     doc2.bind(c2)
//     observeDoc(doc1)

//     observeDoc(doc2)

//     const node = doc1.createNode()

//     doc1.root.insert(node)
//     doc1.root.insert(doc1.createNode(), 1)
//     expect(doc2.blockMap.size).toBe(3)
//     expect(doc2.root.children.length).toBe(2)
//     node.set('config', { alioth: true })
//     node.set('config.alioth', false)
//     expect(doc2.get(node.id)!.attrs.config.alioth).toBe(false)

//     c.undo()
//     expect(doc2.get(node.id)!.attrs.config.alioth).toBe(true)

//     node.set('config.alioth', { a: { b: { c: 1 } } })
//     expect(doc2.get(node.id)!.attrs.config.alioth.a.b.c).toBe(1)

//     node.set('config.alioth.a.b.c', 2)
//     expect(doc2.get(node.id)!.attrs.config.alioth.a.b.c).toBe(2)
//     c.undo()
//     expect(doc2.get(node.id)!.attrs.config.alioth.a.b.c).toBe(1)
//     c.redo()
//     expect(doc2.get(node.id)!.attrs.config.alioth.a.b.c).toBe(2)

//     doc1.removeNode(node)

//     expect(doc2.root.children.length).toBe(1)
//     expect(doc2.blockMap.size).toBe(2)

//     c.undo()
//     expect(doc2.root.children.length).toBe(2)
//     expect(doc2.blockMap.size).toBe(3)

//     c.redo()
//     expect(doc2.root.children.length).toBe(1)
//     expect(doc2.blockMap.size).toBe(2)

//     doc2.createNode()
//     expect(doc1.blockMap.size).toBe(3)
//     c2.undo()
//     expect(doc1.blockMap.size).toBe(2)
//   })
//   it('swap node', () => {
//     const doc = new VirtualDocument()
//     const c = new Controller({
//       captureTimeout: 0,
//     })
//     doc.bind(c)
//     observeDoc(doc)
//     const node1 = doc.createNode()
//     const node2 = doc.createNode()

//     doc.root.insert(node1)
//     doc.root.insert(node2)
//     doc.controller.ydoc.transact(() => {
//       doc.removeNode(node1)
//       node2.insert(doc.createNode(node1.attrs, node1.id))
//     })
//     expect(doc.blockMap.size).toBe(3)
//     expect(doc.root.children.length).toBe(1)
//     expect(node2.children.length).toBe(1)
//     c.undo()
//     expect(node2.children.length).toBe(0)

//     expect(doc.root.children.length).toBe(2)
//     c.redo()
//     expect(node2.children.length).toBe(1)
//     expect(doc.root.children.length).toBe(1)
//   })
// })

describe('controller', () => {
  const node = new VirtualNode({ test: 'a' }, '1')
  node.isRoot = true
  const c = new Controller(node)
  const child1 = new VirtualNode({ test: 'b' }, '2')
  const child2 = new VirtualNode({ test: 'c' }, '3')
  const child3 = new VirtualNode({ test: 'd' }, '4')

  it('undo/redo', () => {
    child1.insert(child3)
    node.insert(child1)
    node.insert(child2)
    child1.set('test', 'test1')

    child1.remove(child3)

    child1.swap(1)

    // stack length
    expect(c.undoStack.length).toBe(5)

    expect(child1.index).toBe(1)
    c.undo()
    expect(child1.index).toBe(0)

    expect(child1.children.length).toBe(0)
    c.undo()
    expect(child1.children.length).toBe(1)

    expect(child1.attrs.test).toBe('test1')
    c.undo()
    expect(child1.attrs.test).toBe('b')

    expect(node.children.length).toBe(2)
    c.undo()
    expect(node.children.length).toBe(1)

    expect(c.redoStack.length).toBe(4)

    c.redo()
    expect(node.children.length).toBe(2)

    c.redo()
    expect(child1.attrs.test).toBe('test1')

    c.redo()
    expect(child1.children.length).toBe(0)

    c.redo()

    expect(child1.index).toBe(1)
    expect(c.redoStack.length).toBe(0)
  })

  it('diff', () => {
    const cloneNode = node.clone()
    cloneNode.children[0].insert(child3)
    cloneNode.children[0].set('test', 'test3')

    cloneNode.children[0].swap(1)

    const event1 = diff(node, cloneNode)
    expect(event1.map((item) => {
      // @ts-expect-error delete
      delete item.eventId
      return item
    })).toMatchSnapshot()

    cloneNode.remove(cloneNode.children[1])

    const event2 = diff(node, cloneNode)
    expect(event2.map((item) => {
      // @ts-expect-error delete
      delete item.eventId
      return item
    })).toMatchSnapshot()
  })

  it('sync', () => {
    const node1 = new VirtualNode({ test: 'a' }, '1')
    const node2 = node1.clone()
    node1.isRoot = true
    node2.isRoot = true
    const c1 = new Controller(node1)
    const c2 = new Controller(node2)

    c1.bridge = (e) => {
      c2.applyEvent(e)
    }

    c2.bridge = (e) => {
      c1.applyEvent(e)
    }

    const child1 = new VirtualNode({ test: 'b' }, '2')
    node1.insert(child1)
    expect(node2.children.length).toBe(1)
    const child2 = new VirtualNode({ test: 'c' }, '3')
    node2.insert(child2)
    expect(node1.children.length).toBe(2)

    c1.undo()

    expect(node2.children.length).toBe(1)
    expect(node2.children[0].id).toBe('3')

    node2.remove(child2)
    expect(node1.children.length).toBe(0)
    c2.undo()
    expect(node1.children.length).toBe(1)
  })
})
