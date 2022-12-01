import { createService } from '@alioth/engine'
export const {
  ctx,
  addService,
  isValid,
  delService,
  addContext,
  applyService,
  getService,
  storeService, applyStore,
} = createService(
  {},
  {
    type: 'functional',
    name: ['ctx'],
  },
)
