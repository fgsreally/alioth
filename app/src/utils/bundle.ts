import acorn from 'acorn'
import type { NodeAttrs, VirtualDocument, VirtualNode } from 'alioth-lib'

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
// to treeshake
export function createPresetBundleEntry(docs: VirtualDocument<NodeAttrs>[], graph: Record<string, Record<string, any>>) {
  const componentSet = new Set()
  const stateSet = new Set()
  const records = {} as Record<string, string[]>
  function parseAttrs(attrs: Record<string, any>) {
    for (const i in attrs) {
      if (typeof attrs[i] === 'object') {
        parseAttrs(attrs[i])
        continue
      }
      if (typeof attrs[i] === 'string' && /^{{(.*)}}$/.test(attrs[i])) {
        const vars = extractVariables(attrs[i])
        vars.forEach(item => stateSet.add(item))
      }
    }
  }
  function parseNode(node: VirtualNode<NodeAttrs>) {
    if (node.attrs.key)
      componentSet.add(node.attrs.key)
    parseAttrs(node.attrs)
    node.children.forEach(parseNode)
  }
  docs.forEach(doc => parseNode(doc.root))
  for (const url in graph) {
    for (const key in graph[url]) {
      const exports = graph[url][key]
      if (typeof exports === 'object' && exports.alioth) {
        if (exports.alioth === 'widget' && componentSet.has(exports.data.key)) {
          if (!records[url])
            records[url] = []
          records[url].push(key)
        }
        if (exports.alioth === 'state' && stateSet.has(exports.data.key)) {
          if (!records[url])
            records[url] = []
          records[url].push(key)
        }
      }
    }
  }

  return Object.entries(records).reduce((p, [url, exports]) => {
    return `${p}export {${exports.join(',')}} from '${url}'\n`
  }, '')
}
