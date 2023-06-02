import type { VirtualNode } from 'alioth-lib'
import { EXPRESS_RE } from 'phecda-vue'

export const sizeAndOffset = ['top', 'left', 'w', 'h']
export function blockToCode(VirtualNode: VirtualNode<any>) {
  let attrStr = ''
  let className = ''

  sizeAndOffset.forEach((item: string) => {
    if (VirtualNode.attrs[item]) {
      const { size, value } = VirtualNode.attrs[item]
      className += `${item}-[${value}${size}] `
    }
  })
  if (VirtualNode.attrs.class)
    className += VirtualNode.attrs.class.join(' ')
  if (VirtualNode.attrs.propsData) {
    attrStr += Object.entries(VirtualNode.attrs.propsData).map(([key, value]) => {
      if (!value)
        return ''

      if (typeof value === 'string') {
        if (EXPRESS_RE.test(value))
          return `:${key}="${value.match(EXPRESS_RE)![1]}"`
        else
          return `${key}="${value}"`
      }
      else {
        return ''
      }
    }).join(' ')
  }

  let code = `<${VirtualNode.key} ${attrStr} ${className ? `class="${className}"` : ''}>\n`

  VirtualNode.children.forEach((VirtualNode) => {
    code += blockToCode(VirtualNode)
  })

  code += `</${VirtualNode.key}>\n`
  return code
}
