import  'phecda-vue'

declare module 'phecda-vue' {
  interface Events {
    dragstart: any
    dragend: null
    'code-change': any
  }
}

