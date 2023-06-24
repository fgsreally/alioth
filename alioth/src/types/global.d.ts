import type { CommandState } from "@/models/command"
import type { ConfigState } from "@/models/config"
import { DocState } from "@/models/doc"

declare global {
    interface Window {
        __PHECDA__:{
            doc:DocState
            config:ConfigState
            command:CommandState
        }
        $alioth_update: any
        $alioth_register: any
        $alioth_registerWidget: any
        $alioth_addView: any
        $alioth_addZone: any
        $alioth_registerCommand:any
    }
}
export { }