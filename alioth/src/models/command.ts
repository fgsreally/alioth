import { createCommand } from 'alioth-lib'
import { Global, Init, Tag, useV } from 'phecda-vue'
import { DocModel } from './doc'
const { registry, initialize, state } = createCommand({ undo: true, redo: true })

@Global
@Tag('command')
export class CommandModel {
  public state = state as any

  public registry = registry
  @Init
  init() {
    const { activeDoc, on, off } = useV(DocModel)
    // window.$alioth_registerCommand = registry
    registry({
      name: 'docAction',
      pushQueue: true,
      init() { // 初始化操作默认就会执行
        const action = () => {
          state.commands.docAction()
        }
        on('doc-action', action)
        return () => {
          off('doc-action', action)
        }
      },

      execute() {
        return {
          undo() {
            activeDoc.value.HC?.undo()
          },
          redo() {
            activeDoc.value.HC?.redo()
          },
        }
      },
    })
    initialize()
  }
}
