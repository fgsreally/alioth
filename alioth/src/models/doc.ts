import type { NodeAttrs } from 'alioth-lib'
import { Global, Init, Tag } from 'phecda-vue'
import { Controller, DocumentModel, VirtualDocument, observe } from 'alioth-lib'
@Global
@Tag('doc')
export class DocModel<T extends NodeAttrs> extends DocumentModel<T> {
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

  afterActive() {
    const doc = this.activeDoc
    if (this.activeId)
      (doc as any).unobserve = observe(this.docs[this.index(this.activeId)].doc)
  }

  beforeActive() {
    const doc = this.activeDoc
    if (doc)
      (doc as any).unobserve?.()
  }

  @Init
  init() {
    // this.active(this.add())

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('alioth_doc_state', this.docToStr())
    })
    const lastRecord = localStorage.getItem('alioth_doc_state') && false
    if (lastRecord) {
      this.load(lastRecord)
      this.active(this.docs[0]?.id || this.add())
    }

    else {
      this.active(this.add())
    }
  }

  add(title = '未定义') {
    const id = String(this.id++)
    const doc = new VirtualDocument(this.containerAttrs)
    const c = new Controller({

    })
    doc.bindController(markRaw(c))
    this.docs.push({
      doc,
      id,
      title,
    })

    return id
  }

  docToStr() {
    return JSON.stringify(this.docs.map(({ doc, id, title }) => {
      return {
        id, title, data: doc.root,
      }
    }))
  }

  remove(id: string) {
    if (this.docs.length > 1) {
      const index = this.docs.findIndex(item => item.id === id)

      this.activeId = this.docs[index === 0 ? 1 : index - 1].id
      // this.docs.splice(index, 1)[0].doc.unmount()
    }
  }

  download(fileName: string) {
    const blob = new Blob([this.docToStr()])
    const saveLink = document.createElement('a')
    saveLink.href = URL.createObjectURL(blob)
    saveLink.download = fileName
    saveLink.click()
    URL.revokeObjectURL(saveLink.href)
  }
}
