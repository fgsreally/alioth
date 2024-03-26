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
      const { widgetStore, renderFnStore } = internal
      const widget = widgetStore.get(mode, key)
      const renderFn = renderFnStore.get(mode, key)

      return renderFn({ node: props.node, widget, mode })
    }
  },
})
