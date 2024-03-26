import { Global, Init, Tag } from 'phecda-vue'
import type { Component } from 'vue'
import { internal } from 'alioth-lib'

export interface Icon<C = any> {
  component: Component
  label: string
  handler: (ctx: C) => void
}
export interface Zone<Meta = any> {
  component: string
  label: string
  name: string
  meta: Meta
}
@Global
@Tag('zone')
export class BaseZoneModel<Meta = any> {
  zones: Zone<Meta>[] = []
  components: Record<string, Component> = {}
  addZone(zone: Zone<Meta>) {
    if (this.zones.find(item => item.label === zone.label))
      return
    this.zones.push(zone)
  }

  addComponent(key: string, comp: Component) {
    this.components[key] = comp
  }

  @Init
  private init() {
    internal.zone = (arg: any) => {
      this.addZone(arg)
    }

    internal.component = (arg: any) => {
      this.addComponent(arg.key, arg.component)
    }
  }
}
