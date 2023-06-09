import { DocState as State } from 'alioth-lib/model'
import type { NodeAttrs } from 'alioth-lib'
import { Global, Tag } from 'phecda-vue'

@Global
@Tag('doc')
export class DocState<T extends NodeAttrs> extends State<T> {
  constructor() {
    super()

    this.containerAttrs = {
      width: 640,
      height: 600,
      fontSize: 16,
      backgroundColor: 'rgb(102, 107, 226)',
      gridColor: '#ff00006b',
      gridNum: 10,
      gridGap: 20,
      margin: 0,
      radius: 0,
      isContainer: true,
      isFull: false,
      isGrid: true,
      mode: 'normal',
      wLimit: [375, 2000],
      hLimit: [600, 4000],
    }
  }
}
