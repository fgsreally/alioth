import { Global, Tag } from 'phecda-core'
import { internal } from '../core/internal'

@Global
@Tag('zone')
export class BaseZoneModel<Component = any> {
  list() {
    return internal.getStore('zone').list()
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
    const store = internal.getStore('zone')
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
