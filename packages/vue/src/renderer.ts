import type {
  VNode,
} from 'vue'
import {
  h,
  render,
} from 'vue'
import type { Scope, VirtualNode } from 'alioth-lib'
import { type Widget } from './interval'

export type CompList<RegisterBlock> = Map<string, RegisterBlock>

export class BaseRenderer<
  NodeAttrs extends Record<string, any>,
> {
  protected _vnode: VNode | any

  // stack: { funcName: string; property: any }[];
  renderType: string
  // slotVNode: { [key in string]: Function };
  constructor(
    public mode: string,
    public node: VirtualNode<NodeAttrs>,
    public widget: Widget,
    public scope: Scope,
  ) {

  }

  exec() {
    return this._vnode as VNode
  }

  slot(
    slotNames: string[],
  ) {
    if (!this.node.children.length)
      return this
    const slots: { [key in string]: Function } = {}
    slotNames.forEach((templateName) => {
      slots[templateName] = (props: any) =>
        // eslint-disable-next-line array-callback-return
        this.node.children.map((node: VirtualNode<any>) => {
          if ((node.attrs.slot || 'default') === templateName) {
            const widget = $alioth_interval.getWidget(node.attrs.key)
            if (!widget)
              throw new Error(`miss widget "${node.attrs.key}"`)
            return $alioth_interval.renderFnMap.get(this.mode)!({ props, scope: this.scope, node, widget, mode: this.mode })
          }
        })
    })
    this._vnode = slots as any
    return this
  }

  mount(dom: HTMLElement = document.body) {
    if (!this._vnode)
      return this

    render(this._vnode as any, dom)
    return this
  }

  useDragger(
    dragEnter: (e: DragEvent, VirtualNode: VirtualNode<NodeAttrs>) => void,
    dragOver: (e: DragEvent, VirtualNode: VirtualNode<NodeAttrs>) => void,
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

    if (!(this._vnode as any).props.style)
      (this._vnode as any).props.style = style;

    (this._vnode as any).props.style = Object.assign((this._vnode as any).props.style, style)

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
    this._vnode = h('div', { default: () => this._vnode })
    return this
  }
}
