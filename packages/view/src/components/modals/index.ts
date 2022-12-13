import type { AliothModal } from '../../config'
import Props from '@/views/right-side/Props.vue'
import State from '@/views/right-side/State.vue'
import VState from '@/views/right-side/VState.vue'
import VSlot from '@/views/right-side/VSlot.vue'
import Property from '@/views/right-side/Property.vue'
import UnoClass from '@/components/helper/style/UnoClass.vue'
import SizeControl from '@/components/helper/style/SizeControl.vue'

export default {
  property: {
    component: Property,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  props: {
    component: Props,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  state: {
    component: State,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  vstae: {
    component: VState,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  vslot: {
    component: VSlot,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  uno: {
    component: UnoClass,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
  size: {
    component: SizeControl,
    label: '属性',
    isActive: (instance) => {
      return !!instance.clickBlock
    },
    x: 20,
    y: 30,
  },
} as { [key: string]: AliothModal }
