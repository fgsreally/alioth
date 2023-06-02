export type Exposed = Record<string, { exposed: string[]; url: string }>
export type AllExpoesd = Record<string, Exposed>

// 创建连接器
export function createConnector() {
  const configMap: Map<string, {
    // 项目名
    project: string
    // 入口名：入口url
    entry: Record<string, string>
    // 项目url
    url: string
  }> = new Map()
  const urlMap: Map<string, { project: string; name: string }> = new Map()
  const allExposed = {} as AllExpoesd
  // 连接vite devserver
  async function connect(url: string) {
    if (urlMap.has(url))
      throw new Error(`已连接${url}`)

    const ret = await fetch(new URL('/alioth', url).href)
    const data = await ret.json()

    const { project, entry } = data
    if (configMap.has(project))
    // 绑定热更新
    throw new Error('已存在同名项目')
    const sEl = document.createElement('script')
    sEl.src = new URL('/@vite/client', url).href
    sEl.type = 'module'
    document.body.appendChild(sEl)
    for (const name in entry)
      entry[name] = new URL(entry[name], url).href

    configMap.set(project, { ...data, url })
    urlMap.set(url, { project, name: 'vite/client' })
    return {project,entry}
  }
  // 获得入口暴露的函数/变量/xx名
  // async function getFileExposed(url: string) {
  //   return Object.keys(await import(url))
  // }

  // 获得项目所有入口暴露的函数名

  async function getExposed(project: string) {
    const config = configMap.get(project)
    if (!config)
      throw new Error(`不存在项目 ${project}`)
    const { entry } = config
    const exposed = {} as Exposed

    for (const name in entry) {
      exposed[name] = { exposed: await Object.keys(await import(entry[name])), url: entry[name] }
      urlMap.set(entry[name], { project, name })
    }
    allExposed[project] = exposed
    return {
      exposed, // 一个项目暴露的东西
      allExposed, // 所有项目暴露的东西
    }
  }
  // 获得某项目某入口中的某方法
  async function dynamicImport(project: string, entry: string, method?: string) {
    const config = configMap.get(project)
    if (!config)
      throw new Error(`不存在项目 ${project}`)
    const url = config.entry[entry]
    const module = await import(url)
    return {
      // 整个模块
      module,
      // 对应的方法
      data: method && module[method],
      // 引入的 url
      url,
    }
  }

  return {
    connect, getExposed, configMap, allExposed, dynamicImport, urlMap,
  }
}
