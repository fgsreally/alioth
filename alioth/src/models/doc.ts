import type { NodeAttrs } from 'alioth-lib'
import { Global, Init, Tag } from 'phecda-vue'
import EventEmitter from 'eventemitter3'
import { ALIOTH_EVENT, VirtualDocument } from 'alioth-lib'
@Global
@Tag('doc')
export class DocModel<T extends NodeAttrs> extends EventEmitter {
  containerAttrs = {
    width: 640,
    height: 600,
    fontSize: 16,
    backgroundColor: 'rgb(102, 107, 226)',
    gridColor: '#ff00006b',
    gridNum: 10,
    gridGap: 20,
    margin: 0,
    radius: 0,
    isContainer: true,
    isFull: false,
    isGrid: true,
    mode: 'normal',
    wLimit: [375, 2000],
    hLimit: [600, 4000],
  }

  activeId: string
  id = 0
  docs: { doc: VirtualDocument<T>; id: string; title: string }[] = []

  @Init
  init() {
    this.active(this.add())

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('alioth_doc_state', this.docToStr())
    })
    const lastRecord = localStorage.getItem('alioth_doc_state') && false
    if (lastRecord) {
      this.docs = this.strToDoc(lastRecord)
      this.active(this.docs[0]?.id || this.add())
    }

    else {
      this.active(this.add())
    }
  }

  get activeDoc() {
    return this.find(this.activeId)!.doc!
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
    const id = String(this.id++)
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
    if (this.docs.some(item => item.id === id))
      this.activeId = id
  }

  find(id: string) {
    return this.docs.find(item => item.id === id)
  }

  docToStr() {
    return JSON.stringify(this.docs.map(({ doc, id, title }) => {
      return {
        id, title, data: doc.root,
      }
    }))
  }

  strToDoc(str: string) {
    return JSON.parse(str).map(({ id, title, data }: any) => {
      const doc = new VirtualDocument()
      doc.load(data)
      return {
        id, title, doc,

      }
    })
  }

  download(fileName: string) {
    const blob = new Blob([this.docToStr()])
    const saveLink = document.createElement('a')
    saveLink.href = URL.createObjectURL(blob)
    saveLink.download = fileName
    saveLink.click()
    URL.revokeObjectURL(saveLink.href)
  }

  remove(id: string) {
    if (this.docs.length > 1) {
      const index = this.docs.findIndex(item => item.id === id)

      this.activeId = this.docs[index === 0 ? 1 : index - 1].id
      this.docs.splice(index, 1)[0].doc.unmount()
    }
  }
}
