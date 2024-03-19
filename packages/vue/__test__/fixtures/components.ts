import { defineComponent, h } from 'vue'

export const Comp1 = defineComponent({
  props: {
    msg: String,
  },
  setup(props, ctx) {
    return () => {
      return h('h1', null, {
        default: () => {
          return [props.msg, ctx.slots.default!({ comp1: true })]
        },
      })
    }
  },
})

export const Comp2 = defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    return () => h('h2', null, {
      default: () => {
        return props.msg
      },
    })
  },
})
