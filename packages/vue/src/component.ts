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
    props.node.scope = props.scope
    return () => {
      const key = props.node.attrs.key
      const widget = internal.getStore('widget').getData(key)
      const renderer = internal.getStore('renderer').getData(props.renderer)
      console.log(renderer, props.renderer)
      return renderer({ node: props.node, widget })
    }
  },
})
