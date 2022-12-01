import type { Component } from 'vue'
export interface defaultContainerState<Screen extends string> {
  isEdit: boolean
  isFull: boolean
  isGrid: boolean
  isHelperLine: boolean
  isHelper: boolean
  screen: Screen
  curContainer: any
}
export interface defaultActState<BlockType, DataState> {
  clickBlock: null | BlockType
  hoverBlock: null | BlockType
  storeBlock: null | BlockType
  container: DataState
}

export interface nodeState<BlockType> {
  blocks: BlockType[]
}

export interface baseBlock {
  uuid: string
  parent: string
  key: string
}
export type basicBlock<BlockType> = baseBlock & { blocks: BlockType[] }

export type inputBlock<BlockType> = Omit<BlockType, 'parent'> & {
  parent?: string
  // propsData: any;
}

export interface standardBlock<BlockType> {
  parent?: string // 默认parent=''时本节点为未挂载节点，为'1'时即父节点为根节点
  slot: string // use in renderer
  key: string
  propsData: any
  uuid: string
  blocks: BlockType[]
}

export interface vBlock {
  vIf: { value: boolean; required: boolean }
  vShow: { value: boolean; required: boolean }
  vFor: { value: number; required: boolean }
}

export interface defaultDecorator {
  comp: Component
  propsData: any
  dirct: string
}

export type CompList<RegisterBlock> = Map<string, RegisterBlock>

export interface defaultRegisterComponent {
  type: 'component'
  comp: Component
  key: string
}

export interface defaultRegisterModule {
  key: string

  type: 'module'
  module: any
}

export interface registerCenter<RegisterComponent> {
  componentList: RegisterComponent[]
  register(module: RegisterComponent): void
}

export interface EngineConfig {
  actionBlocks?: string[]
  containerConfig?: { [key in string]: any }
  snapshotList?: string[]
  historyLength?: number
  allowFullHistory?: boolean
  allowCustomRecord?: boolean
}

export interface lineData {
  startNode: string
  endNode: string
}

export interface pointData {
  x: number
  y: number
}

export interface ComputeGetter {
  get?: (v: any) => any
  set?: (v: any) => any
}
