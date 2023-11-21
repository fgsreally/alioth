import { BaseRenderer } from 'alioth-vue'
import { cloneDeep } from 'lodash-es'

import type { DefineComponent } from 'vue'
import { h } from 'vue'

export class Renderer extends BaseRenderer<any> {
  main(type: string) {
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        this.comp as DefineComponent,
        { ...this.node.attrs, a_mode: type, a_node: this.node },
        this._vnode || undefined,
      )
      return this
    }
    const ret = $alioth_interval.filter(cloneDeep(this.node.attrs.propsData))
    if (type === 'render' && 'modelValue' in this.node.attrs.propsData)
      ret['onUpdate:modelValue'] = (v: any) => ret.modelValue = v
      ;
    (this._vnode = h(
      this.comp as DefineComponent,
      { ...ret, a_mode: type, a_node: this.node },
      this._vnode || undefined,
    ))

    return this
  }
}
