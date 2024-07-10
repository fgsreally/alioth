import { Init } from 'phecda-vue'
import { BaseZoneModel, internal } from 'alioth-vue'

import { ImportList, Material } from '@/views/zones'
// import IconEye from '~icons/lucide/eye'
// import IconDownload from '~icons/lucide/download'
// import IconBookDown from '~icons/lucide/book-down'
// import { presets } from '@/config'

export class ZoneModel extends BaseZoneModel {
  // componentMap = componentMap as Record<string, Component>
  // headers = [
  //   {
  //     label: '实时预览',
  //     component: IconEye,
  //     handler() {
  //       // useLayer(PreviewRenderVue, {}, { title: '预览页面' })
  //     },
  //   },

  //   {
  //     label: '下载',
  //     component: IconDownload,
  //     handler() {
  //       const { presets, viteUrl } = toRaw(useR(ImportModel))

  //       axios.post(new URL('/alioth/file', viteUrl).href, {
  //         file: 'data.json',

  //         content: JSON.stringify({
  //           docs: useV(DocModel).store(),
  //           presets,
  //         }),
  //       })
  //     },
  //   }, {
  //     label: '依赖',
  //     component: IconBookDown,
  //     async handler() {
  //       const { graph, viteUrl } = useR(ImportModel)

  //       // const ret = await bundleWithEsbuild(createEntryFileCode(doc, graph, viteUrl), 'http://localhost:5173/')
  //       // ret.forEach(({ text, path }) => {
  //       //   download(path, text)
  //       // })

  //       axios.post(new URL('/alioth/action', viteUrl).href, {
  //         entry: 'entry.js',
  //         type: 'bundle',
  //         // content: createEntryFileCode(useR(DocModel), graph, viteUrl),
  //       })
  //     },
  //   },
  // ]

  // zones = [

  //   {
  //     component: 'Terminal',
  //     label: '终端',
  //     name: 'terminal',
  //     isActive: () => true,
  //     props: {
  //       x: 100,
  //       y: 300,
  //       transition: 'left',
  //       hidden: false,
  //     },

  //   },
  //   {
  //     component: 'Material',
  //     label: '物料',
  //     name: 'Material',
  //     isActive: () => true,
  //     props: {
  //       x: 100,
  //       y: 300,
  //       transition: 'left',
  //       hidden: false,
  //     },

  //   },

  //   // {

  //   {
  //     component: 'ImportList',
  //     label: '引入',
  //     name: 'importFunc',
  //     props: {
  //       x: 400,
  //       y: 580,
  //       transition: 'bottom',
  //       hidden: false,
  //     },
  //     isActive: () => true,

  //   },

  // ]

  @Init
  private _init() {
    const zoneStore = internal.getStore('zone')
    zoneStore.set(
      'ImportList', ImportList, {
        zone: 'float',
        props: {
          label: 'importlist',
          isActive: true,
          hidden: false,
          x: 100,
          y: 300,
        },
      },
    )
    // zoneStore.set('Material', Material, {
    //   zone: 'float',
    //   props: {
    //     label: 'material',
    //     isActive: true,
    //     hidden: false,
    //     x: 700,
    //     y: 300,
    //   },
    // })
  }
}
