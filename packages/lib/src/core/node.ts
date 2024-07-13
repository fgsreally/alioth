import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'

import { VirtualDocument } from './document'
import { Scope } from './scope'

export class VirtualNode<A extends Record<string, any> = any> {
  parent: string
  index: number
  scope = new Scope()

  doc: VirtualDocument<A>
  readonly oldAttrs: A

  constructor(public attrs: A = {} as any, public id = nanoid(),
  ) {
    this.oldAttrs = cloneDeep(attrs)
  }

  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      index: this.index,
      parent: this.parent,
    }
  }
}
