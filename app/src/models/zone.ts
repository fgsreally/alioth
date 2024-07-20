import { Init } from 'phecda-vue'
import { BaseZoneModel } from 'alioth-vue'

import ImportList from '@/components/zones/ImportList.vue'

export class ZoneModel extends BaseZoneModel {
  @Init
  private init() {
    const zoneStore = this.internal.store('zone')
    zoneStore.set(
      'ImportList', ImportList, {
        zone: 'float',
        props: {
          label: 'importlist',
          isActive: true,
          hidden: false,
          x: 100,
          y: 300,
        },
      },
    )
    // zoneStore.set('Material', Material, {
    //   zone: 'float',
    //   props: {
    //     label: 'material',
    //     isActive: true,
    //     hidden: false,
    //     x: 700,
    //     y: 300,
    //   },
    // })
  }
}
