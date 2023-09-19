import type { NodeAttrs, VirtualDocument } from 'alioth-vue'
import { Init, useR } from 'phecda-vue'
import { BaseDocModel, Controller, interval, observeDoc } from 'alioth-vue'
import { ChannelModel } from './channel'
// // @ts-expect-error miss types
// import { WebsocketProvider } from 'y-websocket'

export class DocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  containerAttrs = {

    width: 480,
    height: 400,
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

  constructor() {
    super()

    interval.setState('$doc', this)
  }

  @Init
  init() {
    const { add, send } = useR(ChannelModel)
    this.doc.bind(markRaw(new Controller()))
    observeDoc(this.doc)

    add('doc-sync', (delta) => {
      Y.applyUpdate(this.doc.controller.ydoc, delta, 'sandbox')
      console.log('doc', this.doc.root)
    })
    // this.doc.controller.ydoc.on('update', (delta, origin) => {
    //   if (origin !== 'sandbox')
    //     send('doc-sync', Y.encodeStateAsUpdate(this.doc.controller.ydoc))
    //   // send('doc-sync', delta)
    // })
    // this.add()
  }

  bridge(): void {
    // const wsProvider = new WebsocketProvider('ws://localhost:1234', 'documents', this.ydoc)
    // this.yarr.observe((e, t) => {
    //   if ((!t.local) || t.origin) { // from remote or undoManager
    //     if (e.changes.keys.size === 0) {
    //       // only work when undo
    //       e.changes.added.forEach((item) => {
    //         this._add(item.content.getContent()[0])
    //       })
    //       e.changes.deleted.forEach((item) => {
    //         const id = item.content.getContent()[0]
    //         this.remove(id)!
    //       })
    //     }
    //   }
    // })
  }

  bridgeDoc(doc: VirtualDocument<any>): void {
    observeDoc(this.find(doc.id)!)
    const { send } = useR(ChannelModel)

    doc.controller.ydoc.on('update', (update) => {
      send('doc_sync', update)
    })

    // const ydoc = doc.controller.ydoc
    // const wsProvider = new WebsocketProvider('ws://localhost:1234', doc.id, ydoc)
    // observeDoc(this.find(doc.id)!)
    // wsProvider.on('status', (event) => {
    //   if (event.status === 'connected')
    //     observeDoc(this.find(doc.id)!)
    // })
  }

  // add() {
  //   super.add()
  //   // 保持响应式
  //   const doc = this.docs[this.docs.length - 1]
  //   const c = new Controller()
  //   doc.bind(markRaw(c))
  //   this.bridgeDoc(doc)
  //   return doc
  // }

  // @Init
  // init() {
  //   this.active(this.add())
  //   this.bridge()

  //   window.addEventListener('beforeunload', () => {
  //     localStorage.setItem('alioth_doc_state', this.docToStr())
  //   })
  //   const lastRecord = localStorage.getItem('alioth_doc_state') && false
  //   if (lastRecord) {
  //     this.load(lastRecord)
  //     this.active(this.docs[0]?.id || this.add().id)
  //   }

  //   else {
  //     this.active(this.add().id)
  //   }
  // }
}
