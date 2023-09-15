import  'phecda-vue'

declare module 'phecda-vue' {
  interface Events {
    dragstart: any
    dragend: null
    'alioth:node-action':any
    'code-change': any
    'custom_error':{
      type:ErrorEvent[keyof ErrorEvent]
      [key in string ]:any
    }
    'error_info':string
  }
}

