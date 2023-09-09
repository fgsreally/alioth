import type { NodeAttrs, VirtualDocument } from 'alioth-lib'
import { Global, Init, Tag } from 'phecda-vue'
import { BridgeDocModel, observeDoc } from 'alioth-lib'
import { WebsocketProvider } from 'y-websocket'
@Global
@Tag('doc')
export class DocModel<T extends NodeAttrs> extends BridgeDocModel<T> {
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

  bridge(): void {
    const wsProvider = new WebsocketProvider('ws://localhost:1234', 'documents', this.ydoc)
    this.yarr.observe((e, t) => {
      if ((!t.local) || t.origin) { // from remote or undoManager
        if (e.changes.keys.size === 0) {
          // only work when undo
          e.changes.added.forEach((item) => {
            this._add(item.content.getContent()[0])
          })
          e.changes.deleted.forEach((item) => {
            const id = item.content.getContent()[0]
            this.remove(id)!
          })
        }
      }
    })
  }

  bridgeDoc(doc: VirtualDocument<any>): void {
    // const ws=getQuery()
    const ydoc = doc.controller.ydoc
    const wsProvider = new WebsocketProvider('ws://localhost:1234', doc.id, ydoc)
    observeDoc(this.find(doc.id)!)
    wsProvider.on('status', (event) => {
      console.log(event.status)
      // if (event.status === 'connected')
      //   observeDoc(this.find(doc.id))
    })
  }

  @Init
  init() {
    // this.active(this.add())
    this.bridge()

    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('alioth_doc_state', this.docToStr())
    // })
    // const lastRecord = localStorage.getItem('alioth_doc_state') && false
    // if (lastRecord) {
    //   this.load(lastRecord)
    //   this.active(this.docs[0]?.id || this.add().id)
    // }

    // else {
    //   this.active(this.add().id)
    // }
  }

  toJSON() {
    return this.docs.map((doc) => {
      return {
        id: doc.id, data: toRaw(doc.root),
      }
    }) as any[]
  }
}
