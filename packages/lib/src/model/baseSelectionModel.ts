import { Global, Tag } from 'phecda-core'
import type { VirtualNode } from '../core'
import { BaseDocModel } from './baseDocModel'

@Global
@Tag('selection')
export class BaseSelectionModel<NodeAttrs extends Record<string, any> = any> {
  constructor(protected doc: BaseDocModel<NodeAttrs>) {

  }

  protected _selectedPageId: string | undefined

  get selectedPage(): VirtualNode | undefined {
    return this._selectedPageId ? this.doc.findById(this._selectedPageId) : undefined
  }

  set selectedPage(value: VirtualNode | undefined) {
    this._selectedPageId = value?.id
  }

  protected _selectedNodeId: string | undefined

  get selectedNode(): VirtualNode | undefined {
    return this._selectedNodeId ? this.doc.findById(this._selectedNodeId) : undefined
  }

  set selectedNode(value: VirtualNode | undefined) {
    this._selectedNodeId = value?.id
  }

  protected _hoverNodeId: string | undefined

  get hoverNode(): VirtualNode | undefined {
    return this._hoverNodeId ? this.doc.findById(this._hoverNodeId) : undefined
  }

  set hoverNode(value: VirtualNode | undefined) {
    this._hoverNodeId = value?.id
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
}
