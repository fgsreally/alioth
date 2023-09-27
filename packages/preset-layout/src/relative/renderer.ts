// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer, interval } from 'alioth-vue'
import type { DefineComponent, VNode } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { emitter, useV } from 'phecda-vue'
import DragBox from './DragBox.vue'

const { activeDoc } = useV(window.__PHECDA__.doc)

export class renderer extends BaseRenderer<any> {
  propsData: any

  getSize() {
    if (!this._vnode)
      return this;

    (this._vnode as any).props.onVnodeMounted = async (args: {
      component: any
      el: any
    }) => {
      const dom = args.el
      if (dom instanceof HTMLElement) {
        const { offsetWidth, offsetHeight } = dom
        this.node.attrs.width = offsetWidth || 30
        this.node.attrs.height = offsetHeight || 30

        // this.node.attrs.w = { value: offsetWidth || 30, size: 'px' }
        // this.node.attrs.h = { value: offsetHeight || 30, size: 'px' }
      }
    }
    return this
  }

  draggable() {
    if (!this._vnode)
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

    if (this.node.attrs.width) {
      this.addStyle({
        width: `${this.node.attrs.width}px`,
        height: `${this.node.attrs.height}px`,
      })
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

    (this._vnode as any).props.style = `top:${this.node.attrs.top}px;left:${this.node.attrs.left}px`
    return this
  }

  main(type: string) {
    if (!this._vnode)
      return this
    if (this.node.parent.id === 'root') {
      this._vnode = h(
        this.comp as DefineComponent,
        { ...this.node.attrs, a_mode: type, a_node: this.node },
        this._vnode || undefined,
      )
      return this
    }
    const ret = interval.filter(cloneDeep(this.node.attrs.propsData))
    if (type === 'render' && 'modelValue' in this.node.attrs.propsData)
      ret['onUpdate:modelValue'] = (v: any) => ret.modelValue = v
      ;
    (this._vnode = h(
      this.comp as DefineComponent,
      { ...ret, a_mode: type, a_node: this.node },
      this._vnode || undefined,
    ))

    return this
  }

  editAction() {
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

    (this._vnode as any).props.onMouseleave = () => {
      activeDoc.value.cancel('hoverNode')
    }

    return this
  }
}
