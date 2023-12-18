import { describe, expect, it } from 'vitest'
import { Controller, VirtualNode, diff } from '../src/document'

describe('controller', () => {
  const node = new VirtualNode({ test: 'a' }, '1')
  node.root()
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

    // stack length
    expect(c.undoStack.length).toBe(4)

    expect(child1.children.length).toBe(0)
    c.undo()
    expect(child1.children.length).toBe(1)

    expect(child1.attrs.test).toBe('test1')
    c.undo()
    expect(child1.attrs.test).toBe('b')

    expect(node.children.length).toBe(2)
    c.undo()
    expect(node.children.length).toBe(1)

    expect(c.redoStack.length).toBe(3)

    c.redo()
    expect(node.children.length).toBe(2)

    c.redo()
    expect(child1.attrs.test).toBe('test1')

    c.redo()
    expect(child1.children.length).toBe(0)

    c.redo()

    expect(c.redoStack.length).toBe(0)
  })

  it('diff', () => {
    const cloneNode = node.clone()
    cloneNode.root()

    cloneNode.children[0].insert(child3)
    cloneNode.children[0].set('test', 'test3')

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
    node1.root()
    node2.root()
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

  it('transact', () => {
    const root = new VirtualNode({ test: 'a' }, '1')
    const child = new VirtualNode({ test: 'b' }, '2')

    root.root()
    const c = new Controller(root)

    c.transact(() => {
      root.set('test', 'c')
      root.insert(child)
    })

    c.undo()

    expect(root.children.length).toBe(0)
    expect(root.attrs.test).toBe('a')

    c.redo()

    expect(root.children.length).toBe(1)
    expect(root.attrs.test).toBe('c')
  })
})
