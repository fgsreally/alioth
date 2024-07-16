import type { CommandModel } from "../models/command"
import type { ZoneModel } from "@/models/zone"
import { DocModel } from "@/models/doc"

declare global {
    interface Window {
        __PHECDA__:{
            doc:DocModel
            config:ZoneModel
            command:CommandModel
        }
    
    }
}
export { }