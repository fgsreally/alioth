// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-dev/client'
import { h, toRaw } from 'vue'
import { getV, useV } from 'phecda-vue'
import GridstackItem from './GridstackItem.vue'
export class Renderer extends BaseRenderer<any> {
  propsData: any

  main() {
    const component = this.widget
    this.vnode = h(
      component,
      { ...this.scope.parse(this.node.attrs) },
      this.vnode)

    return this
  }

  gridstack() {
    this.wrap(GridstackItem)

    return this
  }

  editAction() {
    if (!this.vnode)
      return this
    const { selectNode } = getV(__PHECDA__.selection)

    this.vnode.props.onMousedown = (e) => {
      e.stopPropagation()
      selectNode(toRaw(this.node))
      console.log('selectNode', this.node)
    }
    console.log('editAction')
    return this
  }
}
