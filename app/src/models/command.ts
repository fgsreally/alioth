import { Global, Tag, useR } from 'phecda-vue'
import { getWidget, interval } from 'alioth-lib'
import { DocModel } from './doc'
import { ConfigModel } from './config'
interface Event {
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
export class CommandModel {
  commands: Event[] = [
    {
      key: 'state',
      description: '查询状态',
      usage: 'state <key>',
      exec: () => {
        return interval.data
      },
    },
    {
      key: 'node',
      description: '此时选中的节点',
      usage: 'node',
      exec: () => {
        return useR(DocModel).activeNode?.attrs
      },
    },

    {
      key: 'container',
      description: '容器节点',
      usage: 'container',
      exec: () => {
        return useR(DocModel).container.attrs
      },
    },
    {
      key: 'widget',
      description: '物料相关',
      usage: 'widget <key>',
      exec: (key: string) => {
        return getWidget(key)
      },
      example: [
        {
          cmd: 'widget button',
          des: '查询button组件',
        },
      ],
    },

    {
      key: 'config-model',
      description: '获取ConfigModel对应的状态',
      usage: 'config-model',
      exec: () => {
        return useR(ConfigModel)
      },
    },
    {
      key: 'doc-model',
      description: '获取DocModel对应的状态',
      usage: 'doc-model',
      exec: () => {
        return useR(DocModel)
      },
    },
  ]

  register(command: Event) {
    this.commands.push(command)
  }

  input(key: string, arg?: any) {
    return this.commands.find(item => item.key === key)?.exec(arg)
  }
}
