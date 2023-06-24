import {
  BaseRegister,
  allWidgetMap,
  createNameSpace,
  filter,
  getEditorStore,
  getWidget,
} from 'alioth-lib'
import type { VirtualNode } from 'alioth-lib'

import type { Component, VNode } from 'vue'
import { h } from 'vue'
import { useV } from 'phecda-vue'

import { renderer } from './renderer'
import { getBreakPointClass, toUnoClass } from '@/utils/style'
import { DocState } from '@/models/doc'

const { activeDoc } = useV(DocState)

export class Register extends BaseRegister<typeof renderer> {
  filter = filter
  renderer = renderer
  text() {
    return h('p', this.key)
  }

  preview() {
    const renderer = this.createRenderer()
    const VirtualNode = renderer
      .main()
      .useClass('block_preview')
      .response(200, 500)
      .exec()
    return VirtualNode as VNode
  }

  edit(node: VirtualNode<any>) {
    const renderer = this.createRenderer(node)
    let vnode
    if (!this.meta.isFixed) {
      vnode = renderer
        // .useFilter(State.filter)
        .slot(['default', 'header'], allWidgetMap, 'edit')
        .main()
        .getSize()
        .addClass('innerBlock_edit')
        .addClass(getBreakPointClass(node))
        .useSize()
        .draggable()
        .addClass('block_edit')
        .useOffset(this.meta.select)

        .editAction(this.meta.select)
        .exec()
    }
    else {
      vnode = renderer
        .slot(['default'], allWidgetMap, 'edit')
        .render()
        .vModel()
        .vif()
        .editAction()
        .exec()
    }

    return vnode as VNode
  }

  render(node: any) {
    const renderer = this.createRenderer(node)
    if (!this.meta.isFixed) {
      const vnode = renderer
        // .useFilter(State.filter)
        .slot(['default'], allWidgetMap, 'render')
        .main()
        .addStyle({
          top: `${node.attrs.top.value}${node.attrs.top.size}`,
          left: `${node.attrs.left.value}${node.attrs.left.size}`,
          width: `${node.attrs.w.value}${node.attrs.w.size}`,
          height: `${node.attrs.h.value}${node.attrs.h.size}`,
          position: 'absolute',
        })
        // .addClass(
        //   (node.parent === activeDoc.value.root ? 'absolute' : 'relative ')
        //   + toUnoClass(node, 'left')
        //   + toUnoClass(node, 'top')
        //   + toUnoClass(node, 'w')
        //   + toUnoClass(node, 'h'),
        // ).addClass(getBreakPointClass(node))
        // .useOffset()
        // .renderAction(ctx.context, ctx.services)
        .exec() as VNode

      return vnode
    }
    else {
      return null
    }
  }

  code(VirtualNode: BlockType) {

  }
}

export function registerWidget(
  category: string,
  key: string | symbol,

  comp: Component,
  meta?: any,
) {
  getEditorStore(category).register?.(new Register(category, key, comp, meta))
}
