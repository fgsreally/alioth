import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Scope, VirtualNode } from 'alioth-lib'
import { Internal } from 'alioth-lib'
import { useR } from 'phecda-vue'

export const AliothRenderer = defineComponent({
  name: 'AliothRenderer',
  inheritAttrs: false,
  props: {
    node: {
      type: Object as PropType<VirtualNode<any>>,
      required: true,
    },

    renderer: {
      type: String,
      required: true,
    },
    scope: {
      type: Object as PropType<Scope>,
      required: true,

    },
  },
  setup(props) {
    // props.node.scope = props.scope

    const internal = useR(Internal)
    const key = props.node.attrs.key

    const widget = internal.store('widget').getData(key)

    const renderer = internal.store('renderer').getData(props.renderer)
    return () => {
      return renderer({ node: props.node, widget, scope: props.scope })
    }
  },
})
