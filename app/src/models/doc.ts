import type { NodeAttrs, VirtualDocument } from 'alioth-vue'
import { Init, useV } from 'phecda-vue'
import { BaseDocModel, Controller, interval, observeDoc } from 'alioth-vue'
import { ChannelModel } from './channel'
// // @ts-expect-error miss types
// import { WebsocketProvider } from 'y-websocket'

export class DocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  containerAttrs = markRaw(
    {
      title: '11',
      key: 'root',
      page: true,
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
    },
  )

  connectSandBox = false
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

    // const ydoc = doc.controller.ydoc
    // const wsProvider = new WebsocketProvider('ws://localhost:1234', doc.id, ydoc)
    // observeDoc(this.find(doc.id)!)
    // wsProvider.on('status', (event) => {
    //   if (event.status === 'connected')
    //     observeDoc(this.find(doc.id)!)
    // })
  }

  @Init
  init() {
    interval.setState('$doc', this)
    this.doc.bind(markRaw(new Controller()))
    observeDoc(this.doc)
  }

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
