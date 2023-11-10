import { Global, Init, Tag } from 'phecda-vue'
import type { Component } from 'vue'
import { getWidget } from '../register'

export interface Header<C = any> {
  component: Component
  label: string
  handler: (ctx: C) => void
}
export interface Zone<C = any, P = any> {
  component: string
  label: string
  name: string
  isActive: (ctx: C) => boolean
  props: P
}
@Global
@Tag('view')
export class BaseViewModel<HeaderCtx = any, ZoneCtx = any, ZoneProps = any> {
  getWidget = getWidget
  componentMap: Record<string, Component> = {}

  headers: Header<HeaderCtx>[] = []

  zones: Zone<ZoneCtx, ZoneProps>[] = []

  addZone(zone: Zone<ZoneCtx, ZoneProps>) {
    if (this.zones.find(item => item.label === zone.label))
      return
    this.zones.push(zone)
  }

  addHeader(header: Header<HeaderCtx>) {
    if (this.headers.find(item => item.label === header.label))
      return

    this.headers.push(header)
  }

  @Init
  private _init() {
    window.$alioth_zone = (arg: Zone<ZoneCtx, ZoneProps>) => {
      this.addZone(arg)
    }
    window.$alioth_header = (arg: Header<HeaderCtx>) => {
      this.addHeader(arg)
    }
    window.$alioth_view = ({ key, component }: { key: string; component: Component }) => {
      this.componentMap[key] = component
    }
  }
}
