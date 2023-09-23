import { Global, Tag } from 'phecda-core'
import { VirtualDocument } from '../document'
import type { NodeAttrs, VirtualNode } from '../document'

@Global
@Tag('doc')
export abstract class BaseDocModel<T extends NodeAttrs> {
  abstract containerAttrs: NodeAttrs
  activeId: string
  doc = new VirtualDocument({}, 'model')

  get activePage() {
    return this.find(this.activeId) as unknown as VirtualNode<T>
  }

  get activeNode() {
    return this.doc.activeNode
  }

  get pages() {
    return this.doc.root.children
  }

  active(id: string) {
    if (this.activeId === id)
      return
    if (this.doc.root.children.some(item => item.id === id))
      this.activeId = id
  }

  add(id?: string) {
    const node = this.doc.createNode(this.containerAttrs || {}, id)

    this.doc.root.insert(node)
    return node
  }

  remove(id: string) {
    const { children } = this.doc.root
    const index = children.findIndex(item => item.id === id)
    this.doc.root.remove(index)
    if (children.length > 1)

      this.activeId = children[index - 1].id

    else
      this.activeId = ''
  }

  find(id: string) {
    return this.doc.root.children.find(item => item.id === id)
  }

  index(id: string) {
    return this.doc.root.children.findIndex(item => id === item.id)
  }

  load(data: any) {
    data = typeof data === 'string' ? JSON.parse(data) : data

    this.doc.load(data)
  }

  toJSON() {
    return this.doc.root
  }
}
// export abstract class BaseDocModel<T extends NodeAttrs> {
//   abstract containerAttrs: NodeAttrs
//   activeId: string
//   doc: VirtualDocument<T>[] = []

//   get activeDoc() {
//     return this.find(this.activeId) as unknown as VirtualDocument<T>
//   }

//   get container() {
//     return this.activeDoc?.root
//   }

//   get isActive() {
//     return !!this.find(this.activeId)
//   }

//   get activeNode() {
//     return this.find(this.activeId)?.activeNode
//   }

//   active(id: string) {
//     if (this.activeId === id)
//       return
//     if (this.doc.some(item => item.id === id))
//       this.activeId = id
//   }

//   add(id?: string) {
//     const doc = new VirtualDocument(this.containerAttrs, id)

//     this.doc.push(doc)
//     return doc
//   }

//   remove(id: string) {
//     if (this.doc.length > 1) {
//       const index = this.doc.findIndex(item => item.id === id)

//       this.doc.splice(index, 1)
//       this.activeId = this.doc[(index > 0) ? index - 1 : index].id
//     }
//   }

//   find(id: string) {
//     return this.doc.find(item => item.id === id)
//   }

//   index(id: string) {
//     return this.doc.findIndex(item => id === item.id)
//   }

//   load(data: any) {
//     data = typeof data === 'string' ? JSON.parse(data) : data

//     this.doc = data.map(({ id, root, data }: any) => {
//       const doc = new VirtualDocument()
//       doc.id = id
//       doc.data = data

//       doc.load(root)
//       return doc
//     })
//     return this.doc
//   }

//   toJSON() {
//     return this.doc.map(({ id, root, data }) => {
//       return { id, root, data }
//     }) as any[]
//   }
// }
