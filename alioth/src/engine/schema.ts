export interface NodeSchema {
  slot: string
  key: string
  label: string
  index:string
  propsData: any
  class: string[]
  level: number
  vIf: string
  top: { value: number; size: 'px' }
  left: { value: number; size: 'px' }
}

export interface RootSchema {
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
