import EventEmitter from 'eventemitter3'
import { useAttrs } from 'vue'
export type AliothError = 'VirtualNode-props' | 'methods'

export class ErrorCollector extends EventEmitter {
  collect(type: string, cb: (...args: any[]) => void) {
    this.on(type, cb)
    return () => this.off(type, cb)
  }

  createError(type: string, symbol: string, meta?: any) {
    this.emit(type, symbol, meta)
  }

  VirtualNode(meta: any = {}) {
    const {
      _block: VirtualNode,
    } = useAttrs() as any
    const {
      key, id,
    } = VirtualNode
    this.createError(`VirtualNode-${key}`, id, Object.assign(meta, { VirtualNode }))
  }

  method(stack: string, meta: any = {}) {
    this.createError('method', stack, Object.assign(meta, { stack }))
  }
}

export const EC = new ErrorCollector()
