import {
  Renderer,
  allComponentsList,
  createEditorConfig,
  defaultRegisterModule,
  getComponent,
  getModule,
} from '@alioth/engine'
import type { Component, VNode } from 'vue'
import { h } from 'vue'
import { cloneDeep, lowerFirst } from 'lodash-es'
import { useServiceState } from './../store/service'
import type { BlockType } from './init'
import { YuHengCodeGenerator } from '@/engine/code'
import { YuhengRenderer } from '@/engine/renderer'
import { filter, ctx as stateCtx } from '@/engine/filter'
import { parseComputed } from '@/utils/parser'
import { getBreakPointClass, toUnoClass } from '@/utils/style'
import { YUHENG_CONFIG } from '@/config'
import { ctx } from '@/engine/service'

export const libStore = createEditorConfig<RegisterComponent, RegisterModule>()
export const serviceStore = createEditorConfig()

const editorStore: { [key: string]: ReturnType<typeof createEditorConfig<RegisterComponent, RegisterModule>> } = {}

export function getEditorStore(key: string) {
  if (!editorStore[key])
    editorStore[key] = createEditorConfig<RegisterComponent, RegisterModule>()
  return editorStore[key]
}

// function isValid(key: string) {
//   return !(getComponent(key) || getModule(key))
// }

export function registerModule(
  category: string,
  key: string,
  module: any,
) {
  // if (!isValid(key)) {
  //   ElMessage.error(`已存在${key}`)
  //   return
  // }

  const RegisterCenter = getEditorStore(category)

  RegisterCenter.register({
    category,
    type: 'module',
    key,
    label: key,
    module,
  } as any)
}
export class YuhengRegister implements RegisterComponent {
  mapComp: Component
  realComp: Component
  type = 'component' as const

  constructor(
    public category: string,
    public key: string,
    public label: string,
    public comp: Component | [Component, Component],
    public allCompList: Map<string, YuhengRegister>,
    public propsData: any = {},
  ) {
    if (Array.isArray(this.comp)) {
      this.mapComp = this.comp[1]
      this.realComp = this.comp[0]
    }
    else {
      this.realComp = this.mapComp = this.comp
    }
  }

  text() {
    return h('p', this.key)
  }

  preview() {
    const renderer = new (YUHENG_CONFIG.renderer || YuhengRenderer)({}, this.mapComp)
    const node = renderer
      .main()
      .useClass('block_preview')
      .response(200, 500)
      .exec()
    return node as VNode
  }

  edit(Block: BlockType) {
    const renderer = new (YUHENG_CONFIG.renderer || YuhengRenderer)(Block, this.mapComp)

    let node
    if (!Array.isArray(this.comp)) {
      node = renderer
        // .useFilter(State.filter)
        .slot(Block.slots, allComponentsList, 'edit')
        .render(filter)
        .vif(stateCtx.state)
        .getSize()
        .addClass('innerBlock_edit')
        .addClass(getBreakPointClass(Block))
        .useSize()
        .draggable()
        .addClass(Block.layer > 1 ? 'slotBlock_edit' : 'block_edit')
        .useOffset()
        .editAction()
        .exec()
    }
    else {
      node = renderer
        .slot(['default'], allComponentsList, 'edit')
        .render(filter)
        .vif(stateCtx.state)
        .editAction()
        .exec()
    }

    return node as VNode
  }

  render(Block: any) {
    const renderer = new (YUHENG_CONFIG.renderer || YuhengRenderer)(Block, this.realComp)

    if (!Array.isArray(this.comp)) {
      return (
        renderer
          // .useFilter(State.filter)
          .slot(['default'], allComponentsList, 'render')
          .render(filter)
          .vif(stateCtx.state)
          .useClass(
            (Block.layer > 1 ? 'relative ' : 'absolute')
            + toUnoClass(Block, 'left')
            + toUnoClass(Block, 'top')
            + toUnoClass(Block, 'w')
            + toUnoClass(Block, 'h'),
          )
          // .useOffset()
          .renderAction(stateCtx.state, ctx.context, ctx.services)
          .exec() as VNode
      )
    }
    else {
      renderer
        .slot(['default'], allComponentsList, 'render')
        .render(filter)
        .renderAction(stateCtx.state, ctx.context, ctx.services)
        .mount()
      return null
    }
  }

  code(Block: BlockType) {
    const generator = new YuHengCodeGenerator(Block)

    const propsData = cloneDeep(Block.propsData)

    parseComputed(propsData)
    generator
      .useSlot(['default'], allComponentsList, 'code')
      .useTag(Block.key)
    Object.entries(propsData as any).forEach(([key, value]) => {
      generator.useProps(key, value)
    })
    Block.mutations.forEach(item => item.key && item.handler && generator.useProps(`@${lowerFirst(item.key)}`, item.handler))
    return generator.exec()
  }
}

export function registerComponent(
  category: string,
  key: string,
  comp: Component | [Component, Component],
  // propsData = {}
) {
  // if (!isValid(key)) {
  //   ElMessage.error(`已存在${key}`)
  //   return
  // }

  const RegisterCenter = getEditorStore(category)
  // const RegisterCenter = category === 'lib' ? libStore : serviceStore
  RegisterCenter.register(new (YUHENG_CONFIG.register || YuhengRegister)(category, key, key, comp, allComponentsList, {}) as any)
}

export function delModule(key: string) {
  const m = getModule<RegisterModule>(key) as RegisterModule
  if (m) {
    const center = getEditorStore(m.category)
    center.cancel(m.key)
  }
}

export function delComponent(key: string) {
  const m = getComponent<RegisterComponent>(key) as RegisterComponent
  if (m) {
    const center = getEditorStore(m.category)
    center.cancel(m.key)
  }
}

interface RegisterModule {
  category: string
  type: 'module'
  key: string
  label: string
  module: any
}
interface RegisterComponent {
  category: string
  comp: Component
  key: string
  label: string
  type: 'component'
  text: () => VNode
  code: (Block: any) => any
  preview: (width: number, height: number) => VNode
  render: (Block: any) => VNode | null
  edit: (Block: any) => VNode
}
