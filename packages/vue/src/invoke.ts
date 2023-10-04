import { markRaw } from 'vue'
import type { Component } from 'vue'
import { interval } from './interval'
import type { BaseEngine } from './register'
import { getNamespace } from './register'
let isLoad = false

export async function init() {
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
    // eslint-disable-next-line new-cap
    getNamespace(category).register?.(markRaw(new interval.engine(category, key, component, meta)))
  }
  window.$alioth_widget = registerWidget
  window.$alioth_setEngine = setEngine
  window.$alioth_interval = interval
  window.$alioth_state = ({ key, value }: any) => {
    interval.setState(key, value)
  }

  isLoad = true
}

export function setEngine<R extends typeof BaseEngine<any, any>>(engine: R) {
  interval.engine = engine
}