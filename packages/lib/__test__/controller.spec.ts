import { describe, expect, it } from 'vitest'
import { cloneDeep } from 'lodash-es'
import { Controller, VirtualDocument, VirtualNode, diff } from '../src/document'

describe('controller', () => {
  it('undo/redo', () => {
    const doc = new VirtualDocument()

    const c = new Controller(doc)
    const node1 = new VirtualNode({ id: '1' }, '1')
    const node2 = new VirtualNode({ id: '2' }, '2')
    const node3 = new VirtualNode({ id: '3' }, '3')
    doc.insert(node1, doc.root)
    doc.insert(node2, node1)
    doc.insert(node3, node1)

    doc.set(node1, 'id', 'test1')

    expect(doc.nodeSet.size).toBe(3)

    doc.remove(node1)

    expect(doc.findChildrens(doc.root).length).toBe(0)

    c.undo()
    expect(doc.nodes.length).toBe(3)

    c.undo()
    expect(node1.attrs.id).toBe('1')

    c.undo()
    expect(doc.findChildrens(node1).length).toBe(1)

    expect(c.redoStack.length).toBe(3)

    c.redo()
    expect(doc.findChildrens(node1).length).toBe(2)

    c.redo()
    expect(node1.attrs.id).toBe('test1')

    c.redo()
    expect(c.redoStack.length).toBe(0)
  })

  it('diff', () => {
    const doc = new VirtualDocument()
    const node1 = new VirtualNode({ id: '1' }, '1')
    const node2 = new VirtualNode({ id: '2' }, '2')
    const node3 = new VirtualNode({ id: '3' }, '3')
    const node4 = new VirtualNode({ id: '4' }, '4')
    const node5 = new VirtualNode({ id: '5' }, '5')

    doc.insert(node1, doc.root)
    doc.insert(node2, doc.root)
    doc.insert(node3, doc.root)
    doc.insert(node4, node3)

    const doc2 = new VirtualDocument()

    doc2.load(cloneDeep(doc.store()))

    doc.insert(node5, node1) // insert

    doc.insert(node2, node1)// swap

    doc.set(node1, 'id', 'test1')// set

    doc.remove(node3)// remove

    expect(diff(doc2.nodes, doc.nodes)).toMatchSnapshot()
  })

  it('sync', () => {
    const doc = new VirtualDocument()
    const node1 = new VirtualNode({ id: '1' }, '1')
    const node2 = new VirtualNode({ id: '2' }, '2')
    const node3 = new VirtualNode({ id: '3' }, '3')
    const node4 = new VirtualNode({ id: '4' }, '4')
    const node5 = new VirtualNode({ id: '5' }, '5')
    const node6 = new VirtualNode({ id: '6' }, '6')

    doc.insert(node1, doc.root)
    doc.insert(node2, doc.root)
    doc.insert(node3, doc.root)
    doc.insert(node4, node3)

    const doc2 = new VirtualDocument()

    doc2.load(cloneDeep(doc.store()))
    const c1 = new Controller(doc)
    const c2 = new Controller(doc2)

    c1.invokeBridge = (e) => {
      c2.applyEvent(e)
    }

    c2.invokeBridge = (e) => {
      c1.applyEvent(e)
    }

    // doc1 action
    doc.insert(node5, doc.root)
    expect(doc2.findChildrens(doc2.root).length).toBe(4)
    doc.insert(node2, node1)

    expect(doc2.findChildrens(doc2.root).length).toBe(3)
    // console.log(doc2.nodes)
    expect(doc2.findChildrens(doc2.findById('1')!).length).toBe(1)

    doc.set(node1, 'id', 'test1')
    expect(doc2.findById('1')!.attrs.id).toBe('test1')

    doc.remove(node3)
    expect(doc2.nodes.length).toBe(3)

    // doc2 action
    doc2.insert(node6, doc2.root)

    expect(doc.findChildrens(doc.root).length).toBe(3)

    c1.undo()

    expect(doc2.nodes.length).toBe(6)

    c1.undo()

    expect(doc2.findById('1')!.attrs.id).toBe('1')
    c1.undo()
    expect(doc2.findChildrens(node1).length).toBe(0)
    expect(doc2.findChildrens(doc2.root).length).toBe(5)

    c1.undo()
    expect(doc2.findById('5')).toBeUndefined()

    c1.redo()
    expect(doc2.findById('5')).toBeDefined()
  })

  it('transact', () => {
    const doc = new VirtualDocument()
    const c = new Controller(doc)

    const node1 = new VirtualNode({ id: '1' }, '1')

    c.transact(() => {
      doc.insert(node1, doc.root)
      doc.set(node1, 'id', 'test1')
    })

    c.undo()
    expect(node1.attrs.id).toBe('1')

    expect(doc.nodes.length).toBe(0)

    c.redo()

    expect(doc.nodes.length).toBe(1)
    expect(node1.attrs.id).toBe('test1')
  })
})
