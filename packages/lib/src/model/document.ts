import { nanoid } from 'nanoid'
import { Init } from 'phecda-vue'
import EventEmitter from 'eventemitter3'
import { VirtualDocument } from '../document'
import type { NodeAttrs } from '../document'
import { ALIOTH_EVENT } from '../common'
export class DocState<T extends NodeAttrs> extends EventEmitter {
  activeId: string
  containerAttrs: Record<string, any>
  docs: { doc: VirtualDocument<T>; id: string; title: string }[] = []

  @Init
  init() {
    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('alioth_doc_state', JSON.stringify(this.docs.map((item) => {
    //     item.doc = item.doc.snapshot() as any
    //     return item
    //   })))
    // })
    const lastRecord = localStorage.getItem('alioth_doc_state') && false
    if (lastRecord) {
      this.docs = JSON.parse(lastRecord).map((item: any) => {
        const doc = new VirtualDocument()
        item.doc = doc.load(JSON.parse(item.doc))
        return item
      })
      this.active(this.docs[0]?.id || this.add())
    }

    else {
      this.active(this.add())
    }
  }

  get activeDoc() {
    return this.find(this.activeId)?.doc!
  }

  get title() {
    return this.find(this.activeId)!.title
  }

  get container() {
    return this.activeDoc.root
  }

  get isActive() {
    return !!this.activeNode
  }

  get activeNode() {
    return this.find(this.activeId)!.doc?.activeNode
  }

  add(title = '未定义') {
    const id = nanoid()
    const doc = new VirtualDocument('template', this.containerAttrs)
    this.docs.push({
      doc,
      id,
      title,
    })
    const emit = () => {
      this.emit('doc-action')
    }

    doc.HC.emitter.on(ALIOTH_EVENT.PROPERTY_CHANGE, emit)
    doc.HC.emitter.on(ALIOTH_EVENT.REMOVE_NODE, emit)
    doc.HC.emitter.on(ALIOTH_EVENT.APPEND_NODE, emit)

    return id
  }

  active(id: string) {
    if (this.activeId === id)
      return
    if (this.docs.some(item => item.id === id)) {
      // this.activeDoc.HC.emitter.removeAllListeners()
      this.activeId = id
    }
  }

  find(id: string) {
    return this.docs.find(item => item.id === id)
  }

  download(fileName: string) {
    const blob = new Blob([JSON.stringify(this.docs.map(({ doc, id, title }) => {
      return {
        id, title, data: doc.root,
      }
    }))])
    const saveLink = document.createElement('a')
    saveLink.href = URL.createObjectURL(blob)
    saveLink.download = fileName
    saveLink.click()
    URL.revokeObjectURL(saveLink.href)
  }

  remove(id: string) {
    if (this.docs.length > 1) {
      this.docs.splice(this.docs.findIndex(item => item.id === id), 1)[0].doc.unmount()
      if (!this.activeDoc)
        this.activeId = this.docs[0].id
    }
  }
}
