import { Global, Init, Tag } from 'phecda-core'
import * as acorn from 'acorn'
import { createViteConnector } from '../utils/connector'
import { loadStyleOrScript } from '../utils/load'
import { STATE_REGEX } from '../common'
import { VirtualNode } from '../core'
import { Export, Internal } from './internal'
function extractVariables(code: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' })
  const variables = new Set()

  function visit(node: any) {
    if (node.type === 'Identifier') {
      variables.add(node.name)
    }
    else if (node.type === 'MemberExpression') {
      visit(node.object) // 访问属性访问表达式中的对象
    }
    else {
      for (const key in node) {
        if (node[key] && typeof node[key] === 'object')
          visit(node[key])
      }
    }
  }

  visit(ast)

  return Array.from(variables)
}
export const { connect, dynamicImport, urlMap, projectMap } = createViteConnector()
/**
 * connect client and vite dev server
 */
@Global
@Tag('connect')
export class BaseConnectModel {
  record: Record<string, any> = {}
  viteUrl: string
  presets: string[]
  constructor(protected internal: Internal) {

  }

  @Init
  private async _init() {
    this.internal.registerMethod('hmr', (url: string, module: any) => {
      // vite hmr will cause xx?t=xx
      this.record[url.split('?')[0]] = this.importModule(module)
    })
  }

  async connectVite(url: string) {
    if (this.viteUrl)
      return
    try {
      this.viteUrl = url
      await connect(url)
      for (const [project, entries] of projectMap.entries()) {
        for (const entry in entries) {
          const { module, url } = (await dynamicImport(project, entry))!

          this.record[url] = this.importModule(module)
        }
      }
    }
    catch (e) {
      this.viteUrl = ''
    }
  }

  async connectPresets(presets: string[]) {
    return Promise.all(presets.map(async (url) => {
      try {
        if (this.presets.includes(url))
          return
        this.presets.push(url)
        const module = await loadStyleOrScript(url)
        if (!url.endsWith('.css'))
          this.record[url] = this.importModule(module)
        else this.record[url] = {}
      }
      catch (e) {
        this.internal.invoke('error', `load dependence "${url}" failed`)
      }
    }))
  }

  importModule(module: Record<string, any>) {
    const exportsMap = {} as Record<string, any>
    for (const exports in module) {
      if (typeof module[exports] === 'object' && module[exports].alioth) {
        const { alioth: type, ...data } = module[exports]
        this.internal.import(type, data)
        exportsMap[exports] = module[exports]
      }
    }
    return exportsMap
  }

  async execWriteFiles(files: Record<string, string>) {
    if (!this.viteUrl)
      throw new Error('must connect vite dev server before generateFile')
    await fetch(new URL('/alioth/action', this.viteUrl).href, {
      method: 'POST',
      body: JSON.stringify({
        type: 'geneateFiles',
        data: files,
      }),
    })
  }

  async execBundle(entry: Record<string, string>) {
    if (!this.viteUrl)
      throw new Error('must connect vite dev server before bundleFiles')
    await fetch(new URL('/alioth/action', this.viteUrl).href, {
      method: 'POST',
      body: JSON.stringify({
        type: 'bundle',
        data: entry,
      }),
    })
  }

  async generateCode(nodes: VirtualNode[], filter: (item: Export) => boolean = () => true) {
    const widgetSet = new Set()
    const stateSet = new Set()
    const dependences = {} as Record<string, string[]>
    const effects = [] as string[]
    function parseAttrs(attrs: Record<string, any>) {
      for (const i in attrs) {
        if (typeof attrs[i] === 'object') {
          parseAttrs(attrs[i])
          continue
        }
        if (typeof attrs[i] === 'string' && STATE_REGEX.test(attrs[i])) {
          attrs[i].match(STATE_REGEX)!.map((match: string) => match.slice(2, -2)).forEach((str: string) => {
            const vars = extractVariables(str)
            vars.forEach(item => stateSet.add(item))
          })
        }
      }
    }

    nodes.forEach((node) => {
      widgetSet.add(node.attrs.key)
      parseAttrs(node.attrs)
    })

    for (const url in this.record) {
      if (url.endsWith('.css')) {
        effects.push(url)
        continue
      }
      if (!dependences[url])
        dependences[url] = []
      for (const key in this.record[url]) {
        const exports = this.record[url][key]

        if (typeof exports === 'object' && exports.alioth) {
          if (!filter(exports))
            continue

          if (exports.alioth === 'renderer')
            dependences[url].push(key)

          if (exports.alioth === 'widget' && widgetSet.has(exports.key))
            dependences[url].push(key)

          if (exports.alioth === 'state' && stateSet.has(exports.key))
            dependences[url].push(key)
        }
      }
    }
    return Object.entries(dependences).reduce((p, [url, exports]) => {
      if (exports.length === 0)
        return p
      return `${p}export {${exports.join(',')}} from '.${url.replace(this.viteUrl, '')}'\n`
    }, '') + effects.map(url => `import '${url.replace(this.viteUrl, '')}'`).join('\n')
  }
  // setState: (param: { key: string; value: any; meta: any }) => void
}
