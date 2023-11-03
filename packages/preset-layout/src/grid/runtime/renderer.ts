// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer } from 'alioth-vue'
import type { DefineComponent } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'
import { GridItem } from 'grid-layout-plus'

export class renderer extends BaseRenderer<any> {
  propsData: any

  grid() {
    if (!this._vnode)
      return this

    const node = this.node
    this._vnode = h(GridItem, {
      ...node.attrs.layout,

    }, this._vnode)
    return this
  }

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
    ret.aNode = this.node
    ret.aMode = type
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
        { ...ret },
        this._vnode))
    }

    return this
  }
}
