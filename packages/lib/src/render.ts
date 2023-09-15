import type {
  Component,
  DefineComponent,
  VNode,
} from 'vue'
import {
  h,
  render,

} from 'vue'
import type { VirtualNode } from './document'
import type { RegisterKey, RegisterType } from './register'

export type CompList<RegisterBlock> = Map<string, RegisterBlock>

const decorator = (deco: defaultDecorator) => {
  return (content: VNode) =>
    h(
      deco.comp,
      { ...deco.propsData },
      {
        [deco.dirct]: content,
      },
    )
}

export interface defaultDecorator {
  comp: Component
  propsData: any
  dirct: string
}

export class BaseRenderer<
    NodeType extends VirtualNode<any>,
  > {
  protected _vnode: VNode | VNode[] | null = null

  // stack: { funcName: string; property: any }[];
  renderType: string
  // slotVNode: { [key in string]: Function };
  constructor(protected node: NodeType, protected comp: Component) {}
  exec() {
    return this._vnode
  }

  slotRenderer(
    slotSet: string[],
    allWidgetMap: Map<RegisterKey, RegisterType>,
    renderType: string,
  ) {
    const slotRenderer: { [key in string]: Function } = {}
    slotSet.forEach((templateName) => {
      slotRenderer[templateName] = (slotProps: any) =>
      // eslint-disable-next-line array-callback-return
        this.node.children.map((node: VirtualNode<any>) => {
          try {
            if (node.attrs.slot === templateName) {
              return (allWidgetMap as any)
                .get(node.attrs.key)[renderType](node, slotProps)
            }
          }
          catch (e) {
            console.error(
                `(Method ${this.renderType} or VirtualNode ${node.attrs.key} ) may not be found in the registration module )\n`,
                e,
            )
          }
        })
    })
    return slotRenderer
  }

  slot(
      slotSet: string[] = ['default'],
      allWidgetMap: Map<RegisterKey, RegisterType>,
      renderType = 'render',
  ) {
    this._vnode = this.slotRenderer(
      slotSet,
      allWidgetMap,
      renderType,
    ) as any
    return this
  }

  main(propsData?: any) {
    this._vnode = h(
      this.comp as DefineComponent,
      {
        ...(propsData || {}),
      },
      this._vnode || undefined,
    )
    return this
  }

  mount(dom: HTMLElement = document.body) {
    if (!this._vnode)
      return this

    render(this._vnode as any, dom)
    return this
  }

  useDecorator() {
    this._vnode = (this.node as any).decorators.reduce(
      (arr: any, cur: any) => {
        return decorator(cur)(arr as VNode)
      },
      this._vnode,
    )
    return this
  }

  useDragger(
    dragEnter: (e: DragEvent, VirtualNode: NodeType) => void,
    dragOver: (e: DragEvent, VirtualNode: NodeType) => void,
  ) {
    (this._vnode as any).props.ondragenter = (e: DragEvent) =>
      dragEnter(e, this.node);
    (this._vnode as any).props.ondragover = (e: DragEvent) =>
      dragOver(e, this.node)
    return this
  }

  addClass(className: string) {
    if (!this._vnode)
      return this

    if (!(this._vnode as any).props.class)
      (this._vnode as any).props.class = '';
    (this._vnode as any).props.class += ` ${className} `
    return this
  }

  useClass(className: string) {
    (this._vnode as any).props.class = className
    return this
  }

  addStyle(style: Partial<CSSStyleDeclaration>) {
    if (!this._vnode)
      return this

    if (!(this._vnode as any).props.style) {
      (this._vnode as any).props.style = style;

      (this._vnode as any).props.style = Object.assign((this._vnode as any).props.style, style)
    }
    return this
  }

  useStyle(style: Partial<CSSStyleDeclaration>) {
    (this._vnode as any).props.style = style
    return this
  }

  useID(id: string) {
    (this._vnode as any).props.id = id
    return this
  }

  box() {
    this._vnode = h('div', { default: () => [this._vnode] })
    return this
  }
}
