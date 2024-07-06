import { Store, internal } from 'alioth-lib'

export async function initAliothVue(mode: string[], stores: string[] = ['widget', 'renderer', 'state']) {
  stores.forEach((store) => {
    internal[`${store}Store`] = new Store(store)
    internal[store] = (arg: any) => {
      internal[store].set(arg.mode, arg.key, arg.data, arg.meta)
    }
    mode.forEach((m) => {
      internal[store].init(m)
    })
  })
  window.__ALIOTH__ = internal
}
