import { BaseRenderer, interval } from 'alioth-lib'

import type { DefineComponent } from 'vue'
import { h } from 'vue'

export class renderer extends BaseRenderer<any> {
  main({ type }: {
    type: string
  }) {
    const ret = interval.filter(this.node.attrs.propsData)

    if ('modelValue' in this.node.attrs.propsData)
      ret['onUpdate:modelValue'] = (v: any) => ret.modelValue = v

    this._vnode = h(
      this.comp as DefineComponent,
      Object.assign({ a_node: this.node, a_type: type }, ret),
      this._vnode || undefined,
    )

    return this
  }
}
