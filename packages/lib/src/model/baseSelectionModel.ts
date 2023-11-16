import { Global, Tag } from 'phecda-core'
import type { VirtualNode } from '../document'
import type { Scope } from '../core'
@Global
@Tag('selection')
export class BaseSelectionModel<T extends Record<string, any>> {
  hoverNode?: VirtualNode<T>
  selectNode?: VirtualNode<T>
  selectScope?: Scope
}
