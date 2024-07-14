import type {
  AppContext,
  Component,
  VNode,
  VNodeProps,
} from 'vue'
import {
  h,
  render,
} from 'vue'
import type { Scope, VirtualDocument, VirtualNode } from 'alioth-lib'

export type Renderer = (data: ConstructorParameters<typeof BaseRenderer>[0]) => VNode
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
  doc: VirtualDocument<NodeAttrs>
  node: VirtualNode<NodeAttrs>
  widget: Widget
  scope: Scope
  environment: string
  renderer: string
  protected appContext: AppContext
  constructor(
    data: {
      node: VirtualNode<NodeAttrs>
      widget: Widget
      environment: string
      scope: Scope
      renderer: string
      appContext: AppContext
    },
  ) {
    this.node = data.node
    this.widget = data.widget
    this.environment = data.environment
    this.scope = data.scope
    this.renderer = data.renderer
    this.appContext = data.appContext
    this.doc = this.node.doc
  }

  exec() {
    return this.vnode as VNode
  }

  wrap<P extends VNodeProps>(comp: Component<P>, props: P) {
    this.vnode = h(comp as any, props, this.vnode)
    return this
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
          if ((node.attrs.slot || 'default') === templateName)
          //   const key = node.attrs.key
          // const rendererKey = node.attrs.renderer || this.renderer
          // const widget = window.__ALIOTH__.store('widget').getData(key)

            // const renderer: Renderer = window.__ALIOTH__.store('renderer').getData(rendererKey)
            // return renderer({ node, environment: this.environment, scope: this.scope.extend(props), renderer: rendererKey, widget })
            return h(this.appContext.components.AliothRenderer, { node, environment: this.environment, scope: this.scope.extend(props), renderer: node.attrs.renderer || this.renderer })
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

  setClass(className: string) {
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

  setStyle(style: Partial<CSSStyleDeclaration>) {
    (this.vnode as any).props.style = style
    return this
  }

  setID(id: string) {
    (this.vnode as any).props.id = id
    return this
  }

  main() {
    this.vnode = h(
      this.widget,
      { ...this.scope.parse(this.node.attrs) },
      this.vnode)

    return this
  }
}
