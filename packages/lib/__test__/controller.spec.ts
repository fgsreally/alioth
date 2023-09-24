import { describe, expect, it } from 'vitest'
import { applyUpdate } from 'yjs'
import { VirtualDocument, observeDoc } from '../src/document/document'
import { Controller } from '../src/document/controller'

describe('controller [yjs]', () => {
  it('base', () => {
    const c = new Controller({
      captureTimeout: 0,
    })
    c.create('0', {
      key: 'root',
    })
    c.create('1', {
      key: 'test',
    })
    c.insert('0', '1', 0)
    c.set('1', 'key', 'fgs')

    c.undo()
    expect(c.map.get('1').get('key')).toBe('test')

    c.undo()
    expect(c.map.get('0').get('children').length).toBe(0)
    c.redo()
    expect(c.map.get('0').get('children').length).toBe(1)
    c.delete('0', '1', 0)
    expect(c.map.get('0').get('children').length).toBe(0)

    c.undo()
    expect(c.map.get('0').get('children').length).toBe(1)
  })

  it('deep', () => {
    const c = new Controller({
      captureTimeout: 0,
    })
    c.create('0', {
      key: 'root',
    })

    c.set('0', 'a', { b: { c: 3 } })

    expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
    expect(c.map.get('0').get('key')).toBe('root')

    c.undo()
    expect(c.map.get('0').has('a')).toBe(false)
    c.redo()
    expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
    c.set('0', 'a.b.c', 4)
    expect(c.map.get('0').get('a').get('b').get('c')).toBe(4)
    c.undo()
    expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)

    c.set('0', 'a', [{ b: { c: 3 } }])
    expect(c.map.get('0').get('a').get(0).get('b').get('c')).toBe(3)

    c.undo()
    expect(c.map.get('0').get('a').get('b').get('c')).toBe(3)
  })
  it('controller sync', () => {
    const c = new Controller({
      captureTimeout: 0,
    })
    const c2 = new Controller({
      captureTimeout: 0,
    })
    c.ydoc.on('update', (update) => {
      applyUpdate(c2.ydoc, update)
    })

    c2.ydoc.on('update', (update) => {
      applyUpdate(c.ydoc, update)
    })

    c.create('1', {
      key: 'test',
    })

    expect(c.map.has('1')).toBeTruthy()

    c.undo()
    expect(c.map.has('1')).toBeFalsy()
  })

  it('undo/redo with controller', () => {
    const doc = new VirtualDocument()
    const c = new Controller({
      captureTimeout: 0,

    })
    doc.bind(c)
    observeDoc(doc)

    const node = doc.createNode({ name: 'a' })

    doc.root.insert(node)
    expect(doc.root.children.length).toBe(1)
    node.set('name', 'b')

    c.undo()

    expect(node.attrs.name).toBe('a')

    c.undo()
    expect(doc.root.children.length).toBe(0)
    c.redo()
    expect(doc.root.children.length).toBe(1)
  })
  it('sync data by yjs', () => {
    const c = new Controller({
      captureTimeout: 0,
    })
    const c2 = new Controller({
      captureTimeout: 0,
    })
    const doc1 = new VirtualDocument()
    const doc2 = new VirtualDocument()

    c.ydoc.on('update', (update) => {
      applyUpdate(c2.ydoc, update)
    })

    c2.ydoc.on('update', (update) => {
      applyUpdate(c.ydoc, update)
    })
    doc1.bind(c)

    doc2.bind(c2)
    observeDoc(doc1)

    observeDoc(doc2)

    const node = doc1.createNode()

    doc1.root.insert(node)
    doc1.root.insert(doc1.createNode(), 1)
    expect(doc2.blockMap.size).toBe(3)
    expect(doc2.root.children.length).toBe(2)
    node.set('config', { alioth: true })
    node.set('config.alioth', false)
    console.log(node.attrs.config)
    expect(doc2.get(node.id)!.attrs.config.alioth).toBe(false)

    // c.undo()
    // expect(doc2.get(node.id)!.attrs.config.alioth).toBe(true)
    // c.undo()
    // expect(doc2.get(node.id)!.attrs.name).toBe('alioth')

    // doc1.removeNode(node)

    // expect(doc2.root.children.length).toBe(1)
    // expect(doc2.blockMap.size).toBe(2)

    // c.undo()
    // expect(doc2.root.children.length).toBe(2)
    // expect(doc2.blockMap.size).toBe(3)

    // c.redo()
    // expect(doc2.root.children.length).toBe(1)
    // expect(doc2.blockMap.size).toBe(2)

    // doc2.createNode()
    // expect(doc1.blockMap.size).toBe(3)
    // c2.undo()
    // expect(doc1.blockMap.size).toBe(2)
  })
})
