import { createApp, defineAsyncComponent, defineComponent, h, ref } from 'vue'

export function remoteComponent(url: string) {
  return defineAsyncComponent(() => import(/* @vite-ignore */url))
}

export function baseComponent(url: string) {
  return defineComponent({
    setup() {
      const comp = remoteComponent(url)
      const props = ref({})

      async function getProps() {
        try {
          const { test } = await import(/* @vite-ignore */url)
          props.value = test
        }
        catch (E) {
          console.error(E)
        }
      }

      getProps()

      return () => {
        return h(comp, { ...props.value })
      }
    },
  })
}

export function baseRenderer() {
  createApp(baseComponent(window.location.hash.slice(1))).mount('#app')
}
