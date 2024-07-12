// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-dev/client'
import { h } from 'vue'
import { useV } from 'phecda-vue'

export class Renderer extends BaseRenderer<any> {
  propsData: any

  main() {
    const component = this.widget
    this.vnode = h(
      component,
      { ...this.node.proxy() },
      this.vnode)

    return this
  }

  editAction() {
    if (!this.vnode)
      return this
    const { selectNode, hoverNode, selectScope } = useV(__PHECDA__.selection);

    (this.vnode as any).props.onMousedown = (e) => {
      e.stopPropagation()
      selectNode.value = this.node
      selectScope.value = this.scope
    }
    (this.vnode as any).props.onDragoverCapture = () => {
      hoverNode.value = this.node
    };
    (this.vnode as any).props.onDragleave = () => {
      hoverNode.value = undefined
    }
    (this.vnode as any).props.onMouseenter = () => {
      hoverNode.value = this.node
    }

    (this.vnode as any).props.onMouseleave = () => {
      hoverNode.value = undefined
    }

    return this
  }
}
