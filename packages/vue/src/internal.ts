import { Store, internal } from 'alioth-lib'

export async function initAliothVue(mode: string[]) {
  internal.widgetStore = new Store('widget')
  internal.stateStore = new Store('state')
  internal.renderFnStore = new Store('renderFn')

  internal.widget = (arg: any) => {
    internal.widgetStore.set(arg.mode, arg.key, arg)
  }

  internal.state = (arg: any) => {
    internal.stateStore.set(arg.mode, arg.key, arg.data)
  }

  internal.renderFn = (arg: any) => {
    internal.renderFnStore.set(arg.mode, arg.key, arg.fn)
  }

  mode.forEach((m) => {
    internal.widgetStore.init(m)
    internal.stateStore.init(m)
    internal.renderFnStore.init(m)
  })
  window.__ALIOTH__ = internal
}
