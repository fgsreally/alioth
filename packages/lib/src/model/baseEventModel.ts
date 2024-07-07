import { Init } from 'phecda-core'

// const { register, initialize, state } = createEventStack({ undo: true, redo: true })
// @Global
// @Tag('event')
// export class BaseEventModel {
//   public state = state as any
//   public register = register

//   constructor() {
//     initialize()

//     internal.addImport('event', (arg) => {
//       register(arg.data)
//     })
//   }
// }

export interface DefaultEvent {
  /** 命令名 */

  name: string
  execute: () => {
    /** 前进时执行的操作 */
    redo?(): void
    /** 撤回时执行的操作 */
    undo?(): void
  } | void
  /** 键盘 如 shift+y */

  keyboard?: string
  /** 初始化时执行的操作 */
  init?: () => () => void
  /** 是否压入栈，如为否，不参与撤回/前进 */

  pushQueue?: boolean
}

interface EventState<Event> {
  isActive: boolean
  // 索引、指针
  current: number
  // 记录栈
  queue: { redo: any; undo: any }[]
  commands: { [key in string]: () => void } // 命令
  commandArray: Event[]// 所有命令
  destroyArray: Function[]// 销毁任务
}

export abstract class BaseEventModel<Event extends DefaultEvent = DefaultEvent> {
  initialized = false

  state: EventState<Event> = {
    isActive: true,
    current: -1,
    queue: [],
    commands: {},
    commandArray: [],
    destroyArray: [],
  }

  redo = true

  undo = true

  constructor() {
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
      } as Event)
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
      } as Event)
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
  }

  @Init
  init() {
    if (this.initialized)
      return
    this.initialized = true

    const { state } = this
    this.state.commandArray.forEach(
      command => command.init && state.destroyArray.push(command.init()),
    )
  }

  register(command: Event) {
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

  destroy() {
    const { state } = this
    state.isActive && state.destroyArray.forEach(fn => fn && fn())
  }
}
