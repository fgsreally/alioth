import { Global, Init, Tag } from 'phecda-vue'
import type { Component } from 'vue'
import { getWidget } from '../register'

export interface Header<P> {
  component: Component
  label: string
  handler: (param: P) => void
}
export interface Zone<P> {
  component: string
  label: string
  name: string
  isActive: (param: P) => boolean
  x: number
  y: number
  fix?: boolean
  transition: string
  props: any
}
@Global
@Tag('view')
export abstract class BaseViewModel<H, Z> {
  getWidget = getWidget
  abstract componentMap: Record<string, Component>

  abstract headers: Header<H>[]

  abstract zones: Zone<Z>[]

  addZone(zone: Zone<Z>) {
    this.zones.push(zone)
  }

  addHeader(header: Header<H>) {
    this.headers.push(header)
  }

  @Init
  private _init() {
    window.$alioth_zone = (arg: Zone<Z>) => {
      this.addZone(arg)
    }
    window.$alioth_header = (arg: Header<H>) => {
      this.addHeader(arg)
    }
    window.$alioth_view = ({ key, component }: { key: string; component: Component }) => {
      this.componentMap[key] = component
    }
  }
}
