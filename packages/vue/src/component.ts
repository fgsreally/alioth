import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Scope, VirtualNode } from 'alioth-lib'
import { internal } from './internal'

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
    return () => {
      const mode = props.mode
      const key = props.node.attrs.key
      const widget = internal.widgetStore.get(mode)[key]
      const renderFn = internal.renderFnStore.get(mode)[key]
      return renderFn({ scope: props.scope, node: props.node, widget })
    }
  },
})
