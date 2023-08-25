import { Global, Tag } from 'phecda-vue'
interface Command {
  description: string
  exec: (...arg: any) => any
  meta?: any
}
@Global
@Tag('command')
export class CommandModel {
  commands: Record<string, Command> = {}

  register(key: string, command: Command) {
    this.commands[key] = command
  }

  input(key: string, arg?: any) {
    this.commands[key].exec(arg)
  }
}
