import { describe, expect, it } from 'vitest'
import { VirtualDocument } from '../src'
describe('doc and node', () => {
  it('create node and doc', () => {
    const doc = new VirtualDocument()

    const node = doc.createNode()
    node.setAttribute('name', 'test')
    doc.root.insert(node)

    expect(node.attrs.name).toBe('test')

    expect(node.parent === doc.root).toBe(true)
  })
})
