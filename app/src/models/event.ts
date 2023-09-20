import { BaseEventModel } from 'alioth-vue'
import { Init, emitter, useR } from 'phecda-vue'
import { DocModel } from './doc'

export class EventModel extends BaseEventModel {
  @Init
  init() {
    const { state } = this

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
        const { doc } = useR(DocModel)

        return {
          undo() {
            doc.controller.undo()
          },
          redo() {
            doc.controller.redo()
          },
        }
      },
    })
  }
}
