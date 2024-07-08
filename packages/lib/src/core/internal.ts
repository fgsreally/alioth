import { Store } from './store'

class Internal {
  stores: Record<string, Store> = {}
  // function that import those exports from sub app
  methods: Record<string, (...arg: any) => void> = {}
  importers: Record<string, (arg: Export) => void> = {}
  registerStore(name: string) {
    return this.stores[name] = new Store(name)
  }

  getStore(name: string) {
    return this.stores[name]
  }

  registerMethod(name: string, fn: (...arg: any) => void | Promise<void>) {
    this.methods[name] = fn
  }

  invoke(name: string, data: any) {
    return this.methods[name] && this.methods[name](data)
  }

  registerImporter(name: string, fn: (arg: Export) => void | Promise<void>) {
    this.importers[name] = fn
  }

  import(name: string, data: Export) {
    return this.importers[name](data)
  }
}

export const internal = new Internal()

export interface Export {
  alioth: string
  mode: string
  key: string
  data: any
  meta: any
}

export async function initAlioth(mode: string[], stores: string[] = ['widget', 'renderer', 'state']) {
  stores.forEach((store) => {
    internal.registerStore(store)
    internal.registerImporter(store, (arg) => {
      internal.stores[store].set(arg.mode, arg.key, arg.data, arg.meta)
    })

    mode.forEach((m) => {
      internal.getStore(store).init(m)
    })
  })
  window.__ALIOTH__ = internal
}
