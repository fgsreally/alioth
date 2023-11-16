// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import type { DefineComponent } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { createFilter, emitter, useV } from 'phecda-vue'
import { GridItem } from 'grid-layout-plus'

const { activePage } = useV(__PHECDA__.doc)
const { selectNode, hoverNode, selectScope } = useV(__PHECDA__.selection)
export class Renderer extends BaseRenderer<any> {
  propsData: any

  grid() {
    if (!this._vnode)
      return this

    const node = this.node
    this._vnode = h(GridItem, {
      ...node.attrs.layout,
      onMove() {
        activePage.value.children.forEach((node: any) => {
          node.set('layout.x', node.attrs.layout.x)
          node.set('layout.y', node.attrs.layout.y)
        })
      },
      onResize() {
        node.set('layout.h', node.attrs.layout.h)
        node.set('layout.w', node.attrs.layout.w)
      },
      onResized() {
        emitter.emit('alioth:node-action', null)
      },
      onMoved() {
        emitter.emit('alioth:node-action', null)
      },
    }, this._vnode)
    return this
  }

  main(key?: any) {
    const comp = this.widget.component
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        comp,
        { ...this.node.attrs, a_node: this.node, a_mode: this.mode },
        this._vnode,
      )
      return this
    }
    const { filter } = createFilter(this.scope.data)
    const ret = filter(cloneDeep(this.node.attrs.propsData))
    if (this.node.attrs.propsData && 'modelValue' in this.node.attrs.propsData) {
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
        comp as DefineComponent,
        { ...ret, a_mode: this.mode, a_node: this.node, ref_key: key },
        this._vnode))
    }

    return this
  }

  editAction() {
    if (!this._vnode)
      return this
    this._vnode.props.onMousedown = (e) => {
      e.stopPropagation()
      selectNode.value = this.node
      selectScope.value = this.scope
    }
    this._vnode.props.onDragoverCapture = () => {
      hoverNode.value = this.node
    }
    this._vnode.props.onDragleave = () => {
      hoverNode.value = undefined
    }
    this._vnode.props.onMouseenter = () => {
      hoverNode.value = this.node
    }

    this._vnode.props.onMouseleave = () => {
      hoverNode.value = undefined
    }

    return this
  }
}
