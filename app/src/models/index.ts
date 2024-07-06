
import { ImportModel } from './import'
import { ViewModel } from './view'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { EventModel } from './event'
import { ErrorModel } from './error'
import { SelectionModel } from './selection'
export function initModels() {
  getR(EventModel)
  getR(ImportModel)
  getR(ViewModel)
  getR(DragModel)
  getR(DocModel)
  getR(ErrorModel)
  getR(SelectionModel)
}
