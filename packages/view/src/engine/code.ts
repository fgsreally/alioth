import {
  COMPUTE_RE,
  codeGenerator,
  getComponent,
  sourceGenerator,
} from '@alioth/engine'
import prettier from 'prettier'
import parser from 'prettier/esm/parser-html.mjs'
import type { BlockType } from '@/engine/init'
import { Container, instance } from '@/engine/init'
import { ctx as serviceCtx } from '@/engine/service'
import { ctx as stateCtx } from '@/engine/filter'
// @ts-expect-error
export class YuHengCodeGenerator extends sourceGenerator<any, any> {

}

export function template(str: string) {
  return `<template>${str}</template>`
}

export function script(str: string) {
  return `<script setup>${str}</script>`
}

export function getTemplate(node: any) {
  let ret = ''

  ret += `<${node.tag} `

  for (const i in node.props) {
    if (COMPUTE_RE.test(node.props[i]))
      ret += `:${i}="${node.props[i].match(COMPUTE_RE)[1]}" `

    else
      ret += `${i}=${JSON.stringify(node.props[i])} `
  }
  if (node.slot)
    ret += `v-slot:${node.slot}`

  ret += '>'

  node.children.forEach((item: any) => {
    ret += getTemplate(item)
  })

  return `${ret}</${node.tag}>`
}

export function getCode(

) {
  const data = instance.data
  const state = stateCtx.state
  const services = serviceCtx.services
  return prettier.format(
    template(
      data.blocks
        .map((block: BlockType) => {
          return (getComponent(block.key) as any).code(block)
        })
        .reduce((prev: string, cur: string) => prev + getTemplate(cur), ''),
    )
    + script(
      `let state=${JSON.stringify(state)}\n${
      Object.entries(services).reduce((arr, cur) => {
        return `${arr}let ${cur[0]}=${cur[1]}\n${cur[0].startsWith('setup') ? `${cur[0]}()` : ''}`
      }, '')}`,
    ),
    { semi: false, parser: 'vue', plugins: [parser] },
  )
}
