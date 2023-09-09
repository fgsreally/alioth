import type { Component } from 'vue'
import type { DefaultEvent } from 'alioth-lib'
// register widget
export function $RW(category: string, key: string | symbol, component: Component, meta?: any) {
  window.$alioth_registerWidget?.(category, key, component, meta)
}

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

// register event
export function $RE(...events: DefaultEvent[]) {
  if (window.$alioth_registerEvent)
    events.forEach(window.$alioth_registerEvent)
}
// register header
export function $RH(...headers: { component: Component; label: string;handler: (params: { useLayer: any }) => void }[]) {
  if (window.$alioth_addHeader)
    headers.forEach(window.$alioth_addHeader)
}
