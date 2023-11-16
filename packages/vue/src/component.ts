import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { VirtualNode } from 'alioth-lib'
import { interval } from './interval'
import { getRenderFn } from './register'

export const AliothRender = defineComponent({
  name: 'AliothRender',
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      required: true,
    },
    node: {
      type: Object as PropType<VirtualNode<any>>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return getRenderFn(props.mode)!({ scope: interval.scope, node: props.node, widget: interval.widgetMap.get(props.node.attrs.key)! })
    }
  },
})
