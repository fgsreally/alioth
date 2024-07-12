import { Global, Tag } from 'phecda-core'
import { Internal } from './internal'

@Global
@Tag('zone')
export class BaseZoneModel<Component = any> {
  constructor(protected internal: Internal) {

  }

  list() {
    return this.internal.store('zone').list()
  }
  /**
   *
   * @param zone
   * @example
   *
   * ```ts
   * {
   *   meta:{
   *   zone:'header',
   *   props:{}
   *   }
   *   data:component
   * }
   * ```
   */

  zone(zone: string): { component: Component; props: any }[] {
    const store = this.internal.store('zone')
    const list = store.list()

    return list.filter(key =>
      store.getMeta(key).zone === zone,
    ).map((key) => {
      return {
        component: store.getData(key),
        props: store.getMeta(key).props,
      }
    })
  }
}
