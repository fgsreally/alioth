import type { Component } from 'vue'
import { type BaseRegister, getEditorStore } from './register'
import { interval } from './interval'

let isLoad = false

export async function init() {
  if (isLoad)
    return
  function registerWidget(
    category: string,
    key: string | symbol,
    comp: Component,
    meta?: any,
  ) {
    // @ts-expect-error is not a abstract
    // eslint-disable-next-line new-cap
    getEditorStore(category).register?.(new interval.register(category, key, comp, meta))
  }
  window.$alioth_registerWidget = registerWidget
  window.$alioth_setRegister = setRegister
  window.$alioth_interval = interval
  window.$alioth_register = interval.setState.bind(interval)

  isLoad = true
}

export function setRegister<R extends typeof BaseRegister<any, any>>(Register: R) {
  interval.register = Register
}

export async function loadDoc(url: string) {
  const ret = await fetch(url)

  return await ret.json()
}

export function loadPreset(urls: string[]) {
  return Promise.all(urls.map(async (url) => {
    if (url.endsWith('.css')) {
      const css = document.createElement('link')
      css.href = url
      css.rel = 'stylesheet'
      css.type = 'text/css'
      document.head.appendChild(css)
      return Promise.resolve()
    }
    else {
      return import(/** @vite-ignore */url)
    }
  }))
}
