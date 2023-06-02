import { useR, useV } from 'phecda-vue'
import type { VirtualNode } from 'alioth-lib'
import { DocState } from '@/models/doc'

const { activeDoc } = useV(DocState)
export function changeStyleVar(name: string, value: any) {
  document.documentElement.style.setProperty(`--${name}`, value)
}

export function changeStyleValue(name: string, value: string) {
  document.documentElement.style[name as any] = value
}

const state={}
export function toPx(VirtualNode: any, key: string): number {
  const property: { size: string; value: number } = VirtualNode.attrs[key]
  switch (property.size) {
    case 'rem':
      return state.fontSize * property.value
    case 'vw':
      return (state.width * property.value) / 100
    case 'vh':
      return (state.height * property.value) / 100
    case '%':
      return (getParentValue(VirtualNode, 'w') * property.value) / 100
    default:
      return property.value
  }
}

export function changeBlockSize(VirtualNode: any, key: string, to: any) {
  if (VirtualNode[key].size === to)
    return
  const px = toPx(VirtualNode, key)
  VirtualNode[key].size = to
  VirtualNode[key].value = pxToSize(px, to, getParentValue(VirtualNode, 'w'))
}

export function getParentValue(VirtualNode: any, key: string) {
  if (VirtualNode?.parent === activeDoc.value.root) {
    switch (key) {
      case 'w':
        return state.width
      case 'h':
        return state.height
      case 'left':
        return 0
      case 'top':
        return 0
    }
  }
  return toPx(VirtualNode.parent, key)
}

export function pxToSize(px: number, to: string, parentValue: number) {
  switch (to) {
    case 'rem':
      return px / state.fontSize
    case 'vw':
      return (100 * px) / state.width
    case 'vh':
      return (100 * px) / state.height
    case '%':
      return (100 * px) / parentValue
    default:
      return px
  }
}

export function pxToBlockSize(
  node: any,
  key: 'left' | 'top' | 'w' | 'h',
  px: number,
) {
 return  pxToSize(
    px,
    (node.attrs[key] as any).size,
    getParentValue(node, 'w'),
  )
}

export function toUnoClass(VirtualNode: VirtualNode<any>, key: 'w' | 'h' | 'left' | 'top', isImportant = true) {
  if (!VirtualNode.attrs[key])

    return ''

  return ` ${isImportant ? 'important-' : ''}${key}-[${VirtualNode.attrs[key].value}${VirtualNode.attrs[key].size}] `
}

export function getBreakPointClass(VirtualNode: VirtualNode<any>) {
  return VirtualNode.attrs.class.join(' ')
}

export function getBreakpoint(size: number) {
  if (size < 640)
    return 'normal'
  if (size < 768)
    return 'sm'
  if (size < 1024)
    return 'md'
  if (size < 1280)
    return 'lg'
  if (size < 1536)
    return 'xl'
  return '2xl'
}

// export function fixBlockSize(sizeKey: string, offset: number) {
//   const clickBlock = (activeDoc.value.clickBlock as any)
//   if (clickBlock) {
//     const originOffset = toPx(clickBlock, sizeKey)
//     const sizeType = clickBlock[sizeKey].size
//     clickBlock[sizeKey].value = pxToSize(originOffset + offset, sizeType, getParentValue(activeDoc.value.clickBlock, 'left'))
//   }
// }
