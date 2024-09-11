import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Controller, VirtualDocument, VirtualNode, cloneDeep, diff } from '../src'

function stop(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

describe('controller', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('undo/redo', () => {
    const doc = new VirtualDocument()

    const c = new Controller(doc)

    let node1 = new VirtualNode({ id: '1' }, '1')
    const node2 = new VirtualNode({ id: '2' }, '2')
    const node3 = new VirtualNode({ id: '3' }, '3')
    doc.insert(node1, doc.root)
    doc.insert(node2, node1)
    doc.insert(node3, node1)

    doc.set(node1, 'id', '2')// throttle
    doc.set(node1, 'id', 'test1')

    vi.runAllTimers()

    // load
    const doc2 = new VirtualDocument()

    const c2 = new Controller(doc2)
    doc2.load(cloneDeep(doc.store()))
    vi.runAllTimers()

    c2.undo()
    expect(doc2.nodeSet.size).toBe(0)
    c2.redo()
    expect(doc2.nodeSet.size).toBe(3)

    expect(doc.nodeSet.size).toBe(3)

    doc.remove(node1)
    vi.runAllTimers()

    expect(doc.findChildren(doc.root).length).toBe(0)

    c.undo()

    expect(doc.nodes.length).toBe(3)

    node1 = doc.findById('1')!
    c.undo()
    expect(node1.attrs.id).toBe('1')

    c.undo()
    expect(doc.findChildren(node1).length).toBe(1)

    expect(c.redoStack.length).toBe(3)

    c.redo()
    expect(doc.findChildren(node1).length).toBe(2)

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
    vi.runAllTimers()

    expect(doc2.findChildren(doc2.root).length).toBe(4)
    doc.insert(node2, node1)
    vi.runAllTimers()

    expect(doc2.findChildren(doc2.root).length).toBe(3)
    // console.log(doc2.nodes)
    expect(doc2.findChildren(doc2.findById('1')!).length).toBe(1)

    doc.set(node1, 'id', 'test1')
    vi.runAllTimers()

    expect(doc2.findById('1')!.attrs.id).toBe('test1')

    doc.remove(node3)
    vi.runAllTimers()

    expect(doc2.nodes.length).toBe(3)

    // doc2 action
    doc2.insert(node6, doc2.root)
    vi.runAllTimers()

    expect(doc.findChildren(doc.root).length).toBe(3)

    c1.undo()

    expect(doc2.nodes.length).toBe(6)

    c1.undo()

    expect(doc2.findById('1')!.attrs.id).toBe('1')
    c1.undo()
    expect(doc2.findChildren(node1).length).toBe(0)
    expect(doc2.findChildren(doc2.root).length).toBe(5)

    c1.undo()
    expect(doc2.findById('5')).toBeUndefined()

    c1.redo()
    expect(doc2.findById('5')).toBeDefined()
  })

  it('transact', () => {
    const doc = new VirtualDocument()
    const c = new Controller(doc)

    let node1 = new VirtualNode({ id: '1' }, '1')

    c.transact(() => {
      doc.insert(node1, doc.root)
      doc.set(node1, 'id', 'test1')
      vi.runAllTimers()
    })

    c.undo()
    expect(node1.attrs.id).toBe('1')

    expect(doc.nodes.length).toBe(0)

    c.redo()
    node1 = doc.findById('1')!
    expect(doc.nodes.length).toBe(1)
    expect(node1.attrs.id).toBe('test1')
  })

  it('lock', () => {
    const doc = new VirtualDocument()

    const c = new Controller(doc)

    const node1 = new VirtualNode({ id: '1' }, '1')
    const node2 = new VirtualNode({ id: '2' }, '2')

    c.lock()
    doc.insert(node1, doc.root)
    doc.insert(node2, node1)

    doc.set(node1, 'id', '11')
    doc.set(node1, 'id', '111')
    doc.set(node2, 'id', '22')
    doc.set(node2, 'id', '222')
    expect(node1.attrs.id).toBe('111')
    expect(node2.attrs.id).toBe('222')

    c.unlock()

    c.undo()
    expect(node1.attrs.id).toBe('1')
    expect(node2.attrs.id).toBe('2')
  })
})
