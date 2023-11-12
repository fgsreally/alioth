// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import type { DefineComponent } from 'vue'
import { h, inject, provide } from 'vue'
import { cloneDeep } from 'lodash-es'
import { createFilter, emitter, useV } from 'phecda-vue'
import { GridItem } from 'grid-layout-plus'

const { doc, activePage } = useV(__PHECDA__.doc)

export class renderer extends BaseRenderer<any> {
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

  main(type: string, scope: any, key?: any) {
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        this.comp as DefineComponent,
        { ...this.node.attrs, a_mode: type, a_node: this.node },
        this._vnode,
      )
      return this
    }
    console.log('scope', scope)
    const { filter } = createFilter(scope)
    const ret = filter(cloneDeep(this.node.attrs.propsData))
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
        { ...ret, a_mode: type, a_node: this.node, ref_key: key },
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
