import { Init, createFilter } from 'phecda-vue'
import type { AllExpoesd } from 'alioth-lib'
import { createConnector, setState } from 'alioth-lib'
import { ConfigState } from './config'
import { getQuery } from '@/utils/url'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()

// export const { filter, data, setState } = createFilter({})

export class ConnectState {
  info: Record<string, any> = {}

  @Init
  async init() {
    /**
  async    * 用于热更新逻辑
     */
    // window.$alioth_update = this.updateModule.bind(this)
    window.$alioth_register = this.updateModule.bind(this)
    const url = decodeURIComponent(getQuery('url') || '')
    if (url) {
      await connect(url)
      for (const [project, entries] of projectMap.entries()) {
        for (const entry in entries)
          await dynamicImport(project, entry)
        // window.$alioth_addZone({
        //   component: 'ImportList',
        //   label: `引入${project}`,
        //   name: 'importFunc',
        //   props: {
        //     project,
        //   },
        //   isActive: () => true,
        //   x: 0,
        //   y: 580,
        //   transition: 'bottom',
        // })
        // for (const entry in entries)
        //   this.updateModule(entries[entry], (await dynamicImport(project, entry))!.module)
      }
    }
  }

  updateModule(key: string, value: any, meta: any) {
    setState(key, null)

    setState(key, value)

    delete this.info[key]

    this.info[key] = meta
  }

  // updateModule(url: string, module: any) {
  //   const project = urlMap.get(url)!

  //   const exposed = Object.keys(module)
  //   this.allExposed[project] = {}
  //   this.allExposed[project].exposed = exposed

  //   exposed.forEach((methodName: string) => {
  //     setState(methodName, module[methodName])
  //   })
  // }

  // getProjectList(name: string) {
  //   const ret = [] as { name: string;entry: string; url: string }[]
  //   for (const i in this.allExposed[name]) {
  //     const exposed = this.allExposed[name][i]
  //     const entryUrl = new URL(configMap.get(name)!.entry[i])

  //     exposed.exposed.forEach((item) => {
  //       if ((item as string).startsWith('_'))
  //         return
  //       ret.push({ name: item as string, entry: i, url: `${entryUrl.origin}/__open-in-editor?file=${entryUrl.pathname.slice(1)}` })
  //     })
  //   }

  //   return ret
  // }
}
