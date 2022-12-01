import { cloneDeep, isUndefined } from 'lodash-es'
import { useCommand } from '@alioth/engine'
import mitt from 'mitt'
import type { Container } from '@/engine/init'
import { BlockType, instance } from '@/engine/init'

export const emitter = mitt<Record<string, any>>()

emitter.on('snapshot', (data) => {
  instance.load(data as Container)
  instance.$cancel(['clickBlock', 'hoverBlock'])
})

export const { registry, initialize, state } = useCommand({ undo: true })

export function emitEvent(key: string, value?: any) {
  emitter.emit(key, value)
}

function snapShot() {
  return cloneDeep(instance.data)
}

function snapshotInstance(before: Container) {
  return {
    undo() {
      emitter.emit('snapshot', before)
    },
  }
}

const keyEvent = [

  {
    keyboard: 'ctrl+x',
    pushQueue: true,
    name: 'shear',
    execute() {
      if (instance.clickBlock) {
        const before = snapShot()
        instance.$select(instance.clone(instance.clickBlock), 'storeBlock')
        instance.remove(instance.clickBlock)
        return snapshotInstance(before)
      }
      return {}
    },
  },
  {
    keyboard: 'ctrl+c',
    pushQueue: true,
    name: 'c',
    execute: () => {
      if (instance.clickBlock)
        instance.$select(instance.clone(instance.clickBlock), 'storeBlock')

      return {}
    },
  },

  {
    keyboard: 'ctrl+r',
    pushQueue: true,

    name: 'r',
    execute: () => {
      if (instance.clickBlock) {
        instance.clickBlock.x.value = 0
        instance.clickBlock.y.value = 0
      }
    },
  },
  {
    keyboard: 'ctrl+e',
    pushQueue: true,

    name: 'e',
    execute: () => {
      if (instance.clickBlock) {
        instance.$add(instance.storeBlock, 'clickBlock')
        instance.$select(instance.clickBlock, 'hoverBlock')
      }
    },
  },
  {
    keyboard: 'ctrl+v',
    pushQueue: true,
    name: 'v',
    execute: () => {
      if (instance.clickBlock)
        instance.$add(instance.clickBlock, 'clickBlock')

      return {
        redo() { },
      }
    },
  }, {
    name: 'drag',
    pushQueue: true,
    init() { // 初始化操作默认就会执行
      const start = () => {
        instance.keep(instance.clickBlock, ['top.value', 'left.value'])
      }
      const end = () => {
        state.commands.drag()
      }
      emitter.on('dragstart', start)
      emitter.on('dragend', end)
      return () => {
        emitter.off('dragstart', start)
        emitter.off('dragend', end)
      }
    },

    execute() {
      return {
        undo() {
          instance.back()
        },
      }
    },
  }, {
    name: 'transform',
    pushQueue: true,
    init() { // 初始化操作默认就会执行
      const start = () => {
        instance.keep(instance.clickBlock, ['w.value', 'h.value', 'top.value', 'left.value'])
      }
      const end = () => {
        state.commands.transform()
      }
      emitter.on('transform-start', start)
      emitter.on('transform-end', end)
      return () => {
        emitter.off('transform-start', start)
        emitter.off('transform-end', end)
      }
    },

    execute() {
      return {
        undo() {
          instance.back()
        },
      }
    },
  }, {
    name: 'import',
    pushQueue: true,
    before: null,
    init() { // 初始化操作默认就会执行
      const start = () => {
        this.before = snapShot()
      }
      const end = () => {
        state.commands.import()
      }
      emitter.on('import-start', start)
      emitter.on('import-end', end)
      return () => {
        emitter.off('import-start', start)
        emitter.off('import-end', end)
      }
    },

    execute() {
      return snapshotInstance(this.before as any)
    },
  }, {
    name: 'property',
    pushQueue: true,
    before: null,
    init() { // 初始化操作默认就会执行
      const update = (properties: string[] | { [key: string]: any }) => {
        instance.keep(instance.clickBlock, properties)
        state.commands.property()
      }
      emitter.on('property-change', update)
      return () => {
        emitter.off('property-change', update)
      }
    },

    execute() {
      return {
        undo() {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          isPropertyChange = true
          instance.back()
        },
      }
    },
  },
]

for (const i of keyEvent)
  registry(i)

let isPropertyChange = false

export function watchBasicProp(key: string) {
  watch(() => instance.clickBlock?.[key], (n, o) => {
    if (isPropertyChange)
      return isPropertyChange = false
    if (isUndefined(n) || isUndefined(o))
      return
    emitEvent('property-change', { [key]: o })
  })
}

export function watchArrayProp(key: string) {
  let arrayClone: any = []
  watch(() => instance.clickBlock?.[key], (n, o) => {
    if (isPropertyChange)
      return isPropertyChange = false
    if (isUndefined(n) || isUndefined(o))
      return
    emitEvent('property-change', { [key]: cloneDeep(arrayClone) })
    arrayClone = cloneDeep(n)
  }, { deep: true })
}

export function initEvent() {
  initialize()
  watchBasicProp('slot')
  watchBasicProp('vIf')
  watchBasicProp('vModel')
  watchArrayProp('mutations')
}
