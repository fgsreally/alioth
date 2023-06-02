import EventEmitter from 'eventemitter3'
import { VirtualNode } from '../VirtualNode'
import { ALIOTH_EVENT } from '../common'
import type { VirtualDocument } from '../virtualDoc'

export class IframeChunnel extends EventEmitter {
  constructor() {
    super()
    if (self !== top) {
      if (!(top as Window).alioth_iframe)
        throw new Error('iframe parentId does initlize the channel')
      return window.alioth_iframe = (top as Window).alioth_iframe
    }
  }

  bind(_vdoc: VirtualDocument) {
    this.on(ALIOTH_EVENT.PROPERTY_CHANGE, ({ id, key, value }: any) => {
      VirtualNode.BlockMap.get(id)?.setAttribute(key, value)
    })

    this.on(ALIOTH_EVENT.CREATE_BLOCK, ({ id, key, value }) => {
      const VirtualNode = new VirtualNode(key, value)
      VirtualNode.id = id
    })

    // this.on(ALIOTH_EVENT.APPEND_NODE, ({ parentId, childrenId }: any) => {
    //   const parentBlock = VirtualNode.findById(parentId)!
    //   const childBlock =  VirtualNode.findById(childrenId)!
    //   parentBlock.appendChild(childBlock)
    // })

    this.on(ALIOTH_EVENT.REMOVE_BLOCK, ({ parentId, index }: any) => {
      const parentBlock = VirtualNode.findById(parentId)!
      parentBlock.remove(index)
    })

    this.on(ALIOTH_EVENT.INSERT_BLOCK, ({ parentId, index, childrenId }: any) => {
      const parentBlock = VirtualNode.findById(parentId)!
      const childBlock = VirtualNode.findById(childrenId)!
      parentBlock.insert(childBlock, index)
    })
  }
}
