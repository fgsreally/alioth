// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import { h, toRaw } from 'vue'
import { getV, useV } from 'phecda-vue'
import GridstackItem from './GridstackItem.vue'
export class Renderer extends BaseRenderer<any> {
  propsData: any

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
