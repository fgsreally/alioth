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
import { AliothRenderer } from '../components/renderer'
export type RendererContext = ConstructorParameters<typeof BaseRenderer>[0]

export type Renderer = (data: RendererContext) => VNode
export abstract class BaseRenderer<
  NodeAttrs extends Record<string, any> = any,
> {
  protected vnode: VNode | any
  doc: VirtualDocument<NodeAttrs>
  node: VirtualNode<NodeAttrs>
  widget: Component
  scope: Scope
  environment: string
  renderer: string
  protected appContext: AppContext
  constructor(
    data: {
      node: VirtualNode<NodeAttrs>
      widget: Component
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

  abstract exec(): void
}

export abstract class ComponentRenderer<
  NodeAttrs extends Record<string, any> = any,
> extends BaseRenderer<NodeAttrs> {
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

            return h(AliothRenderer, { node, environment: this.environment, scope: this.scope.extend(props), renderer: node.attrs.renderer || this.renderer })
        })
    })

    this.vnode = slots as any
    return this
  }

  wrap<P extends VNodeProps>(comp: Component<P>, props: P) {
    this.vnode = h(comp as any, props, this.vnode)
    return this
  }

  teleport(dom: HTMLElement = document.body) {
    if (!this.vnode)
      return this

    render(this.vnode as any, dom)
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

export abstract class DomRenderer<
NodeAttrs extends Record<string, any> = any,
> extends BaseRenderer<NodeAttrs> {
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
}
