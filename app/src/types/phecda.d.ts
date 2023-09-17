import  'phecda-vue'

declare module 'phecda-vue' {
  interface Events {
    dragstart: any
    dragend: null
    'alioth:node-action':any
    'code-change': any
    'custom_error':{
      info:string
      error:Error
    }
    'error_info':string
  }
}

