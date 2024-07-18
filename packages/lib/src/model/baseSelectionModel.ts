import { Global, Tag } from 'phecda-core'
import type { Scope, VirtualNode } from '../core'

@Global
@Tag('selection')
export class BaseSelectionModel<T extends Record<string, any>> {
  selectedNode: VirtualNode<T> | undefined
  hoverNode: VirtualNode<T> | undefined
  selectedPage: VirtualNode<T>
  selectedScope: Scope
  selectNode(node: VirtualNode<T>) {
    this.selectedNode = node
  }

  switchPage(page: VirtualNode<T>) {
    if (page.parentId !== 'root')
      throw new Error('page parent should be \'root\' ')
    this.selectedPage = page
  }

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

  protected readonly scopeSet = new Set<Scope>()

  get activeScopes() {
    return [...this.scopeSet]
  }

  clearActiveScopes() {
    this.activeNodeSet.clear()
  }

  deactiveScope(scope: Scope) {
    this.scopeSet.delete(scope)
  }

  activeScope(scope: Scope) {
    this.scopeSet.add(scope)
  }

  toggleScope(scope: Scope) {
    this.isActiveScope(scope) ? this.deactiveScope(scope) : this.activeScope(scope)
  }

  isActiveScope(scope: Scope) {
    return this.scopeSet.has(scope)
  }
}
