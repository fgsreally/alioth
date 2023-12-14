import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { VirtualNode } from 'alioth-lib'
import { getRenderFn, getWidget, interval } from './interval'

export const AliothRender = defineComponent({
  name: 'AliothRender',
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
    },
    node: {
      type: Object as PropType<VirtualNode<any>>,
      required: true,
    },
  },
  setup(props) {
    console.log(props)
    return () => {
      return getRenderFn(props.mode)!({ scope: interval.scope, node: props.node, widget: getWidget(props.node.attrs.key, props.mode)!, mode: props.mode || interval.mode })
    }
  },
})
