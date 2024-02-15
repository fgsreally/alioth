import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cloneDeep } from 'lodash-es'
import { ClientBridge, Controller, VirtualDocument, VirtualNode } from '../src/document'

function createSuite() {
  const doc1 = new VirtualDocument()
  const doc2 = new VirtualDocument()

  const controller1 = new Controller(doc1)
  const controller2 = new Controller(doc2)

  class MockBridge extends ClientBridge {
    send(_event: any) {

    }
  }
  const bridge1 = new MockBridge(controller1)
  const bridge2 = new MockBridge(controller2)
  bridge1.send = (e) => {
    setTimeout(() => {
      bridge2.handle(cloneDeep(e))// fast
    }, 10)
  }
  bridge2.send = (e) => {
    setTimeout(() => {
      bridge1.handle(cloneDeep(e))// fast
      // slow
    }, 20)
  }

  return { bridge1, bridge2, doc1, doc2, controller1, controller2 }
}

describe('bridge', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('basic', async () => {
    const { doc1, doc2, controller1 } = createSuite()
    const node1 = new VirtualNode({ data: '1' }, '1')

    doc1.insert(node1, doc1.root)
    doc1.set(node1, 'data', '2')

    vi.runAllTimers()

    const newNode = doc2.findById('1')!
    expect(newNode).toBeDefined()
    expect(newNode.attrs.data).toBe('2')
    controller1.undo()
    vi.runAllTimers()

    expect(newNode.attrs.data).toBe('1')
    controller1.redo()
    vi.runAllTimers()

    expect(newNode.attrs.data).toBe('2')
  })

  it('set conflict', async () => {
    const { doc1, doc2, controller1 } = createSuite()
    const node1 = new VirtualNode({ data: '1' }, '1')
    doc1.insert(node1, doc1.root)

    vi.runAllTimers()

    const newNode = doc2.findById('1')!

    doc2.set(newNode, 'data', '2')

    doc1.set(node1, 'data', '3')

    expect(newNode.attrs.data).toBe('2')
    expect(node1.attrs.data).toBe('3')

    vi.runAllTimers()
    expect(newNode.attrs.data).toBe('3')
    expect(node1.attrs.data).toBe('3')

    controller1.undo()
    vi.runAllTimers()

    expect(newNode.attrs.data).toBe('1')
    expect(node1.attrs.data).toBe('1')
    controller1.redo()
    vi.runAllTimers()

    expect(newNode.attrs.data).toBe('3')
    expect(node1.attrs.data).toBe('3')
  })

  it('swap conflict', async () => {
    const { doc1, doc2, controller1, controller2 } = createSuite()
    const node1 = new VirtualNode(undefined, '1')
    const node2 = new VirtualNode(undefined, '2')
    const node3 = new VirtualNode(undefined, '3')

    doc1.insert(node1, doc1.root)
    doc1.insert(node2, doc1.root)
    doc1.insert(node3, doc1.root)

    vi.runAllTimers()

    // const remoteNode1 = doc2.findById('1')!

    const remoteNode2 = doc2.findById('2')!
    const remoteNode3 = doc2.findById('3')!

    doc2.insert(remoteNode3, remoteNode2)
    doc1.insert(node3, node1)

    vi.runAllTimers()

    expect(remoteNode3.parent).toBe('1')
    controller1.undo()
    vi.runAllTimers()

    expect(remoteNode3.parent).toBe('root')
    controller2.undo()
    expect(remoteNode3.parent).toBe('root')
    controller2.redo()
    expect(remoteNode3.parent).toBe('root')

    controller1.redo()
    vi.runAllTimers()
    expect(remoteNode3.parent).toBe('1')
  })
})
