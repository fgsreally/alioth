declare global {
    interface Window {
        alioth_iframe: IframeChunnel
        $alioth_update:any
        $alioth_register:any
        $alioth_registerWidget:any
        $alioth_addView:any
        $alioth_addZone:any
    }
}
export {}