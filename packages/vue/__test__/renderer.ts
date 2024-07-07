import type {
  Component,
  VNode,
} from 'vue'

import type { Scope, VirtualDocument, VirtualNode } from 'alioth-lib'

export type CompList<RegisterBlock> = Map<string, RegisterBlock>

interface Widget {
  component: Component
  meta: any
  key: string
}
export class BaseRenderer<
      NodeAttrs extends Record<string, any>,
    > {
  protected vnode: VNode | any
  public doc: VirtualDocument<NodeAttrs>
  public node: VirtualNode<NodeAttrs>
  public widget: Widget
  public scope: Scope
  public mode: string
  constructor(
    data: {
      node: VirtualNode<NodeAttrs>
      widget: Widget
      mode: string
    },
  ) {
    this.node = data.node
    this.widget = data.widget
    this.mode = data.mode

    this.scope = this.node.scope
    this.doc = this.node.doc
  }

  exec() {
    return this.vnode as VNode
  }

  slot(
    slotNames: string[],
  ) {
    const childs = this.doc.findChildrens(this.node)

    if (!childs.length)
      return this
    const slots: { [key in string]: Function } = {}
    slotNames.forEach((templateName) => {
      slots[templateName] = (props: any) =>
        // eslint-disable-next-line array-callback-return
        childs.map((node: VirtualNode<any>) => {
          if ((node.attrs.slot || 'default') === templateName) {
            const key = node.attrs.key
            const widget = window.__ALIOTH__.widgetStore.getData(this.mode, key)
            node.scope = this.scope.extend(props)
            if (!widget)
              throw new Error(`miss widget "${key}"`)
            return window.__ALIOTH__.renderFnStore.getData(this.mode, key)({ node, widget, mode: this.mode })
          }
        })
    })

    this.vnode = slots as any
    return this
  }
}
