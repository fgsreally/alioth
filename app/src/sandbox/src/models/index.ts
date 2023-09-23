import { useO } from 'phecda-vue'

import { DocModel } from './doc'
import { ImportModel } from '@/models/import'
export function initModel() {
  useO(ImportModel)
  useO(DocModel)
}
