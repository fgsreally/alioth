import type { EventModel } from "@/models/event"
import type { ZoneModel } from "@/models/zone"
import { DocModel } from "@/models/doc"

declare global {
    interface Window {
        __PHECDA__:{
            doc:DocModel
            config:ZoneModel
            command:EventModel
        }
    
    }
}
export { }