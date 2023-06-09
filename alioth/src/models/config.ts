import { Global, Init, Tag, Watcher } from 'phecda-vue'
import type { Component } from 'vue'
import { dynamicLoad } from '@/utils/dynamicImport'
import componentMap from '@/components/base'

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
  hostUrl!: string
  componentMap = markRaw(
    componentMap,
  ) as Record<string, Component>

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

  zones: Zone[] = [
    // {
    //   component: 'Props',
    //   label: '组件props',
    //   name: 'props',
    //   isActive: ({ instance }) => !!instance?.activeNode,
    //   x: 300,
    //   y: 200,
    //   transition: 'left',
    //   props: {},
    // },
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
    {
      component: 'Tree',
      label: 'model tree',
      name: 'tree',
      fix: true,
      isActive: () => true,
      x: 1100,
      y: 50,
      transition: 'right',
      props: {},
    },

  ]

  addZone(fb: Zone) {
    this.zones.push(fb)
  }

  @Init
  init() {
    window.$alioth_addZone = (arg: Zone) => {
      this.addZone(arg)
    }
    window.$alioth_addView = (key: string, component: Component) => {
      this.componentMap[key] = component
    }

    const query = location.href.split('?')[1]
    if (query) {
      const host = decodeURIComponent(query)
      dynamicLoad(host)
      this.hostUrl = host
    }
  }

  @Watcher('code-change')
  hmr(content: string) {
    if (this.hostUrl) {
      fetch(this.hostUrl, {
        method: 'POST',
        body: content,
      })
    }
  }
}

// export function applyHost() {
//   const query = location.href.split('?')[1]
//   if (query) {
//     const state = useR(ConfigState)
//     const host = decodeURIComponent(query)
//     dynamicLoad(host)
//     state.hostUrl = host
//   }
// }
