import { createFilter } from 'phecda-vue'

// import { createConnector } from '../connect'

// export const { connect, dynamicImport, urlMap } = createConnector()

export const { filter, data, setState } = createFilter({})

// /**
//  * 可能连接多个项目，每个项目是一个vite devserver，每个项目又会暴露多个出口，每个出口又会export 很多方法，这里把所有暴露的方法依照“项目_入口_方法”的方式进行注册
//  * 没有包含注册vue组件的部分
//  */
// export class ConnectState {
//   allExposed: AllExpoesd = {}

//   @Init
//   init() {
//     /**
//      * 用于热更新逻辑
//      */
//     window.$alioth_update = async (url: string, module: any) => {
//       this.updateFile(url.split('?')[0], module)
//     }
//   }

//   async update(project: string) {
//     const { allExposed, exposed } = await getExposed(project)
//     this.allExposed = allExposed
//     for (const entry in exposed) {
//       const { module } = await dynamicImport(project, entry)
//       exposed[entry].exposed.forEach(async (methodName: string) => {
//         setState(`${project}_${entry}_${methodName}`, module[methodName])
//       })
//     }
//   }

//   updateFile(url: string, module: any) {
//     const { project, name } = urlMap.get(url)!
//     const exposed = Object.keys(module)
//     this.allExposed[project][name].exposed = exposed
//     exposed.forEach((methodName: string) => {
//       setState(`${project}_${name}_${methodName}`, module[methodName])
//     })
//   }

//   getProjectList(name: string) {
//     const ret = [] as { name: string;entry: string,url:string }[]
//     for (const i in this.allExposed[name]) {
//       const exposed = this.allExposed[name][i]
//       const entryUrl = new URL(configMap.get(name)!.entry[i])

//       exposed.exposed.forEach((item) => {
//         if ((item as string).startsWith('_'))
//           return
//         ret.push({ name: item as string, entry: i, url: `${entryUrl.origin}/__open-in-editor?file=${entryUrl.pathname.slice(1)}` })
//       })
//     }

//     return ret
//   }
// }
