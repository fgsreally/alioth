import { VirtualDocument } from './document';
import { nanoid } from 'nanoid'
import type { DebouncedFunc } from 'lodash-es'
import { cloneDeep, debounce, get, set } from 'lodash-es'
import { ALIOTH_EVENT } from '../common'
import type { HistoryController } from './history'

export interface NodeAttrs {
  [key: string]: any
}
export class VirtualNode<A extends NodeAttrs> {
  attributes: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]> = Object.create({})
  id = nanoid()
  HC: HistoryController
  parent: VirtualNode<A> | null
  children: VirtualNode<A>[] = []
  timeout = 800
  doc:VirtualDocument<A>
  private attrsRecordMap = new Map<string | number, any>()
  private attrsRecordSet = new Set<string | number>()
  // 储存所有创建的block
  private timeRecord: Record<string | number, DebouncedFunc<any>> = {}
  constructor(public key: string, initAttrs?: NodeAttrs,
  ) {
    if (initAttrs) {
      for (const i in initAttrs)
        this.attrs[i] = initAttrs[i]
    }
  }

  get attrs(): Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]> {
    return new Proxy({}, {
      get: (_, p: string) => {
        return this.attributes[p]
      },
      set: (_, k: string, v) => {
        this.attributes[k] = v
        return true
      },
    })
    // if (__DEV__) {
    //   // const deepProxy = (obj: any, key = ''): any => {
    //   //   return new Proxy(obj, {
    //   //     get: (target, p: string) => {
    //   //       console.log(key + p)
    //   //       return (typeof target[p] === 'object' && typeof p === 'string') ? deepProxy(target, `${key + p}.`) : target[p]
    //   //     },
    //   //     set: (target, p: string, v) => {
    //   //       if (!this.attrsRecordMap[key + p]) {
    //   //         this.attrsRecordMap[key + p] = debounce(() => {
    //   //           this.keep(key + p)
    //   //         }, this.timeout)
    //   //       }
    //   //       this.attrsRecordMap[key + p]()

    //   //       target[p] = v
    //   //       return true
    //   //     },
    //   //   })
    //   // }
    //   return new Proxy(this.attributes, {
    //     get: (target, p: string) => {
    //       return target[p]
    //     },
    //     set: (target, p: string, v) => {
    //       if (target[p] === v)
    //         return true
    //       if (!this.attrsRecordMap[p]) {
    //         this.attrsRecordMap[p] = debounce(() => {
    //           this.keep(p)
    //         }, this.timeout, { leading: true })
    //       }
    //       this.attrsRecordMap[p]()

    //       target[p] = v
    //       return true
    //     },
    //   })
    // }
    // else {
    //   return new Proxy({}, {
    //     get: (_, p: string) => {
    //       return this.attributes[p]
    //     },
    //     set: (_, k: string, v) => {
    //       this.attributes[k] = v
    //       return true
    //     },
    //   })
    // }
  }

  setAttributes(values: Record<keyof NodeAttrs, NodeAttrs[keyof NodeAttrs]>) {
    this.HC.recordStart()

    for (const key in values)
      this.setAttribute(key, values[key])

    this.HC.recordEnd('undo')
  }

  toJSON(): any {
    return {
      id: this.id,
      attributes: this.attributes,
      key: this.key,
      children: this.children.map(item => item.toJSON()),
    }
  }

  // work for v-model
  keep(...keys: (keyof NodeAttrs)[]) {
    this.HC.recordStart()

    if (!this.HC)
      return
    for (const key of keys) {
      const value = cloneDeep(get(this.attributes, key))

      this.HC.emitter.emit(ALIOTH_EVENT.PROPERTY_CHANGE, { id: this.id, key, value })
      this.HC.recordStart({ type: 'property', timestamp: Date.now(), node: this, key, value })
      this.HC.recordEnd('undo')
    }
    this.HC.recordEnd('undo')
  }

  /**
        * 外部调用
        */
  public setAttribute(key: keyof NodeAttrs, value: NodeAttrs[keyof NodeAttrs],isByChannel=false) {
    if(!isByChannel)
  {  if (!this.timeRecord[key]) {
      this.timeRecord[key] = debounce((value: any) => {
        this.HC.emitter.emit(ALIOTH_EVENT.PROPERTY_CHANGE, { id: this.id, key, value: cloneDeep(value) })
        this.attrsRecordSet.add(key)
        this._setAttribute(key, value)
        this.attrsRecordMap.delete(key)
        this.attrsRecordSet.delete(key)
      }, this.timeout)
    }
    if (!this.attrsRecordMap.has(key))
      this.attrsRecordMap.set(key, cloneDeep(get(this.attributes, key)))

    this.timeRecord[key](value)}

    this._setAttribute(key, value)
  }

  /**
        * 仅被HC调用
        */
  _setAttribute(key: keyof NodeAttrs, value: NodeAttrs[keyof NodeAttrs], category?: 'redo' | 'undo') {
    const isDuring = !this.attrsRecordSet.has(key) && !category

    if (isDuring) {
      set(this.attributes, key, value)
    }
    else {
      this.HC.recordStart({ type: 'property', timestamp: Date.now(), node: this, key, value: !category ? this.attrsRecordMap.get(key) : get(this.attributes, key) })

      category && set(this.attributes, key, value)
      this.HC.recordEnd(category || 'undo')
    }
  }

  // 在父block的children中的位置
  get index() {
    return this.parent?.children.findIndex(v => v === this)
  }

  // 插入，默认插在最后
  public insert(VirtualNode: VirtualNode<A>, index = -1) {
    this.HC.emitter.emit(ALIOTH_EVENT.APPEND_NODE, { id: this.id, VirtualNode: VirtualNode.id, index })
    this._insert(VirtualNode, index)
  }

  _insert(VirtualNode: VirtualNode<A>, index: number, category: 'redo' | 'undo' = 'undo') {
    this.HC.recordStart({ type: 'insert', timestamp: Date.now(), parent: this, index })
    if (VirtualNode.parent)
      VirtualNode.parent._remove(VirtualNode.index!)
    VirtualNode.parent = this
    // VirtualNode<A>.BlockMap.set(VirtualNode.id, VirtualNode)
    if (index < 0)
      this.children.push(VirtualNode)
    else this.children.splice(index, 0, VirtualNode)

    this.HC.recordEnd(category)
  }

  // 插入，默认移除最后
  public remove(index = -1) {
    this.HC.emitter.emit(ALIOTH_EVENT.REMOVE_NODE, { id: this.id, index })
    this._remove(index)
  }

  _remove(index: number, category: 'redo' | 'undo' = 'undo') {
    let removeBlock: VirtualNode<A>
    if (index < 0)
      removeBlock = this.children.pop()!
    else removeBlock = this.children.splice(index, 1)[0]
    removeBlock.parent = null
    // VirtualNode<A>.BlockMap.delete(removeBlock.id)
    this.HC.recordStart({ type: 'remove', timestamp: Date.now(), parent: this, index, node: removeBlock })

    this.HC.recordEnd(category)
  }

  // 从子block中寻找
  findById(id: string): VirtualNode<A> | void {
    for (const VirtualNode of this.children) {
      if (VirtualNode.id === id)
        return VirtualNode
      if (VirtualNode.findById(id))
        return VirtualNode.findById(id)
    }
  }

  // 是否含有某block
  contains(VirtualNode: VirtualNode<A>) {
    return this.id === VirtualNode.id || !!this.findById(VirtualNode.id)
  }

  findByAttrs(filter: (params: NodeAttrs) => boolean | void): VirtualNode<A> [] {
    const blocks = [] as VirtualNode<A>[]
    for (const VirtualNode of this.children) {
      if (filter(VirtualNode.attributes))
        blocks.push(VirtualNode)
      blocks.push(...VirtualNode.findByAttrs(filter))
    }
    return blocks
  }
}
