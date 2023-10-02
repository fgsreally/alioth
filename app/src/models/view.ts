import { useR, useV } from 'phecda-vue'
import type { Component } from 'vue'
import { BaseViewModel } from 'alioth-vue'
import { ImportModel } from './import'
import { DocModel } from './doc'
import { componentMap } from '@/views/zones'
import { useLayer } from '@/composables/layer'
import PreviewRenderVue from '@/views/preview/PreviewRender.vue'
import IconEye from '~icons/lucide/eye'
import IconDownload from '~icons/lucide/download'
import IconBookDown from '~icons/lucide/book-down'

import { download } from '@/utils/download'
import { createPresetBundleEntry } from '@/utils/bundle'
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
  hidden: boolean
  x: number
  y: number
  fix?: boolean
  transition: string
  props: any
}

export class ViewModel extends BaseViewModel<{ useLayer: typeof useLayer }, any> {
  componentMap = componentMap as Record<string, Component>
  headers: Header[] = [
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
        const { presets } = toRaw(useR(ImportModel))
        download('data.json', JSON.stringify({
          docs: useV(DocModel).toJSON(),
          presets,
        }))
      },
    }, {
      label: '依赖',
      component: IconBookDown,
      handler() {
        const { graph, viteUrl } = useR(ImportModel)

        const doc = unref(useV(DocModel).doc)
        fetch(new URL('/alioth/file', viteUrl).href, {
          method: 'POST',
          body: JSON.stringify({
            file: 'entry.js',
            content: createPresetBundleEntry(doc, graph, viteUrl),
          }),
        }).then(() => {

        })
      },
    },
  ]

  zones: Zone[] = [

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
      hidden: false,
    },
    {
      component: 'Terminal',
      label: '终端',
      name: 'terminal',
      isActive: () => true,
      props: {
      },
      x: 100,
      y: 300,
      transition: 'left',
      hidden: false,
    },
    {
      component: 'Material',
      label: '物料',
      name: 'Material',
      isActive: () => true,
      props: {
      },
      x: 100,
      y: 300,
      transition: 'left',
      hidden: false,

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
      hidden: false,

    },
    {
      component: 'ImportList',
      label: '引入',
      name: 'importFunc',
      props: {

      },
      isActive: () => true,
      x: 400,
      y: 580,
      transition: 'bottom',
      hidden: false,

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

  ]
}
