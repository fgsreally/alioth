import type { NodeAttrs } from 'alioth-vue'
import { Init, emitter, useO } from 'phecda-vue'
import { BaseDocModel, Controller, interval, observeDoc } from 'alioth-vue'
import { EventModel } from './event'

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

  add() {
    emitter.emit('alioth:node-action', null)

    return super.add()
  }

  remove(id: string) {
    emitter.emit('alioth:node-action', null)

    return super.remove(id)
  }

  @Init
  init() {
    useO(EventModel)
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('alioth_doc_state', JSON.stringify({
        data: this.toJSON(),
        activeId: this.activeId,
      }))
    })
    this.doc.bind(markRaw(new Controller()))
    observeDoc(this.doc)

    // const wsProvider = new WebsocketProvider('ws://localhost:1234', 'alioth', this.doc.controller.ydoc)
    // const lastRecord = localStorage.getItem('alioth_doc_state')
    // if (lastRecord) {
    //   const { data, activeId } = JSON.parse(lastRecord)

    //   emitter.emit('alioth:node-action', null)
    //   this.load(data)
    //   this.active(activeId)
    // }
    // interval.scope.add('$doc', this)
  }
}
