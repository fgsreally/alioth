import type { SizeType } from '@alioth/engine'
import { Engine } from '@alioth/engine'
import { YUHENG_CONFIG } from '@/config'

interface SizeProp { size: SizeType; value: number }
export interface BlockType {
  slots: string[]
  isMultiple: boolean
  vIf: null | string
  vModel: null | string
  slot?: string
  uuid: string
  key: string
  propsData: any
  left: SizeProp
  top: SizeProp
  class: string[]
  blocks: BlockType[]
  parent: string
  layer: number
  isReady: boolean
  w: SizeProp
  h: SizeProp
  mutations: { key: string | undefined; handler: string | undefined }[]
  snapshot: { [key: string]: any }
}

export interface Container {
  width: number
  height: number
  wLimit: [number, number]
  hLimit: [number, number]

  fontSize: number
  backgroundColor: string
  gridNum: number
  gridGap: number
  gridColor: string
  margin: number
  radius: number
  isContainer: boolean
  isFull: boolean
  isGrid: boolean

  blocks: BlockType[]
  mode: string
}

const data = Object.assign(
  YUHENG_CONFIG.container,
  {
    width: 640,
    height: 600,
    fontSize: 16,
    backgroundColor: '#ffff00',
    gridColor: '#ff00006b',
    gridNum: 10,
    gridGap: 20,
    margin: 0,
    radius: 0,
    isContainer: true,
    isFull: false,
    isGrid: true,
    mode: 'normal',
    blocks: [],
    wLimit: [375, 2000],
    hLimit: [600, 4000],
  },
  YUHENG_CONFIG.container,
)

export const instance = new Engine<
  BlockType,
  Container,
  {
    hoverBlock: BlockType | null
    clickBlock: BlockType | null
    storeBlock: BlockType | null
    container: Container
  }
>(data)

window.addEventListener('unload', () => {
  localStorage.setItem(
    'view-engine-playground:activePage',
    JSON.stringify(instance.data),
  )
})

