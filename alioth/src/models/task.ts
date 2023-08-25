import { createTaskStack } from 'alioth-lib'
import { Global, Init, Tag, emitter, useR } from 'phecda-vue'
import { DocModel } from './doc'
const { register, initialize, state } = createTaskStack({ undo: true, redo: true })

@Global
@Tag('task')
export class TaskModel {
  public state = state as any

  public register = register
  @Init
  init() {
    const { activeDoc } = useR(DocModel)
    window.$alioth_registerTask = register
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
