import { BaseEventModel } from 'alioth-vue'
import { Global, Init, emitter, useR } from 'phecda-vue'
import { DocModel } from './doc'

@Global

export class EventModel extends BaseEventModel {
  @Init
  init() {
    const { state } = this
    const { activeDoc } = useR(DocModel)
    this.register({
      name: 'nodeAction',
      pushQueue: true,
      init() { // 初始化操作默认就会执行
        const action = () => {
          state.commands.nodeAction()
        }
        emitter.on('alioth:node-action', action)
        return () => {
          emitter.off('alioth:node-action', action)
        }
      },

      execute() {
        return {
          undo() {
            activeDoc.controller.undo()
          },
          redo() {
            activeDoc.controller.redo()
          },
        }
      },
    })
  }
}
