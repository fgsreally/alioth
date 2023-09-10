import type { EventModel } from "@/models/event"
import type { ConfigModel } from "@/models/config"
import { DocModel } from "@/models/doc"

declare global {
    interface Window {
        __PHECDA__:{
            doc:DocModel
            config:ConfigModel
            command:EventModel
        }
        $alioth_update: any
        $alioth_state: any
        $alioth_widget: any
        $alioth_view: any
        $alioth_zone: any
        $alioth_header:any
        $alioth_eventStack:any
    }
}
export { }