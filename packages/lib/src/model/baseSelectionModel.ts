import { Global, Tag } from 'phecda-core'
import type { Scope, VirtualNode } from '../core'
import { BaseDocModel } from './baseDocModel'

@Global
@Tag('selection')
export class BaseSelectionModel<NodeAttrs extends Record<string, any> = any> {
  selectedScope: Scope

  constructor(protected doc: BaseDocModel<NodeAttrs>) {

  }

  protected _selectedPageId: string | undefined

  get selectedPage(): VirtualNode | undefined {
    return this._selectedPageId ? this.doc.findById(this._selectedPageId) : undefined
  }

  set selectedPage(page: VirtualNode) {
    if (page.parentId !== 'root')
      throw new Error('page parent should be \'root\' ')
    this._selectedPageId = page.id
  }

  protected _selectedNodeId: string | undefined

  get selectedNode(): VirtualNode | undefined {
    return this._selectedNodeId ? this.doc.findById(this._selectedNodeId) : undefined
  }

  set selectedNode(node: VirtualNode) {
    this._selectedNodeId = node.id
  }

  protected _hoverNodeId: string | undefined

  get hoverNode(): VirtualNode | undefined {
    return this._hoverNodeId ? this.doc.findById(this._hoverNodeId) : undefined
  }

  set hoverNode(node: VirtualNode) {
    this._hoverNodeId = node.id
  }

  protected readonly _activeNodeSet = new Set<string>()

  get activeNodes() {
    const nodes: VirtualNode<NodeAttrs>[] = []
    for (const i of this._activeNodeSet) {
      const node = this.doc.findById(i)
      if (!node)
        this._activeNodeSet.delete(i)
      else
        nodes.push(node)
    }

    return nodes
  }

  clearActiveNodes() {
    this._activeNodeSet.clear()
  }

  deactiveNode(node: VirtualNode<NodeAttrs>) {
    this._activeNodeSet.delete(node.id)
  }

  activeNode(node: VirtualNode<NodeAttrs>) {
    this._activeNodeSet.add(node.id)
  }

  toggleNode(node: VirtualNode<NodeAttrs>) {
    this.isActiveNode(node) ? this.deactiveNode(node) : this.activeNode(node)
  }

  isActiveNode(node: VirtualNode<NodeAttrs>) {
    return this._activeNodeSet.has(node.id)
  }

  protected readonly scopeSet = new Set<Scope>()

  get activeScopes() {
    return [...this.scopeSet]
  }

  clearActiveScopes() {
    this._activeNodeSet.clear()
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
