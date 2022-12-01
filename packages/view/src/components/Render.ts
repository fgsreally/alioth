/* eslint-disable vue/one-component-per-file */
import { defineComponent } from 'vue'
import { getComponent } from '@alioth/engine'

export const PreviewBlock = defineComponent({
  name: 'PreviewBlock',
  props: {
    value: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    block: {
      type: Object,
    },
  },
  setup(props) {
    return () => {
      return props.value[props.type](props?.block)
    }
  },
})

export const RenderBlock = defineComponent({
  name: 'RenderBlock',
  props: {
    data: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'render',
    },
  },
  setup(props) {
    return () => {
      return props.data.map((item: any) => {
        return (getComponent(item.key) as any)[props.type](item)
      })
    }
  },
})
