export type Exposed = Record<string, { exposed: string[]; url: string }>
export type AllExpoesd = Record<string, Exposed>

// 创建连接器
export function createConnector() {
  const projectMap: Map<string, Record<string, string>> = new Map()
  const urlMap: Map<string, string> = new Map()
  // 连接vite devserver
  async function connect(url: string) {
    if (urlMap.has(url))
      return
    urlMap.set(url, null as any)
    const ret = await fetch(new URL('/alioth', url).href)
    const data = await ret.json()

    const { project, entry } = data
    if (projectMap.has(project))
      throw new Error('已存在同名项目')
    const sEl = document.createElement('script')
    sEl.src = new URL('/@vite/client', url).href
    sEl.type = 'module'
    document.body.appendChild(sEl)
    for (const name in entry) {
      entry[name] = new URL(entry[name], url).href
      urlMap.set(entry[name], project)
    }

    projectMap.set(project, entry)
    urlMap.set(url, project)
  }

  // 获得项目所有入口暴露的函数名

  // 获得某项目某入口中的某方法
  async function dynamicImport(project: string, entry: string, method?: string) {
    const entries = projectMap.get(project)
    if (!entries)
      return
    if (!(entry in entries))
      return
    const url = entries[entry]
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
    connect, projectMap, dynamicImport, urlMap,
  }
}
