import { describe, expect, it } from 'vitest'
import { VirtualDocument, VirtualNode } from '../src/document/document'
describe('doc and node', () => {
  it('base action', () => {
    const doc = new VirtualDocument()

    const node1 = new VirtualNode({ id: 1 }, '1')
    const node2 = new VirtualNode({ id: 2 }, '2')
    doc.insert(node1, doc.root)
    doc.insert(node2, doc.root)

    expect(doc.nodes).toMatchSnapshot()

    doc.set(node1, 'id', 3)

    expect(node1.attrs.id).toBe(3)

    doc.insert(node2, node1)

    expect(node2.parent).toBe(node1.id)

    doc.remove(node1)

    expect(doc.nodes.length).toBe(0)
  })

  it('swap', () => {
    const doc = new VirtualDocument()

    const node1 = new VirtualNode({ id: 1 }, '1')
    const node2 = new VirtualNode({ id: 2 }, '2')
    doc.insert(node1, doc.root)
    doc.insert(node2, doc.root)
    expect(node1.index).toBe(0.5)
    expect(node2.index).toBe(0.25)
    doc.insert(node2, node1)

    expect(node2.index).toBe(0.5)
  })
})
