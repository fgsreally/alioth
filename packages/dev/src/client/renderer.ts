import type {
  Component,
  VNode,
  VNodeProps,
} from 'vue'
import {
  h,
  render,
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

  wrap<P extends VNodeProps>(comp: Component<P>, props: P) {
    this.vnode = h(comp as any, props, this.vnode)
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
            const widget = window.__ALIOTH__.widgetStore.getData(key)
            node.scope = this.scope.extend(props)
            if (!widget)
              throw new Error(`miss widget "${key}"`)
            return window.__ALIOTH__.renderFnStore.getData(key)({ node, widget, mode: this.mode })
          }
        })
    })

    this.vnode = slots as any
    return this
  }

  mount(dom: HTMLElement = document.body) {
    if (!this.vnode)
      return this

    render(this.vnode as any, dom)
    return this
  }

  useDragger(
    dragEnter: (e: DragEvent, VirtualNode: VirtualNode<NodeAttrs>) => void,
    dragOver: (e: DragEvent, VirtualNode: VirtualNode<NodeAttrs>) => void,
  ) {
    (this.vnode as any).props.ondragenter = (e: DragEvent) =>
      dragEnter(e, this.node);
    (this.vnode as any).props.ondragover = (e: DragEvent) =>
      dragOver(e, this.node)
    return this
  }

  addClass(className: string) {
    if (!this.vnode)
      return this

    if (!(this.vnode as any).props.class)
      (this.vnode as any).props.class = '';
    (this.vnode as any).props.class += ` ${className} `
    return this
  }

  useClass(className: string) {
    (this.vnode as any).props.class = className
    return this
  }

  addStyle(style: Partial<CSSStyleDeclaration>) {
    if (!this.vnode)
      return this

    if (!(this.vnode as any).props.style)
      (this.vnode as any).props.style = style;

    (this.vnode as any).props.style = Object.assign((this.vnode as any).props.style, style)

    return this
  }

  useStyle(style: Partial<CSSStyleDeclaration>) {
    (this.vnode as any).props.style = style
    return this
  }

  useID(id: string) {
    (this.vnode as any).props.id = id
    return this
  }

  box() {
    this.vnode = h('div', { default: () => this.vnode })
    return this
  }
}
