import { Store } from './store'

class Internal {
  stores: Record<string, Store> = {}
  // function that import those exports from sub app
  imports: Record<string, (arg: Export) => void> = {}

  addStore(name: string) {
    return new Store(name)
  }

  getStore(name: string) {
    return this.stores[name]
  }

  addImport(name: string, fn: (arg: Export) => void | Promise<void>) {
    this.imports[name] = fn
  }

  import(name: string, data: Export) {
    return this.imports[name](data)
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
    internal.addStore(store)
    internal.addImport(store, (arg: Export) => {
      internal.stores[store].set(arg.mode, arg.key, arg.data, arg.meta)
    })

    mode.forEach((m) => {
      internal.getStore(store).init(m)
    })
  })
  window.__ALIOTH__ = internal
}
