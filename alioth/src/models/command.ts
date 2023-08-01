import { createCommand } from 'alioth-lib'
import { Global, Init, Tag, useR, useV } from 'phecda-vue'
import { DocModel } from './doc'
const { registry, initialize, state } = createCommand({ undo: true, redo: true })

@Global
@Tag('command')
export class CommandModel {
  public state = state as any

  public registry = registry
  @Init
  init() {
    const { activeDoc, emitter } = useR(DocModel)
    // window.$alioth_registerCommand = registry
    registry({
      name: 'docAction',
      pushQueue: true,
      init() { // 初始化操作默认就会执行
        const action = () => {
          state.commands.docAction()
        }
        emitter.on('doc-action', action)
        return () => {
          emitter.off('doc-action', action)
        }
      },

      execute() {
        return {
          undo() {
            activeDoc.HC?.undo()
          },
          redo() {
            activeDoc.HC?.redo()
          },
        }
      },
    })
    initialize()
  }
}
