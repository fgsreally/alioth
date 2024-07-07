import type { Store, BaseDocModel, BaseDragModel, BaseErrorModel, BaseEventModel, BaseImportModel, BaseSelectionModel, BaseErrorModel } from "alioth-lib"
import { Alioth } from "./dist/client"

declare global {
    interface Window {
        __ALIOTH__: {
            [key: string]: Store
        }
        __PHECDA__: {
            doc: typeof BaseDocModel
            drag: typeof BaseDragModel
            error: typeof BaseErrorModel
            event: typeof BaseEventModel
            import: typeof BaseImportModel
            selection: typeof BaseSelectionModel
            error: typeof BaseErrorModel
        }

    }
}
export { }