import { defineComponent, onUpdated } from 'vue'
import type { DefineComponent, PropType } from 'vue'
import type { NodeAttrs, VirtualNode } from 'alioth-lib'
import { type BaseRegister } from './register'

export function createRenderComponent<N extends NodeAttrs, R extends BaseRegister<any>>(): DefineComponent<{ value: R; type: keyof R; node?: VirtualNode<N> }> {
  return defineComponent({
    name: 'AliothRender',
    inheritAttrs: false,
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
        required: false,
      },
    },
    setup(props) {
      console.log(props)

      onUpdated(() => {
        console.log('update')
      })
      return () => {
        // @ts-expect-error it will work after creating register
        return props.value[props.type](props.node)
      }
    },
  }) as any
}
