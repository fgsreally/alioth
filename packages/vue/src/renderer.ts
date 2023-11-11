import type {
  Component,
  ComputedRef,
  DefineComponent,
  VNode,
} from 'vue'
import {
  computed,
  h,
  render,

} from 'vue'
import type { VirtualNode } from 'alioth-lib'
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
  NodeAttrs extends Record<string, any>,
> {
  protected _vnode: VNode | VNode[] | undefined = undefined

  // stack: { funcName: string; property: any }[];
  renderType: string
  // slotVNode: { [key in string]: Function };
  constructor(public node: VirtualNode<NodeAttrs>, public comp: Component, public scope: ComputedRef<any>) { }
  exec() {
    return this._vnode
  }

  createSlots(
    slotSet: string[],
    allWidgetMap: Map<RegisterKey, RegisterType>,
    renderType: string,
  ) {
    if (!this.node.children.length)
      return undefined

    const slots: { [key in string]: Function } = {}
    slotSet.forEach((templateName) => {
      slots[templateName] = (slotProps: any) =>
        // eslint-disable-next-line array-callback-return
        this.node.children.map((node: VirtualNode<any>) => {
          if ((node.attrs.slot || 'default') === templateName) {
            const widget = (allWidgetMap as any)
              .get(node.attrs.key)
            if (!widget)
              throw new Error(`miss widget "${node.attrs.key}"`)

            const ret = widget[renderType](node, { slot: slotProps, scope: this.scope })

            return ret
          }
        })
    })

    return slots
  }

  slot(
    slotSet: string[] = ['default'],
    allWidgetMap: Map<RegisterKey, RegisterType>,
    renderType = 'render',
  ) {
    this._vnode = this.createSlots(
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
    this._vnode = h('div', { default: () => [this._vnode] })
    return this
  }

  vFor(list: any[] = []) {
    return list.map((item, i) => {
      console.log(Object.getPrototypeOf(this))
      return new (Object.getPrototypeOf(this))(this.node, this.comp, computed(() => {
        return { ...this.scope.value, item, i }
      }))
    })
  }
}
