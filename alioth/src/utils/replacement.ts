import { VirtualNode } from 'alioth-lib'
import { instance } from '@/engine/init'

export function createReplaceBlock(slots: string[]) {
  return slots.map((slot) => {
    return new VirtualNode('border', {
      slot,
      key: 'border',
      label: 'border',
      class: [],
      level: 2,
      propsData: { name: slot, hover: false },

    })
  })
}
