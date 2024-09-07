import { Global, Init, Tag, Unmount } from 'phecda-core'
import { Internal } from './internal'

export interface Action {
  /** 前进时执行的操作 */
  redo?(): void
  /** 撤回时执行的操作 */
  undo?(): void
}
export interface DefaultCommand {
  /** 命令名 */

  name: string
  execute: () => Action | void
  /** 键盘 如 shift+y */

  keyboard?: string
  /** 初始化时执行的操作 */
  init?: () => () => void
  /** 是否压入栈，如为否，不参与撤回/前进 */

  pushQueue?: boolean
}

interface CommandState<Command> {
  isActive: boolean
  // 索引、指针
  current: number
  // 记录栈
  queue: Action[]
  commands: { [key in string]: () => void } // 命令
  commandArray: Command[]// 所有命令
  destroyArray: Function[]// 销毁任务
}

@Global
@Tag('command')
export abstract class BaseCommandModel<Command extends DefaultCommand = DefaultCommand> {
  initialized = false

  protected state: CommandState<Command> = {
    isActive: true,
    current: -1,
    queue: [],
    commands: {},
    commandArray: [],
    destroyArray: [],
  }

  redo = true

  undo = true

  constructor(protected internal: Internal) {

  }

  @Init
  init() {
    if (this.initialized)
      return

    const { state } = this
    if (this.redo) {
      this.register({
        name: 'redo',
        keyboard: 'ctrl+y',
        execute() {
          const item = state.queue[state.current + 1]
          if (item) {
            item.redo && item.redo()
            state.current++
          }
        },
      } as Command)
    }

    if (this.undo) {
      this.register({
        name: 'undo',
        keyboard: 'ctrl+z',
        execute() {
          if (state.current === -1)
            return
          const item = state.queue[state.current]
          if (item) {
            item.undo && item.undo()
            state.current--
          }
        },
      } as Command)
    }

    const keyboardEvent = (() => {
      const onKeydowm = (e: KeyboardEvent) => {
        const { ctrlKey, key, altKey, shiftKey } = e
        // ctrl+z / ctrl+y
        let keyString: any = []
        if (altKey)
          keyString.push('alt')
        if (ctrlKey)
          keyString.push('ctrl')
        if (shiftKey)
          keyString.push('shift')
        keyString.push(key.toLowerCase())

        keyString = keyString.join('+')
        state.commandArray.forEach(({ keyboard, name }) => {
          if (!keyboard)
            return // 没有键盘事件
          if (keyboard === keyString) {
            state.commands[name]()
            e.preventDefault()
          }
        })
      }

      const init = () => {
        // 初始化事件
        window.addEventListener('keydown', onKeydowm)
        return () => {
          // 销毁事件
          window.removeEventListener('keydown', onKeydowm)
        }
      }
      return init
    })()

    state.destroyArray.push(keyboardEvent())

    this.internal.registerImporter('command', ({ key, data }) => {
      this.register({ ...data, name: key })
    })
    this.initialized = true

    this.state.commandArray.forEach(
      command => command.init && state.destroyArray.push(command.init()),
    )
  }

  register(command: Command) {
    const { state } = this

    if (command.name in state.commands)
      return

    if (this.initialized && command.init)
      state.destroyArray.push(command.init())

    state.commandArray.push(command)
    state.commands[command.name] = () => {
      // 命令名字对应执行函数
      const { redo, undo } = command.execute() || {}
      if (!command.pushQueue)
        return

      let { queue, current } = state
      if (queue.length > 0) {
        queue = queue.slice(0, current + 1)
        state.queue = queue
      }
      queue.push({
        redo,
        undo,
      })
      state.current = current + 1
    }
  }

  // 如果有些操作不希望注册为一个命令，但希望能撤销重做，可以手动添加
  addAction(action: Action) {
    const { state } = this
    state.queue.push(action)
    state.current = state.current + 1
  }

  @Unmount
  destroy() {
    const { state } = this
    state.isActive && state.destroyArray.forEach(fn => fn && fn())
  }
}
