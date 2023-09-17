import { useO } from 'phecda-vue'

import { ImportModel } from './import'
import { ViewModel } from './view'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { EventModel } from './event'
import { ErrorModel } from './error'
export function initModel() {
  useO(ImportModel)
  useO(ViewModel)
  useO(DragModel)
  useO(DocModel)
  useO(EventModel)
  useO(ErrorModel)
}
