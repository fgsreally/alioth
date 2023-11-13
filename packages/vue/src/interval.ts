import { allWidgetMap, renderFnMap } from './register'

export interface Variable { value: any; from?: string; meta?: any }
export class Scope {
  constructor(public variable: Record<string, Variable> = {}) {

  }

  add(key: string, value: Variable) {
    this.variable[key] = value
  }

  get keys() {
    return Object.keys(this.variable)
  }

  get data() {
    const ret = {} as Record<string, any>
    for (const i in this.variable)
      ret[i] = this.variable[i].value

    return ret
  }

  create(variable: Record<string, Variable> = {}) {
    return new Scope({ ...this.variable, ...variable })
  }
}

export const interval = {
  widgetMap: allWidgetMap,
  scope: new Scope(),
  renderFnMap,
} as unknown as {
  docData: any
  scope: Scope
  widgetMap: typeof allWidgetMap
  renderFnMap: typeof renderFnMap
}
