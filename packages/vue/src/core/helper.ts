import type { VNode, VNodeArrayChildren, VNodeNormalizedChildren } from 'vue'
export function setProps(vnode: VNode, props: Record<string, any>) {
  vnode.props = props
}
export function mergeProps(vnode: VNode, props: Record<string, any>) {
  vnode.props = { ...vnode.props, ...props }
}

export function setChildren(vnode: VNode, children: VNodeNormalizedChildren) {
  vnode.children = children
}

export function getNormalizedChildren(vnode: VNode) {
  if (!vnode.children) {
    return {}
  }
  else if (typeof vnode.children === 'object' && !Array.isArray(vnode.children)) {
    return vnode.children
  }

  else {
    const child = vnode.children

    return {
      default: () => child,
    }
  }
}

export function getChildrenVNode(vnode: VNode, slot = 'default', slotData?: any) {
  const child = (getNormalizedChildren(vnode)[slot] as any)?.(slotData)
  return child ? (Array.isArray(child) ? child : [child]) : []
}

export function mergeChildren(vnode: VNode, children: Record<string, VNodeArrayChildren | string | null | VNode>) {
  vnode.children = { ...getNormalizedChildren(vnode), ...children }
}
