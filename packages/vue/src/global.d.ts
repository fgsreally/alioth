declare global {
    interface Window {
        $alioth_mode:'dev'|'prod'
        $alioth_update: any
        $alioth_state: any
        $alioth_widget: any
        $alioth_view: any
        $alioth_zone: any
        $alioth_header:any
        $alioth_event:any
        $alioth_setRenderFn:any
        $alioth_interval:any
        $alioth_error:any
        __PHECDA__:any
         
    }
}
export {}