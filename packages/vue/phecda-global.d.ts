



// import 'phecda-core'

// declare module 'phecda-core' {
//   interface Events {
//     dragstart: any
//     dragend: null
//     'alioth:node-action': any
//     'code-change': any
//     'custom_error': {
//       info: string
//       error: Error
//     }
//     'error_info': string
//   }
// }


declare global {
  declare const __PHECDA__: {
    command: typeof import('./dist').BaseCommandModel,
    view: typeof import('./dist').BaseViewModel
    doc: typeof import('./dist').BaseDocModel
    event: typeof import('./dist').BaseEventModel
    import: typeof import('./dist').BaseImportModel
    drag: typeof import('./dist').BaseDragModel
    selection: typeof import('./dist').BaseSelectionModel
  }


  declare const $alioth_internal: typeof import('./dist').internal



}


