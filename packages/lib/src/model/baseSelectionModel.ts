import { Global, Tag } from 'phecda-core'
import type { VirtualNode } from '../document'

@Global
@Tag('selection')
export class BaseSelectionModel<T extends Record<string, any>> {
  hoverNode: VirtualNode<T> | undefined
  activePage: VirtualNode<T>

  protected readonly activeNodeSet = new Set<VirtualNode<T>>()

  get activeNodes() {
    return [...this.activeNodeSet]
  }

  clearActiveNodes() {
    this.activeNodeSet.clear()
  }

  deactiveNode(node: VirtualNode<T>) {
    this.activeNodeSet.delete(node)
  }

  activeNode(node: VirtualNode<T>) {
    this.activeNodeSet.add(node)
  }

  toggleNode(node: VirtualNode<T>) {
    this.isActiveNode(node) ? this.deactiveNode(node) : this.activeNode(node)
  }

  isActiveNode(node: VirtualNode<T>) {
    return this.activeNodeSet.has(node)
  }
}
