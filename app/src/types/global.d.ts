import type { CommandModel } from "@/models/event"
import type { ConfigModel } from "@/models/config"
import { DocModel } from "@/models/doc"

declare global {
    interface Window {
        __PHECDA__:{
            doc:DocModel
            config:ConfigModel
            command:CommandModel
        }
        $alioth_update: any
        $alioth_register: any
        $alioth_registerWidget: any
        $alioth_addView: any
        $alioth_addZone: any
        $alioth_addHeader:any
        $alioth_registerEvent:any
    }
}
export { }