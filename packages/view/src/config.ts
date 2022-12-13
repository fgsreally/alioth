import type { Component } from 'vue'
import type { Preset } from '@unocss/core'
import type { Container, instance } from '@/engine/init'
import { YuHengCodeGenerator, YuhengRegister, YuhengRenderer } from '@/engine'
import { addBlock } from '@/engine/block'
import AliothModals from '@/components/modals'
export interface AliothModal {
  component: Component
  label: string
  isActive: (i: typeof instance) => boolean
  x: number
  y: number
}

export const YUHENG_CONFIG: any = {
  addBlock,
  Register: YuhengRegister,
  Renderer: YuhengRenderer,
  Code: YuHengCodeGenerator,
  Presets: [] as string[],
  Container: {} as Partial<Container>,
  Modals: AliothModals,
  previewConfig: [
    {
      key: 'local',
      type: 'preview',
      label: '本地组件',

    }, {
      key: 'lib',
      type: 'text',
      label: '库组件',
    },

  ],
}

export function setContainer(containerConf: Partial<Container>) {
  YUHENG_CONFIG.Container = containerConf
}

export function setRenderer<Render extends YuhengRenderer>(render: Render) {
  YUHENG_CONFIG.Renderer = render
}

export function setRegister<Register extends YuhengRegister>(regis: Register) {
  YUHENG_CONFIG.Register = regis
}

export function setAppendBlock(addBlock: (module: any, e: MouseEvent) => void) {
  YUHENG_CONFIG.addBlock = addBlock
}
export function setCodeGen<Code extends YuHengCodeGenerator>(codeGen: Code) {
  YUHENG_CONFIG.Code = codeGen
}

export function setPreset(presets: Preset[]) {
  if (!window.__unocss)
    window.__unocss = {}

  window.__unocss.presets = presets
  YUHENG_CONFIG.presets = presets
}

export function setPreviewConfig(conf: {
  key: string
  type: string
  label: string
  [other: string]: any
}[]) {
  YUHENG_CONFIG.previewConfig = conf
}
