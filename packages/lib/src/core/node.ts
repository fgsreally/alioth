import { nanoid } from 'nanoid'

import { VirtualDocument } from './document'

export interface NodeData { id: string; attrs: any; _i: number; parentId: string }
export class VirtualNode<A extends Record<string, any> = any> {
  parentId: string
  _i: number

  doc: VirtualDocument<A>

  constructor(public attrs: A = {} as any, public id = nanoid(),
  ) {
  }

  get parent(): VirtualNode<A> {
    return this.doc.findById(this.parentId)!
  }

  set parent(value: VirtualNode<A>) {
    this.parentId = value.id
  }

  get sibling() {
    return this.doc.findSiblings(this)!
  }

  get children() {
    return this.doc.findChildren(this)
  }

  get descendants() {
    return this.doc.findDescendants(this)
  }

  get layer(): number {
    if (this.id === 'root')
      return 0

    return this.parent!.layer + 1
  }

  get index(): number {
    return this.doc.index(this)
  }

  toJSON(): NodeData {
    return {
      id: this.id,
      attrs: this.attrs,
      _i: this._i,
      parentId: this.parentId,
    }
  }
}
