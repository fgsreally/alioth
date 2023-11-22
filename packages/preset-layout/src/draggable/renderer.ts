// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { createFilter, useV } from 'phecda-vue'

export class Renderer extends BaseRenderer<any> {
  propsData: any

  main() {
    const { component } = this.widget
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        component,
        { ...this.node.attrs, a_mode: this.mode, a_node: this.node },
        this._vnode,
      )
      return this
    }
    const { filter } = createFilter(this.scope.data)

    const ret = filter(cloneDeep(this.node.attrs.propsData))
    if (this.mode === 'render' && this.node.attrs.propsData && 'modelValue' in this.node.attrs.propsData) {
      (this._vnode = h(
        component,
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
        component,
        { ...ret, a_mode: this.mode, a_node: this.node },
        this._vnode))
    }

    return this
  }

  editAction() {
    if (!this._vnode)
      return this
    const { selectNode, hoverNode, selectScope } = useV(__PHECDA__.selection);

    (this._vnode as any).props.onMousedown = (e) => {
      e.stopPropagation()
      selectNode.value = this.node
      selectScope.value = this.scope
    }
    (this._vnode as any).props.onDragoverCapture = () => {
      hoverNode.value = this.node
    };
    (this._vnode as any).props.onDragleave = () => {
      hoverNode.value = undefined
    }
    (this._vnode as any).props.onMouseenter = () => {
      hoverNode.value = this.node
    }

    (this._vnode as any).props.onMouseleave = () => {
      hoverNode.value = undefined
    }

    return this
  }
}
