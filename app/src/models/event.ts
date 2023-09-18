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
        console.log('init')
        const action = () => {
          state.commands.nodeAction()
        }
        emitter.on('alioth:node-action', action)
        return () => {
          emitter.off('alioth:node-action', action)
        }
      },

      execute() {
        const { activeDoc } = useR(DocModel)

        return {
          undo() {
            console.log(activeDoc.controller)
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
