import { markRaw } from 'vue'
import type { Component } from 'vue'
import { interval } from './interval'
import type { RenderFn } from './register'
import { getNamespace, setRenderFn } from './register'
let isLoad = false
export async function init(mode: 'dev' | 'prod') {
  if (isLoad)
    return
  function registerWidget(
    { category, key, component, meta }: {
      category: string
      key: string | symbol
      component: Component
      meta?: any
    },
  ) {
    // @ts-expect-error is not a abstract

    getNamespace(category).register?.(markRaw({
      category, key, component, meta,
    }))
  }
  window.$alioth_mode = mode
  window.$alioth_widget = registerWidget
  window.$alioth_setRenderFn = ({ mode, fn }: { mode: string; fn: RenderFn }) => setRenderFn(mode, fn)
  window.$alioth_interval = interval
  window.$alioth_state = ({ key, value, meta }: any) => {
    interval.scope.add(key, { value, meta })
  }

  isLoad = true
}
