import { createCommand } from 'alioth-lib'
import { Global, Init, Tag, emitter, useR } from 'phecda-vue'
import { DocModel } from './doc'
const { registry, initialize, state } = createCommand({ undo: true, redo: true })

@Global
@Tag('command')
export class CommandModel {
  public state = state as any

  public registry = registry
  @Init
  init() {
    const { activeDoc } = useR(DocModel)
    // window.$alioth_registerCommand = registry
    registry({
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
