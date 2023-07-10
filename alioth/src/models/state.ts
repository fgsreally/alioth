import { Global, Tag, Watcher, createFilter, emitter } from 'phecda-vue'

const { filter, setState } = createFilter({}, {
  errorHandler(error, errorPath) {
    emitter.emit('custom_error', { error, errorPath, type: 'Filter Error' })
  },
})

@Global
@Tag('state')
export class StateModel {
  filter = filter
  setState = setState
}
