// @ts-expect-error need types
import json2md from 'json2md'
import { initMD } from './index'
export async function handleTsDoc(docjson: any) {
  const md = await initMD()

  const mdMap = {} as Record<string, { line: string; html: string }>
  docjson.children.forEach((item: any) => {
    if (item.signatures) {
      item.signatures.forEach((signature: any) => {
        const mdArr = [{ h2: item.name }] as any
        mdArr.push(...handleComment(signature.comment))
        mdArr.push(handleParameters(signature.parameters))
        const mdStr = json2md(mdArr)
        const html = md.render(mdStr)
        const { line, character } = item.sources[0]
        mdMap[item.name] = { html, line: `${line}:${character}` }
      })
    }
  })
  return mdMap
}

function handleComment(comment: any = {}) {
  const { summary, blockTags, modifierTags } = comment

  return [...handleModifierTags(modifierTags), ...handleContent(summary), ...handleBlockTags(blockTags),
  ]
}

function handleContent(summary: any[] = []) {
  const ret = [] as any
  summary.forEach((item) => {
    ret.push({ blockquote: item.text })
  })
  return ret
}

function handleBlockTags(tags: any[] = []) {
  const ret = [] as any

  tags.forEach((item) => {
    ret.push({ h3: item.tag })
    ret.push(...handleContent(item.content))
  })
  return ret
}

function handleModifierTags(tags: string[] = []) {
  const ret = [] as any

  tags.forEach((item) => {
    ret.push({ h3: item })
  })
  return ret
}

function handleParameters(params: any[] = []) {
  let retStr = ''
  params.forEach((item) => {
    retStr += item.type
  })
  return { p: retStr }
}
export function mdToHtml() {

}
