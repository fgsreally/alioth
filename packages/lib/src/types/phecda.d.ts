import  'phecda-core'

declare module 'phecda-core' {
  interface Events {
    custom_error:{type:string,error:Error}
  }
}

