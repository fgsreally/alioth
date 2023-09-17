import  'phecda-core'

declare module 'phecda-core' {
  interface Events {
    dragstart: any
    dragend: null
    'alioth:node-action':any
    'code-change': any
  }
}

