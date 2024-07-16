import { defineComponent, getCurrentInstance, provide } from 'vue'
import type { PropType } from 'vue'
import { Internal, Scope, VirtualNode } from 'alioth-lib'

import { useR } from 'phecda-vue'
import { Renderer } from '../core'

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
    state: {
      type: Object as PropType<Record<string, any>>,
    },
    environment: {
      type: String,
      default: 'production',
    },
  },
  setup(props) {
    provide('alioth', props)
    const { store } = useR(Internal)
    const appContext = getCurrentInstance()!.appContext
    return () => {
      const key = props.node.attrs.key
      const widget = store('widget').getData(key)
      const renderer = store('renderer').getData(props.renderer) as Renderer
      return renderer({ node: props.node, widget, scope: new Scope(props.state || store('state').data), renderer: props.renderer, environment: props.environment, appContext })
    }
  },
})
