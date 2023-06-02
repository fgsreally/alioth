declare global {
    interface Window {
        alioth_iframe: IframeChunnel
        $alioth_update:any
        $alioth_register:any
        $alioth_registerComponent:any
    }
}
export {}