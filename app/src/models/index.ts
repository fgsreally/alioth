import { useO } from 'phecda-vue'

import { ImportModel } from '../sandbox/src/models/import'
import { ViewModel } from './view'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { EventModel } from './event'
import { ErrorModel } from './error'
export function initModel() {
  useO(EventModel)

  useO(ImportModel)
  useO(ViewModel)
  useO(DragModel)
  useO(DocModel)
  useO(ErrorModel)
}
