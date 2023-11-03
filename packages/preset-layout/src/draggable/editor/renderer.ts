// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import type { DefineComponent } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { useV } from 'phecda-vue'

const { doc } = useV(__PHECDA__.doc)

export class renderer extends BaseRenderer<any> {
  propsData: any

  main(type: string) {
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        this.comp as DefineComponent,
        { ...this.node.attrs, a_mode: type, a_node: this.node },
        this._vnode,
      )
      return this
    }
    const ret = $alioth_interval.filter(cloneDeep(this.node.attrs.propsData))
    if (type === 'render' && this.node.attrs.propsData && 'modelValue' in this.node.attrs.propsData) {
      (this._vnode = h(
        this.comp as DefineComponent,
        {
          ...ret,
          'onUpdate:modelValue': (v: any) => {
            ret.modelValue = v
          },
        },
        this._vnode))
    }
    else {
      (this._vnode = h(
        this.comp as DefineComponent,
        { ...ret, a_mode: type, a_node: this.node },
        this._vnode))
    }

    return this
  }

  editAction() {
    if (!this._vnode)
      return this;
    (this._vnode as any).props.onMousedown = (e) => {
      e.stopPropagation()

      doc.value.select(this.node)
    }
    (this._vnode as any).props.onDragoverCapture = () => {
      doc.value.select(this.node, 'hoverNode')
    };
    (this._vnode as any).props.onDragleave = () => {
      doc.value.cancel('hoverNode')
    }
    (this._vnode as any).props.onMouseenter = () => {
      doc.value.select(this.node, 'hoverNode')
    }

    (this._vnode as any).props.onMouseleave = () => {
      doc.value.cancel('hoverNode')
    }

    return this
  }
}
