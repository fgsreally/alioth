/* eslint-disable no-async-promise-executor */
import type { Component } from 'vue'
import { type BaseRegister, getNamespace } from './register'
import { interval } from './interval'

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
    getNamespace(category).register?.(new interval.register(category, key, component, meta))
  }
  window.$alioth_widget = registerWidget
  window.$alioth_setRegister = setRegister
  window.$alioth_interval = interval
  window.$alioth_state = ({ key, value }: any) => {
    interval.setState(key, value)
  }

  isLoad = true
}

export function setRegister<R extends typeof BaseRegister<any, any>>(Register: R) {
  interval.register = Register
}

export async function loadJSON(url: string) {
  const ret = await fetch(url)
  return ret.json()
}

export function loadPresets(presets: string[]) {
  return Promise.all(presets.map((url) => {
    if (url.endsWith('.css')) {
      const css = document.createElement('link')
      css.href = url
      css.rel = 'stylesheet'
      css.type = 'text/css'
      document.head.appendChild(css)
      return new Promise((resolve, reject) => {
        css.onload = resolve
        css.onerror = reject
      })
    }
    else {
      return new Promise(async (resolve, reject) => {
        try {
          const module = await import(/** @vite-ignore */url)
          for (const key in module) {
            const exports = module[key]
            if (typeof exports === 'object' && exports.alioth)
            // @ts-expect-error trigger window property/event
              window[`$alioth_${exports.alioth}`]?.(exports.data)
          }
          resolve(module)
        }
        catch (e) {
          reject(url)
        }
      })
    }
  }))
}
export function loadStyleOrScript(url: string) {
  if (url.endsWith('.css')) {
    const css = document.createElement('link')
    css.href = url
    css.rel = 'stylesheet'
    css.type = 'text/css'
    document.head.appendChild(css)
    return new Promise((resolve, reject) => {
      css.onload = resolve
      css.onerror = reject
    })
  }
  else {
    return import(/** @vite-ignore */url)
  }
}
