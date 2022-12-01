import { cloneDeep, isSymbol } from 'lodash-es'
import { Renderer } from '@alioth/engine'
import type { DefineComponent, VNode } from 'vue'
import { h, render } from 'vue'
import DragBox from '../components/helper/DragBox.vue'

import type { viewServices } from './../types/index'
import { instance } from '@/engine/init'
import { toPx } from '@/utils/style'

enum VUEOPTS {
  IF = 'vIf',
  MODEL = 'vModel',
}
export class YuhengRenderer extends Renderer<any, any> {
  getSize() {
    if (!this._vnode)
      return this;

    (this._vnode as any).props.onVnodeMounted = ({
      el,
    }: {
      component: any
      el: HTMLElement
    }) => {
      this.block.w = { value: el.offsetWidth, size: 'px' }
      this.block.h = { value: el.offsetHeight, size: 'px' }
    }
    return this
  }

  draggable() {
    if (!this._vnode)
      return this
    this._vnode = h(
      DragBox as DefineComponent,
      { block: this.block },
      this._vnode as VNode,
    )

    return this
  }

  useSize() {
    if (!this._vnode)
      return this

    if (this.block.w) {
      (this._vnode as any).props.style = `width:${toPx(
        this.block,
        'w',
      )}px;height:${toPx(this.block, 'h')}px`
    }
    return this
  }

  addClass(className: string) {
    if (!this._vnode)
      return this

    if (!(this._vnode as any).props.class)
      (this._vnode as any).props.class = '';
    (this._vnode as any).props.class += `${className} `
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
    if (!this._vnode)
      return this;

    (this._vnode as any).props.style = `top:${toPx(
      this.block,
      'top',
    )}px;left:${toPx(this.block, 'left')}px`
    return this
  }

  render(filter: any) {
    if (!this._vnode)
      return this

    const vnode: any = (this._vnode = h(
      this.comp as DefineComponent,
      filter(cloneDeep(this.block.propsData || {})),
      this._vnode || undefined,
    ))
    if (!this.block.isReady) {
      nextTick(() => {
        this.block.slots = vnode.component.subTree.dynamicChildren.filter((i: any) => i.patchFlag === -2 && i.key.startsWith('_')).map((i: any) => i.key.slice(1))
        if (isSymbol(vnode.component.subTree.type))
          this.block.isMultiple = true

        this.block.isReady = true
      })
    }
    if (this.block.isMultiple)
      this._vnode = h('div', {}, this._vnode)

    return this
  }

  editAction() {
    if (!this._vnode)
      return this;

    (this._vnode as any).props.onMousedownCapture = () => {
      instance.$select(this.block)
    };
    (this._vnode as any).props.ondragover = () => {
      instance.$select(this.block, 'hoverBlock')
    };

    (this._vnode as any).props.onmouseleave = (e: MouseEvent) => {
      instance.$cancel('hoverBlock')
      e.stopPropagation()
    }
    return this
  }

  renderAction(state: any, context: any, services: viewServices) {
    if (!this._vnode)
      return this

    // if (this.block[VUEOPTS.MODEL]) {
    //   (this._vnode as any).props[`modelValue`] =
    //     state[this.block[VUEOPTS.MODEL]];
    //   (this._vnode as any).props[`onUpdate:modelValue`] = (v: any) =>
    //     (state[this.block[VUEOPTS.MODEL]] = v);
    // }
    this.block.mutations.forEach(
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

  mount() {
    if (!this._vnode)
      return this

    render(this._vnode as any, document.body)
    return this
  }

  vModel(state: any) {
    if (!this._vnode)
      return this

    if (this.block[VUEOPTS.MODEL]) {
      (this._vnode as any).props.modelValue
        = state[this.block[VUEOPTS.MODEL]];
      (this._vnode as any).props['onUpdate:modelValue'] = (v: any) =>
        (state[this.block[VUEOPTS.MODEL]] = v)
    }

    return this
  }

  vif(state: any) {
    if (this.block[VUEOPTS.IF] && !state[this.block[VUEOPTS.IF]])
      this._vnode = null

    return this
  }
}
