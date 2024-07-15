import type { Store, BaseDocModel, BaseDragModel, BaseErrorModel, BaseEventModel, BaseImportModel, BaseSelectionModel, BaseErrorModel, Internal } from "alioth-lib"
import { Alioth } from "../dev/dist/client"
import { UnwrapNestedRefs } from 'vue'
declare global {
    interface Window {
        __ALIOTH__: UnwrapNestedRefs<InstanceType<Internal>>
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