import { Tag } from 'phecda-core'

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

@Tag('command')
export abstract class BaseCommandModel {
  abstract commands: Command[]

  constructor() {
    window.$alioth_command = this.register.bind(this)
  }

  register(command: Command) {
    this.commands.push(command)
  }

  input(key: string, arg?: any) {
    return this.commands.find(item => item.key === key)?.exec(arg)
  }
}
