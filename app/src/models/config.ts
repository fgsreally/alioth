import { Global, Init, Tag, emitter, useR, useV } from 'phecda-vue'
import type { Component } from 'vue'
import { getWidget, loadDependence } from 'alioth-lib'
import { DocModel } from './doc'
import { ImportModel } from './import'
import { componentMap } from '@/views/zones'
import { useLayer } from '@/composables/layer'
import PreviewRenderVue from '@/views/preview/PreviewRender.vue'
import IconEye from '~icons/lucide/eye'
import IconDownload from '~icons/lucide/download'
import { getQuery } from '@/utils/url'
import { download } from '@/utils/download'
// import { presets } from '@/config'

interface Header {
  component: Component
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
export class ConfigModel {
  componentMap = componentMap as Record<string, Component>
  getWidget = getWidget

  // public previewConfig = [
  //   {
  //     key: 'local',
  //     type: 'preview',
  //     label: '本地组件',

  //   },
  //   {
  //     key: 'lib',
  //     type: 'text',
  //     label: '库组件',
  //   },
  //   {
  //     key: 'element-plus',
  //     type: 'text',
  //     label: 'element-plus',
  //   },
  // ]

  public headers: Header[] = [
    {
      label: '实时预览',
      component: IconEye,
      handler() {
        useLayer(PreviewRenderVue, {}, { title: '预览页面' })
      },
    },

    {
      label: '下载',
      component: IconDownload,
      handler() {
        const { dependences, presets } = toRaw(useR(ConfigModel))
        download('data.json', JSON.stringify({
          docs: useV(DocModel).toJSON(),
          dependences,
          presets,
        }))
      },
    },
  ]

  public zones: Zone[] = [

    {
      component: 'Property',
      label: '组件property',
      name: 'Property',
      isActive: ({ instance }) => {
        return !!instance?.activeNode
      },
      props: {
        type: 'props',
      },
      x: 600,
      y: 600,
      transition: 'left',

    },
    {
      component: 'Terminal',
      label: '中断',
      name: 'terminal',
      isActive: () => true,
      props: {
      },
      x: 100,
      y: 300,
      transition: 'left',

    },
    {
      component: 'Property',
      label: '事件',
      name: 'Event',
      isActive: ({ instance }) => {
        return !!instance?.activeNode
      },
      props: {
        type: 'events',
      },
      x: 600,
      y: 600,
      transition: 'left',

    },
    {
      component: 'ImportList',
      label: '引入',
      name: 'importFunc',
      props: {

      },
      isActive: () => true,
      x: 0,
      y: 580,
      transition: 'bottom',
    },
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
    // {
    //   component: 'Property',
    //   label: '组件property',
    //   name: 'Property',
    //   isActive: ({ instance }) => {
    //     return !!instance?.activeNode
    //   },
    //   x: 600,
    //   y: 600,
    //   transition: 'left',
    //   props: {},
    // },
    {
      component: 'Events',
      label: '组件events',
      name: 'events',
      isActive: () => {
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
    window.$alioth_zone = (arg: Zone) => {
      this.addZone(arg)
    }

    window.$alioth_header = (arg: Header) => {
      this.addHeader(arg)
    }
    window.$alioth_view = ({ key, component }: { key: string; component: Component }) => {
      this.componentMap[key] = component
    }
  }
}