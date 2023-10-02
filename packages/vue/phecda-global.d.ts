



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


declare global {
    declare const __PHECDA__: {
        command: typeof import('./dist').BaseCommandModel,
        view: typeof import('./dist').BaseViewModel
        doc: typeof import('./dist').BaseDocModel
        event: typeof import('./dist').BaseEventModel
        import: typeof import('./dist').BaseImportModel
        drag: typeof import('./dist').BaseDragModel
    
    }
    
    
    declare const $alioth_interval: typeof import('./dist').interval
    
    declare const $alioth_state: typeof import('./dist').interval.setState
    declare const $alioth_widget: (data: {
        category: string
        key: string | symbol
        component: Component
        meta?: any
    }) => void
    
    
    declare const $alioth_view: (data: {
        key: string | symbol
        component: Component
    }) => void
    
    declare const $alioth_header: (data: typeof import('./dist').Header) => void
    declare const $alioth_zone: (data: typeof import('./dist').Zone) => void
    declare const $alioth_eventStack: (data: typeof import('./dist').DefaultEvent) => void
    
}


  