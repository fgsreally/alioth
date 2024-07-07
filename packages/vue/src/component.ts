import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Scope, VirtualNode } from 'alioth-lib'
import { internal } from 'alioth-lib'

export const AliothRenderer = defineComponent({
  name: 'AliothRenderer',
  inheritAttrs: false,
  props: {
    node: {
      type: Object as PropType<VirtualNode<any>>,
      required: true,
    },

    mode: {
      type: String,
      required: true,
    },
    scope: {
      type: Object as PropType<Scope>,
      required: true,

    },
  },
  setup(props) {
    props.node.scope = props.scope
    return () => {
      const mode = props.mode
      const key = props.node.attrs.key
      const widget = internal.getStore('widget').getData(mode, key)
      const renderer = internal.getStore('renderer').getData(mode, key)

      return renderer({ node: props.node, widget, mode })
    }
  },
})
