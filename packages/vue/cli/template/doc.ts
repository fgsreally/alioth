import { BaseDocModel } from 'alioth-vue'
import { markRaw } from 'vue'
export interface NodeAttrs {

}

export class DocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  containerAttrs = markRaw(
    {

    },
  )
}
