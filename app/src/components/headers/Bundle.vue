<script setup lang="ts">
import axios from 'axios'
import IconBookDown from '~icons/lucide/book-down'

import { ImportModel } from '@/models/import'
import { DocModel } from '@/models/doc'
async function download() {
  const { record, viteUrl } = getR(ImportModel)

  try {
    await axios.post(new URL('/alioth/action', viteUrl).href, {
      entry: 'entry.js',
      type: 'bundle',
      content: createEntryFileCode(useR(DocModel), record, viteUrl),
    })
  }
  catch (e) {

  }
}

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

function getDoubleBrackets(str: string) {
  const regex = /\{\{([^}]+)\}\}/g
  const matches = str.match(regex)
  return matches ? matches.map(match => match.slice(2, -2)) : []
}
function createEntryFileCode(doc: DocModel, record: Record<string, Record<string, any>>, baseUrl: string) {
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
      if (typeof attrs[i] === 'string' && /{{(.*)}}/.test(attrs[i])) {
        getDoubleBrackets(attrs[i]).forEach((str) => {
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

  for (const url in record) {
    if (url.endsWith('.css')) {
      effects.push(url)
      continue
    }
    if (!dependences[url])
      dependences[url] = []
    for (const key in record[url]) {
      const exports = record[url][key]

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
</script>

<template>
  <IconBookDown @click="download" />
</template>
