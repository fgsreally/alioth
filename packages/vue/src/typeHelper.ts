import type { Component } from 'vue'
import type { Command, DefaultEvent, VirtualNode } from 'alioth-lib'
import type { Icon, Zone } from './model'
import type { RenderFn } from './internal'
export interface BasePreset<T, D> {
  alioth: T
  data: D
}

export type NodeAttrs = Record<string, any>
export interface AliothWidget<Meta = any> extends BasePreset<'widget', {
  mode?: string
  key: string
  component: Component
  meta?: Meta
}> {

}
export interface AliothState extends BasePreset<'state', {
  key: string
  value: any
  meta: any
}> {

}

export interface AliothRenderFn extends BasePreset<'setRenderFn', {
  mode: string
  fn: RenderFn
}> {

}

export interface AliothNodeEvent extends BasePreset<'node_event', {
  event: 'create'
  cb: (arg: { node: VirtualNode<NodeAttrs> }) => void
} | {
  event: 'insert'
  cb: (arg: { parent: VirtualNode<NodeAttrs>; child: VirtualNode<NodeAttrs>; index: number }) => void
} | {
  event: 'remove'
  cb: (arg: { node: VirtualNode<NodeAttrs> }) => void
}> {

}
export interface AliothIcon<P = any> extends BasePreset<'icon', Icon<P>> {

}

export interface AliothZone<P = any> extends BasePreset<'zone', Zone<P>> {

}

export interface AliothComponent extends BasePreset<'component', { key: string; component: Component }> {

}

export interface AliothCommand extends BasePreset<'command', Command> {

}

export interface AliothEvent<E extends DefaultEvent = DefaultEvent> extends BasePreset<'event', E> {

}
