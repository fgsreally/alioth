import { BaseCommandModel, Internal } from 'alioth-vue'
import { Init, Injectable } from 'phecda-vue'
import { DocModel } from './doc'

@Injectable()
export class CommandModel extends BaseCommandModel {
  constructor(
    protected internal: Internal,
    protected doc: DocModel,

  ) {
    super(internal)
  }

  init() {
    super.init()
    this.register({
      name: 'nodeAction',
      pushQueue: true,
      init: () => { // 初始化操作默认就会执行
        const action = () => {
          console.log('action')
          this.state.commands.nodeAction()
        }
        this.doc.controller.on('init', action)
        return () => {
          this.doc.controller.on('init', action)
        }
      },

      execute: () => {
        return {
          undo: () => {
            console.log('undo')
            this.doc.controller.undo()
          },
          redo: () => {
            this.doc.controller.redo()
          },
        }
      },
    })
  }
}
