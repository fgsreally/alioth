import { ImportModel } from './import'
import { ZoneModel } from './zone'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { EventModel } from './event'
import { FeedbackModel } from './feedback'
import { SelectionModel } from './selection'
export function initModels() {
  getR(EventModel)
  getR(ImportModel)
  getR(ZoneModel)
  getR(DragModel)
  getR(DocModel)
  getR(FeedbackModel)
  getR(SelectionModel)
}
