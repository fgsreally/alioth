import { createCommand } from 'alioth-lib'
import { createFilter, useV } from 'phecda-vue'
import { DocState } from '@/models/doc'

export const { registry, initialize, state } = createCommand({ undo: true, redo: true })

const keyEvent = [

  {
    name: 'docAction',
    pushQueue: true,
    init() { // 初始化操作默认就会执行
      const { on, off } = useV(DocState)

      const action = () => {
        state.commands.docAction()
      }
      on('doc-action', action)
      return () => {
        off('doc-action', action)
      }
    },

    execute() {
      const { activeDoc } = useV(DocState)
      return {
        undo() {
          activeDoc.value.HC?.undo()
        },
        redo() {
          activeDoc.value.HC?.redo()
        },
      }
    },
  },

]
registry(keyEvent[0])
