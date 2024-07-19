import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'

import { VirtualDocument } from './document'

export class VirtualNode<A extends Record<string, any> = any> {
  parentId: string
  index: number

  doc: VirtualDocument<A>
  readonly oldAttrs: A

  constructor(public attrs: A = {} as any, public id = nanoid(),
  ) {
    this.oldAttrs = cloneDeep(attrs)
  }

  get parent(): VirtualNode<A> {
    return this.doc.findById(this.parentId)!
  }

  set parent(value: VirtualNode<A>) {
    this.parentId = value.id
  }

  get layer(): number {
    if (this.id === 'root')
      return 0

    return this.parent!.layer + 1
  }

  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      index: this.index,
      parentId: this.parentId,
    }
  }
}
