import { createEventStack } from 'alioth-lib'
import { Global, Init, Tag, emitter, useR } from 'phecda-vue'
import { DocModel } from './doc'
const { register, initialize, state } = createEventStack({ undo: true, redo: true })

@Global
@Tag('event')
export class EventModel {
  public state = state as any
  public register = register
  @Init
  init() {
    const { activeDoc } = useR(DocModel)
    window.$alioth_registerEvent = register
    register({
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
    initialize()
  }
}
