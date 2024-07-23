import { BaseSelectionModel, ComponentRenderer } from 'alioth-vue'
import { getV } from 'phecda-vue'
import GridstackItem from './GridstackItem.vue'
export abstract class Renderer extends ComponentRenderer<any> {
  propsData: any

  gridstack() {
    this.wrap(GridstackItem, {})

    return this
  }

  editAction() {
    if (!this.vnode)
      return this
    const { selectedNode } = getV(BaseSelectionModel)

    this.vnode.props.onMousedown = (e) => {
      e.stopPropagation()
      if (this.node.layer === 1)
        selectedNode.value = undefined

      else
        selectedNode.value = this.node
    }
    return this
  }
}
