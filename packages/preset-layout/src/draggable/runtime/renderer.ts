// import { cloneDeep, isSymbol } from 'lodash-es'
import { BaseRenderer, interval } from 'alioth-vue'
import type { DefineComponent } from 'vue'
import { h } from 'vue'
import { cloneDeep } from 'lodash-es'

export class renderer extends BaseRenderer<any> {
  propsData: any

  main(type: string) {
    if (this.node.parent?.id === 'root') {
      this._vnode = h(
        this.comp as DefineComponent,
        { ...this.node.attrs, a_mode: type, a_node: this.node },
        this._vnode,
      )
      return this
    }
    const ret = interval.filter(cloneDeep(this.node.attrs.propsData))
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

    return this
  }
}
