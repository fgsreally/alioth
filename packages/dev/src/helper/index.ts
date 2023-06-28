import type { Component } from 'vue'
import type { DefaultCommand } from 'alioth-lib'
// register widget
export function $RW(category: string, key: string | symbol, component: Component, meta?: any) {
  window.$alioth_registerWidget?.(category, key, component, meta)
}
// // register remote widget
// export async function $RRW(category: string, key: string | symbol, url: string,) {
//     const module = await import(url)
//     const meta = await module.addon()
//     window.$alioth_registerWidget?.(category, key, module.default, meta)
// }
// register method and state
export function $R(key: string, value: any, meta: any) {
  window.$alioth_register(key, value, meta)
}

// add view component
export function $V(key: string, component: Component) {
  window.$alioth_addView?.(key, component)
}

// add zone
export function $Z(zone: {
  component: string
  label: string
  name: string
  isActive: (...args: any) => boolean
  x: number
  y: number
  fix?: boolean
  transition: string
  props: any
}) {
  window.$alioth_addZone?.(zone)
}

// register Comand
export function $C(...commands: DefaultCommand[]) {
  if (window.$alioth_registerCommand)
    commands.forEach(window.$alioth_registerCommand)
}

export function $H(...headers: { class: string; label: string;handler: (params: { useLayer: any }) => void }[]) {
  if (window.$alioth_addHeader)
    headers.forEach(window.$alioth_addHeader)
}
