import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { VirtualDocument, VirtualNode } from 'alioth-lib'
import { getRenderFn, getWidget, interval } from './internal'

export const AliothRender = defineComponent({
  name: 'AliothRender',
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
    },

    doc: {
      type: Object as PropType<VirtualDocument<any>>,
      required: true,
    },
    node: {
      type: Object as PropType<VirtualNode<any>>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return getRenderFn(props.mode)!({ scope: interval.scope, doc: props.doc, node: props.node, widget: getWidget(props.node.attrs.key, props.mode)!, mode: props.mode || interval.mode })
    }
  },
})
