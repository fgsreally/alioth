import { Global, Init, Tag } from 'phecda-vue'
import { Internal } from 'alioth-vue'
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
  constructor(
    protected selection: SelectionModel,
    protected internal: Internal,

  ) {}

  commands: Command[] = [
    {
      key: 'node',
      description: '此时选中的节点',
      usage: 'node',
      exec: () => {
        return this.selection.activeNodes
      },
    },

    {
      key: 'container',
      description: '页面节点',
      usage: 'container',
      exec: () => {
        return this.selection.se
      },
    },
    {
      key: 'widget',
      description: '物料相关',
      usage: 'widget <key>',
      exec: (key: string) => {
        return this.internal.store('widget').getMeta(key)
      },
      example: [
        {
          cmd: 'widget button',
          des: '查询button组件',
        },
      ],
    },

  ]

  register(command: Command) {
    this.commands.push(command)
  }

  input(key: string, arg?: any) {
    return this.commands.find(item => item.key === key)?.exec(arg)
  }
}
