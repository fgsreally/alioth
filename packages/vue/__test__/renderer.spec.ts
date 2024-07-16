import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { getR } from 'phecda-vue'
import { AliothRenderer, Internal, VirtualDocument, VirtualNode } from '../src'
import { BaseRenderer, Renderer } from '../src/core/renderer'
import { Comp1, Comp2 } from './fixtures/components'
describe('renderer', () => {
  class TestRenderer extends BaseRenderer<any> {
    test() {
      expect(this.scope.values).toMatchSnapshot()
      expect(this.environment).toBe('test')
      return this
    }
  }

  it('scope', () => {
    const renderer: Renderer = (data) => {
      const renderer = new TestRenderer(data)
      return renderer.slot(['default']).main().test().exec()
    }

    const internal = getR(Internal)

    internal.store('renderer').set('test', renderer)
    internal.store('widget').set('Comp1', Comp1)
    internal.store('widget').set('Comp2', Comp2)

    const doc = new VirtualDocument()
    const node1 = new VirtualNode({ key: 'Comp1' })
    const node2 = new VirtualNode({ key: 'Comp2' })

    doc.insert(node1, doc.root)
    doc.insert(node2, node1)

    const wrapper = mount(AliothRenderer, {
      props: {
        environment: 'test',
        renderer: 'test',
        scope: { test: true },
        node: node1,
      },
    })

    expect(wrapper.html()).toContain('Comp1')
    expect(wrapper.text()).toContain('Comp2')
  })
})
