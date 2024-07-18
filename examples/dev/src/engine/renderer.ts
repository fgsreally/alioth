// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer, BaseSelectionModel } from 'alioth-vue'
import { toRaw } from 'vue'
import { getV } from 'phecda-vue'
import GridstackItem from './GridstackItem.vue'
export class Renderer extends BaseRenderer<any> {
  propsData: any

  gridstack() {
    this.wrap(GridstackItem, {})

    return this
  }

  editAction() {
    if (!this.vnode)
      return this
    const { selectNode } = getV(BaseSelectionModel)

    this.vnode.props.onMousedown = (e) => {
      e.stopPropagation()
      selectNode(toRaw(this.node))
      console.log('selectNode', this.node)
    }
    console.log('editAction')
    return this
  }
}
