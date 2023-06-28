import { Global, Init, Tag } from 'phecda-vue'
import type { Component } from 'vue'
import componentMap from '@/components/base'
import { useLayer } from '@/composables/layer'
import PreviewRenderVue from '@/views/preview/PreviewRender.vue'
import { Register } from '@/engine/register'
import { renderer } from '@/engine/renderer'

interface Header {
  class: string
  label: string
  handler: (param: { useLayer: typeof useLayer }) => void
}
interface Zone {
  component: string
  label: string
  name: string
  isActive: (...args: any) => boolean
  x: number
  y: number
  fix?: boolean
  transition: string
  props: any
}
@Global
@Tag('config')
export class ConfigState {
  componentMap = markRaw(
    componentMap,
  ) as Record<string, Component>

  register = Register
  render = renderer

  public previewConfig = [
    {
      key: 'local',
      type: 'preview',
      label: '本地组件',

    },
    {
      key: 'lib',
      type: 'text',
      label: '库组件',
    },
  ]

  public headers: Header[] = [
    {
      label: '实时预览',
      class: 'i-lucide:eye',
      handler() {
        useLayer(PreviewRenderVue, {}, { title: '预览页面' })
      },
    },

  ]

  public zones: Zone[] = [

    {
      component: 'Uno',
      label: '样式',
      name: 'class',
      isActive: ({ instance }) => !!instance?.activeNode,
      x: 800,
      y: 400,
      transition: 'right',
      props: {},
    },
    {
      component: 'Property',
      label: '组件property',
      name: 'Property',
      isActive: ({ instance }) => {
        return !!instance?.activeNode
      },
      x: 600,
      y: 600,
      transition: 'left',
      props: {},
    },
    {
      component: 'Events',
      label: '组件events',
      name: 'events',
      isActive: ({ instance }) => {
        // return !!instance?.activeNode
        return false
      },
      x: 600,
      y: 600,
      transition: 'bottom',
      props: {},
    },

  ]

  addZone(zone: Zone) {
    this.zones.push(zone)
  }

  addHeader(header: Header) {
    this.headers.push(header)
  }

  @Init
  async init() {
    window.$alioth_addZone = (arg: Zone) => {
      this.addZone(arg)
    }

    window.$alioth_addHeader = (arg: Header) => {
      this.addHeader(arg)
    }
    window.$alioth_addView = (key: string, component: Component) => {
      this.componentMap[key] = component
    }
  }
}
