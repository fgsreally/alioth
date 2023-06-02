/* eslint-disable vue/one-component-per-file */
import { defineAsyncComponent, defineComponent, h } from 'vue'
import type { DefineComponent, PropType } from 'vue'
import type { NodeAttrs } from './document/node'
import type { BaseRegister } from './register'
import { getWidget } from './register'
import type { VirtualNode } from './document'
import { VirtualDocument } from './document'

export function createRenderComponent<N extends NodeAttrs, R extends BaseRegister<any>>(): DefineComponent<{ value: R; type: keyof R; node: VirtualNode<N> }> {
  return defineComponent({
    name: 'AliothRender',
    props: {
      value: {
        type: Object as PropType<R>,
      },
      type: {
        type: String as PropType<keyof R>,
        required: true,
      },
      node: {
        type: Object as PropType<VirtualNode<N>>,
      },
    },
    setup(props) {
      return () => {
        // @ts-expect-error it will work after creating register

        return props.value[props.type](props.node)
      }
    },
  }) as any
}

export const DocRender = defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
    jsonUrl: {
      type: String,
      required: true,
    },
    jsUrl: {
      type: String,
      required: true,
    },

  },
  setup({ jsUrl, jsonUrl, type }) {
    const doc = new VirtualDocument()
    const renderComp = defineAsyncComponent({
      loader: async () => {
        await import(jsUrl)
        const ret = await fetch(jsonUrl)
        doc.load(JSON.parse(await ret.json()))
        const root = doc.root
        const comp = createRenderComponent<any, any>()
        return () => root.children.map(node => h(comp, {
          value: getWidget(node.attrs.key),
          node,
          type,
        }))
      },
    })

    return () => h(renderComp)
  },

})
