import type { Component } from 'vue'
import { type BaseRegister, getNamespace } from './register'
import { interval } from './interval'
import type { BaseDocModel } from './model'

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
    getNamespace(category).register?.(new interval.register(category, key, comp, meta))
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

export async function load(docModel: BaseDocModel<any>, url: string) {
  const ret = await fetch(url)
  const res = await ret.json()
  docModel.load(res.docs)

  await Promise.all(res.presets.map(loadDependence))
  return res
}

export function loadDependence(url: string) {
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
