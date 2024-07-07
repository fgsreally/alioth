import { Global, Tag } from 'phecda-core'
import type { VirtualNode } from '../document'
@Global
@Tag('selection')
export class BaseSelectionModel<T extends Record<string, any>> {
  hoverNode: VirtualNode<T> | undefined
  activePage: VirtualNode<T>

  protected readonly _activeNodeSet = new Set<VirtualNode<T>>()

  get activeNodes() {
    return [...this._activeNodeSet]
  }

  clearActiveNodes() {
    this._activeNodeSet.clear()
  }

  removeActiveNode(node: VirtualNode<T>) {
    this._activeNodeSet.delete(node)
  }

  isActiveNode(node: VirtualNode<T>) {
    return this._activeNodeSet.has(node)
  }

  selectNode(node: VirtualNode<T>) {
    if (!this._activeNodeSet.has(node))
      this._activeNodeSet.add(node)
  }
}
