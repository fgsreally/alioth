import { Global, Tag } from 'phecda-core'
import { internal } from '../core/internal'

@Global
@Tag('zone')
export class BaseZoneModel<Component = any> {
  list() {
    return internal.getStore('zone').list('editor')
  }

  zone(zone: string): { component: Component; props: any }[] {
    const store = internal.getStore('zone')
    const list = store.list('editor')

    return list.filter(key =>
      store.getMeta(key, 'editor').zone === zone,
    ).map((key) => {
      return {
        component: store.getData(key, 'editor'),
        props: store.getMeta(key, 'editor').props,
      }
    })
  }
}
