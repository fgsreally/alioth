import { internal } from 'alioth-vue'
import { Global, Init, Tag } from 'phecda-vue'
import { SelectionModel } from './selection'

export interface Command {
  description: string
  exec: (...arg: any) => any
  key: string
  group?: string
  usage: string
  example?: {
    cmd: string
    des: string
  }[

  ]
}
@Global
@Tag('command')
export class CmdModel {
  commands: Command[] = [

    {
      key: 'node',
      description: '此时选中的节点',
      usage: 'node',
      exec: () => {
        return getR(SelectionModel).activeNodes
      },
    },

    {
      key: 'container',
      description: '页面节点',
      usage: 'container',
      exec: () => {
        return getR(SelectionModel).activePage
      },
    },
    {
      key: 'widget',
      description: '物料相关',
      usage: 'widget <key>',
      exec: (key: string) => {
        return internal.getStore('widget').getMeta(key)
      },
      example: [
        {
          cmd: 'widget button',
          des: '查询button组件',
        },
      ],
    },

  ]

  @Init
  private _init() {
    internal.registerImporter('cmd', ({ data }) => {
      this.register(data)
    })
  }

  register(command: Command) {
    this.commands.push(command)
  }

  input(key: string, arg?: any) {
    return this.commands.find(item => item.key === key)?.exec(arg)
  }
}
