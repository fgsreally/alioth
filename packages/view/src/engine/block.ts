import { nanoid } from 'nanoid'
import { instance } from '@/engine/init'
export function addBlock(module: any, e: MouseEvent) {
  const layer = instance.hoverBlock ? instance.hoverBlock.layer + 1 : 1
  if (instance.hoverBlock?.slots.length === 0)
    return
  instance.add(
    {
      isMultiple: false,
      blocks: [],
      vIf: null,
      vModel: null,
      propsData: module.propsData,
      key: module.key,
      class: [],
      uuid: `view_${nanoid(4)}`,
      left: { size: 'px', value: layer === 1 ? e.offsetX : 0 },
      top: { size: 'px', value: layer === 1 ? e.offsetY : 0 },
      slot: 'default',
      slots: ['default'],
      layer,
      mutations: [],
      isReady: false,
      snapshot: {},
    },
    instance.hoverBlock ? instance.hoverBlock : '1',
  )
}
