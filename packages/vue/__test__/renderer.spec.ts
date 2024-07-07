import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { AliothRenderer, Scope, VirtualDocument, VirtualNode, initAlioth, internal } from '../src'
import { Comp1, Comp2 } from './fixtures/components'
import { BaseRenderer } from './renderer'
describe('renderer', () => {
  initAlioth(['test'])
  class Renderer extends BaseRenderer<any> {
    test() {
      expect(this.scope.variable).toMatchSnapshot()
      expect(this.mode).toBe('test')
      return this
    }

    main() {
      const { component } = this.widget

      this.vnode = h(
        component,
        { msg: this.node.attrs.key },
        this.vnode,
      )

      return this
    }
  }

  it('scope', () => {
    const renderer = ({ node, widget, mode }) => {
      const renderer = new Renderer({ node, widget, mode })
      return renderer.slot(['default']).main().test().exec()
    }
    internal.mode = 'test'
    internal.import('renderer', renderer)

    internal.import('widget', { mode: 'test', key: 'Comp1', data: Comp1 })
    internal.import('widget', { mode: 'test', key: 'Comp2', data: Comp2 })

    const doc = new VirtualDocument()
    const node1 = new VirtualNode({ key: 'Comp1' })
    const node2 = new VirtualNode({ key: 'Comp2' })

    doc.insert(node1, doc.root)
    doc.insert(node2, node1)

    const wrapper = mount(AliothRenderer, {
      props: {
        mode: 'test',
        doc,
        scope: new Scope(),
        node: node1,
      },
    })

    expect(wrapper.html()).toContain('Comp1')
    // expect(wrapper.text()).toContain('Comp2')
  })
})
