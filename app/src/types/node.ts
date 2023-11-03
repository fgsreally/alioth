export interface NodeAttrs {
  slot: string
  key: string
  label: string
  index: string
  propsData: any
  class: string[]
  level: number
  top: number
  left: number
}

export interface RootAttrs {
  width: number
  height: number
  fontSize: number
  backgroundColor: string
  gridColor: string
  gridNum: number
  gridGap: number
  margin: number
  radius: number
  isContainer: boolean
  isFull: boolean
  isGrid: boolean
  mode: number

  wLimit: [number, number]
  hLimit: [number, number]
}

export type AliothAttrs = NodeAttrs | RootAttrs
