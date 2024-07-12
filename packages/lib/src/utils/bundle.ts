import * as acorn from 'acorn'
import { BaseDocModel } from '../model/baseDocModel'
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

const STATE_REGEX = /\{\{([^}]+)\}\}/g

export function createEntryCode(doc: BaseDocModel, state: Record<string, Record<string, any>>, baseUrl: string) {
  const componentSet = new Set()
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

  doc.nodes.forEach((node) => {
    if (node.attrs.key)
      componentSet.add(node.attrs.key)
    parseAttrs(node.attrs)
  })

  for (const url in state) {
    if (url.endsWith('.css')) {
      effects.push(url)
      continue
    }
    if (!dependences[url])
      dependences[url] = []
    for (const key in state[url]) {
      const exports = state[url][key]

      if (typeof exports === 'object' && exports.alioth) {
        if (exports.alioth === 'setRenderFn' && exports.data.mode === 'runtime')
          dependences[url].push(key)

        if (exports.alioth === 'widget' && componentSet.has(exports.data.key)) {
          if (!exports.data.mode || exports.data.mode === 'runtime')
            dependences[url].push(key)
        }

        if (exports.alioth === 'state' && stateSet.has(exports.data.key))

          dependences[url].push(key)
      }
    }
  }

  return Object.entries(dependences).reduce((p, [url, exports]) => {
    if (exports.length === 0)
      return p
    return `${p}export {${exports.join(',')}} from '.${url.replace(baseUrl, '')}'\n`
  }, '') + effects.map(url => `import '${url.replace(baseUrl, '')}'`).join('\n')
}
