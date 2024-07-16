import { Global, Init, Tag } from 'phecda-core'
import { Store } from '../core/store'
import { VirtualDocument } from '../core'

@Global
@Tag('internal')
export class Internal {
  stores: Record<string, Store> = {}
  // function that import those exports from sub app
  methods: Record<string, (...arg: any) => void> = {}
  importer: Record<string, (arg: Export) => void> = {}
  private readonly __importSet = new WeakSet()
  // only work for prod
  document = new VirtualDocument()
  @Init
  private _init() {
    window.__ALIOTH__ = this
  }

  store(name: string) {
    if (!this.stores[name])
      this.stores[name] = new Store(name)

    return this.stores[name]
  }

  registerMethod(name: string, fn: (...arg: any) => void | Promise<void>) {
    this.methods[name] = fn
  }

  invoke(name: string, ...args: any) {
    return this.methods[name] && this.methods[name](...args)
  }

  import(name: string, item: Export) {
    if (this.__importSet.has(item))
      return

    this.__importSet.add(item)
    const { key, data, meta } = item
    if (this.importer[name]) {
      this.importer[name]({ key, data, meta })
      return
    }
    this.store(name).set(key, data, meta)
  }

  registerImporter(name: string, importer: (arg: Export) => void) {
    this.importer[name] = importer
  }
}

export interface Export {
  // alioth: string
  key: string
  data: any
  meta: Record<string, any>
}
