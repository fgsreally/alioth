// import { cloneDeep, isSymbol } from 'lodash-es'
import type { node } from 'alioth-lib'
import { BaseRenderer, filter } from 'alioth-lib'

import type { Component, DefineComponent, VNode } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { useV } from 'phecda-vue'
import DragBox from '../components/wrappers/DragBox.vue'
import type { NodeSchema } from './schema'
import { DocState } from '@/models/doc'

import { toPx } from '@/utils/style'
enum VUEOPTS {
  MODEL = 'vModel',
  IF = 'vIf',
}

const { activeDoc, activeNode, isActive } = useV(DocState)

export class renderer extends BaseRenderer<node<NodeSchema>> {
  propsData: any
  // constructor(node: node<NodeSchema>, comp: Component) {
  //   super(node, comp)
  //   this.propsData = filter(cloneDeep(this.node.attrs.propsData || {}))
  // }

  getSize() {
    if (!this._vnode)
      return this;

    (this._vnode as any).props.onVnodeMounted = (args: {
      component: any
      el: any
    }) => {
      const dom = args.el
      if (dom instanceof HTMLElement) {
        this.node.attrs.w = { value: dom.offsetWidth, size: 'px' }
        this.node.attrs.h = { value: dom.offsetHeight, size: 'px' }
      }
    }
    return this
  }

  draggable() {
    if (!this._vnode || !this.node.attrs.w)
      return this

    this._vnode = h(
      DragBox as unknown as DefineComponent,
      { node: this.node },
      this._vnode as VNode,
    )

    return this
  }

  useSize() {
    if (!this._vnode)
      return this

    if (this.node.attrs.w) {
      (this._vnode as any).props.style = `width:${toPx(
        this.node,
        'w',
      )}px;height:${toPx(this.node, 'h')}px`
    }
    return this
  }

  response(width: number, height: number) {
    if (!this._vnode)
      return this;

    (this._vnode as any).props.onVnodeMounted = ({ el }: any) => {
      const offsetWidth = el.offsetWidth
      const offsetHeight = el.offsetHeight
      const scale = Math.min(1, height / offsetHeight, width / offsetWidth)
      el.style = `transform:scale(${scale});`
    }

    return this
  }

  useOffset() {
    if (!this._vnode || !this.node.attrs.top)
      return this;

    (this._vnode as any).props.style = `top:${toPx(
      this.node,
      'top',
    )}px;left:${toPx(this.node, 'left')}px`
    return this
  }

  main() {
    // if (!this._vnode)
    //   return this
    const vnode: any = (this._vnode = h(
      this.comp as DefineComponent,
      Object.assign({ _node: this.node }, this.filter(cloneDeep(this.node.attrs.propsData))),
      this._vnode || undefined,
    ))

    // if (!this.node.isReady) {
    //   nextTick(() => {
    //     this.node.slots = vnode.component.subTree.dynamicChildren.filter((i: any) => i.patchFlag === -2 && i.key.startsWith('_')).map((i: any) => i.key.slice(1))
    //     // if (isSymbol(vnode.component.subTree.type))
    //     //   this.node.isMultiple = true

    //     this.node.isReady = true
    //   })
    // }
    // if (this.node.isMultiple)
    //   this._vnode = h('div', {}, this._vnode)

    return this
  }

  editAction(canSelect: boolean) {
    if (!this._vnode)
      return this;
    (this._vnode as any).props.onMousedownCapture = () => {
      activeDoc.value.select(this.node)
    }
    (this._vnode as any).props.onDragoverCapture = () => {
      activeDoc.value.select(this.node, 'hoverNode')
    };
    (this._vnode as any).props.onDragleave = () => {
      activeDoc.value.cancel('hoverNode')
    }
    (this._vnode as any).props.onMouseenter = () => {
      activeDoc.value.select(this.node, 'hoverNode')
    }

    (this._vnode as any).props.onMouseleave = (e) => {
      activeDoc.value.cancel('hoverNode')
    }

    return this
  }

  renderAction(state: any, context: any, services: viewServices) {
    if (!this._vnode)
      return this

    // if (this.node[VUEOPTS.MODEL]) {
    //   (this._vnode as any).props[`modelValue`] =
    //     state[this.node[VUEOPTS.MODEL]];
    //   (this._vnode as any).props[`onUpdate:modelValue`] = (v: any) =>
    //     (state[this.node[VUEOPTS.MODEL]] = v);
    // }
    this.node.mutations.forEach(
      (item: { key: string | undefined; handler: string | undefined }) => {
        if (item.key && item.handler) {
          // eslint-disable-next-line no-new-func
          (this._vnode as any).props[`on${item.key}`] = new Function(
            ...Object.keys(context),
            'state',
            `return ${services[item.handler]}`,
          )(...Object.values(context), state)
        }
      },
    )
    return this
  }

  // vModel(state: any) {
  //   if (!this._vnode)
  //     return this

  //   if (this.node[VUEOPTS.MODEL]) {
  //     (this._vnode as any).props.modelValue
  //       = state[this.node[VUEOPTS.MODEL]];
  //     (this._vnode as any).props['onUpdate:modelValue'] = (v: any) =>
  //       (state[this.node[VUEOPTS.MODEL]] = v)
  //   }

  //   return this
  // }

  vif(state: any) {
    if (filter({ data: this.node[VUEOPTS.IF] }).data)
      this._vnode = null

    return this
  }
}
