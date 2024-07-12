import { Global, Init, Tag } from 'phecda-core'
import { Store } from '../core/store'

@Global
@Tag('internal')
export class Internal {
  stores: Record<string, Store> = {}
  // function that import those exports from sub app
  methods: Record<string, (...arg: any) => void> = {}

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

  import(name: string, { key, data, meta }: Export) {
    return this.store(name).set(key, data, meta)
  }
}

// export const internal = new Internal()

export interface Export {
  // alioth: string
  key: string
  data: any
  meta: Record<string, any>
}
