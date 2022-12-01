import type { SizeType } from '@alioth/engine'
import type { BlockType } from '../engine/init'
import { instance } from '../engine/init'
import { BREAKPOINT } from './../common/index'

export function changeStyleVar(name: string, value: any) {
  document.documentElement.style.setProperty(`--${name}`, value)
}

export function changeStyleValue(name: string, value: string) {
  document.documentElement.style[name as any] = value
}

export function toPx(block: any, key: string): number {
  const property: { size: SizeType; value: number } = block[key]
  switch (property.size) {
    case 'rem':
      return instance.container.fontSize * property.value
    case 'vw':
      return (instance.container.width * property.value) / 100
    case 'vh':
      return (instance.container.height * property.value) / 100
    case '%':
      return (getParentValue(block, 'w') * property.value) / 100
    default:
      return property.value
  }
}

export function changeBlockSize(block: any, key: string, to: SizeType) {
  if (block[key].size === to)
    return
  const px = toPx(block, key)
  block[key].size = to
  block[key].value = pxToSize(px, to, getParentValue(block, 'w'))
}

export function getParentValue(block: BlockType, key: string) {
  if ((instance as any).parent(block)?.isContainer)
    return (instance as any).data[key]
  return toPx(instance.parent(block), key)
}

export function pxToSize(px: number, to: SizeType, parentValue: number) {
  switch (to) {
    case 'rem':
      return px / instance.container.fontSize
    case 'vw':
      return (100 * px) / instance.container.width
    case 'vh':
      return (100 * px) / instance.container.height
    case '%':
      return (100 * px) / parentValue
    default:
      return px
  }
}

export function pxToBlockSize(
  block: BlockType,
  key: 'left' | 'top' | 'w' | 'h',
  px: number,
) {
  block[key].value = pxToSize(
    px,
    (block[key] as any).size,
    getParentValue(block, 'w'),
  )
}

export function toUnoClass(block: BlockType, key: 'w' | 'h' | 'left' | 'top', isImportant = true) {
  return ` ${isImportant ? 'important-' : ''}${key}-[${block[key].value}${block[key].size}] `
}

export function getBreakPointClass(block: BlockType) {
  const classStack: (string[])[] = [[], [], [], [], [], []]
  block.class.forEach((item) => {
    const classSet = item.split(':')
    classStack[BREAKPOINT[classSet[1] ? classSet[0] as any : 'normal'] as any].push(classSet.pop() as string)
  })
  let className = ''
  const level = BREAKPOINT[instance.container.mode] as any

  classStack.forEach((item, i) => {
    if (i <= level)
      item.forEach(cn => className += ` ${cn}`)
  })
  return className
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
